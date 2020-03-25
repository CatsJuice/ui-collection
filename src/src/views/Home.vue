<template>
  <div class="home scroll-bar" :style="`height: ${wrapBoxHeight}px`">
    <div class="mask" v-if="curAni !== -1 && !!curAni"></div>
    <div
      :ref="`item${code}`"
      @mouseover="itemMouseover(code)"
      @mouseout="itemMouseout(code)"
      @click="itemClick(code, index)"
      :class="['item', curAni === code ? 'active' : '']"
      v-for="({name, code, x,y,z}, index) in list"
      :key="`${name}-${index}`"
      :style="`
        left:${curAni === code ? '50%' : x + 'px'};
        top: ${curAni === code ? '50%' : y + 'px'};
        position: ${curAni === code ? 'absolute' : 'absolute'};

        ${curAni === code ? 'z-index:200;' : ''}
        ${curAni === code ? 'border-radius: 20px;' : ''}
        ${curAni === code ? 'overflow: hidden;' : ''}
        ${curAni === code ? 'width: calc(100% - 60px);' : ''}
        ${curAni === code ? 'height: calc(100% - 60px);' : ''}
        ${curAni === code ? 'transform: translate(-50%, -50%);' : ''}
        ${curAni === code ? 'margin-top: ' + scrollTop + 'px;' : ''}

        ${z ? 'z-index: ' + z + ';' : ''}

        transition: all 0.4s ease, 
                    z-index none, 
                    position 0s ease 0.4s, 
                    margin-top none,
      `"
    >
      <component :is="name" />
      <div
        class="back-btn"
        @click.stop="itemClick(-1, -1)"
        :style="`
          opacity:${curAni === code ? 1 : 0};
          z-index: 101;
          left: ${curAni === code ? 0 : '-100px'};
          ${curAni === code ? 'transition: all 0.3s ease-in-out 0.3s;' : 'transition: all 0.3s ease-in-out 0s;'}
        `"
      >
        <img src="@/assets/back.svg" />
      </div>
    </div>
  </div>
</template>

<script>
const tplList = require("@/assets/tpls/list");
/* 批量导入配置项 */
const requireComponent = require.context(
  // 其组件目录的相对路径
  "@/assets/tpls/",
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /(index\.vue)$/,
  // 懒加载
  "lazy"
);
// 处理懒加载
const promisedTpls = requireComponent.keys().reduce((result, fileName) => {
  const dirNameArray = fileName.split("/").reverse();
  const dirName =
    dirNameArray[0] == "index.vue"
      ? `${dirNameArray[1]}`
      : dirNameArray[0].split(".")[0];
  const componentName = dirName;
  const promisedCmponent = requireComponent(fileName)
    .then(componentConfig => {
      return componentConfig.default || componentConfig;
    })
    .catch(error => {
      console.log(error);
      return;
    });
  return {
    ...result,
    ...{
      [componentName]: () => promisedCmponent
    }
  };
}, {});

import layoutMixin from "./layout.mixin";

export default {
  name: "home",
  data() {
    return {
      list: [],
      page: 0,
      size: 20,
      maxZIndex: 100
    };
  },
  mixins: [layoutMixin],
  mounted() {
    this.loadNextPage(this.page + 1);
  },
  methods: {
    loadNextPage(newPage) {
      const { page, size } = this;

      const upLimit = Math.min(size, tplList.length - page * size);
      for (let i = page * size; i < upLimit; i++) {
        const { code, name } = tplList[i];
        this.list.push({
          // name: `tpl-${code}`,
          code,
          name
        });
      }

      this.layout();
    },
    itemClick(code, index) {
      if (code !== -1) {
        // 更新所有z-index
        this.list.forEach((element, i) => {
          const z = i === index ? this.maxZIndex : 0;
          this.$set(this.list[i], "z", z);
        });
      }
      this.$store.commit("updateCurrentActiveAnimation", code);
    },

    itemMouseover(code) {
      // console.log(this.$refs[`item${code}`].currentStyle)
      const color = window
        .getComputedStyle(this.$refs[`item${code}`][0].firstChild, null)
        .getPropertyValue("background-color");
      this.$refs[`item${code}`][0].style.boxShadow = `0px 20px 40px ${color}`;
    },
    itemMouseout(code) {
      this.$refs[`item${code}`][0].style.boxShadow = `0px 5px 10px rgba(0,0,0,.2)`;
    }
  },
  components: {
    ...promisedTpls
  },
  computed: {
    curAni() {
      return this.$store.state.currentActiveAnima;
    },
    scrollTop() {
      return this.$store.state.scrollTop;
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/public.less";

* {
  transition: all 0.3s ease-in-out;
  user-select: none;
}
.home {
  width: 100%;
  margin: 0px auto;
  // padding: 50px 20px;
  // display: flex;
  // justify-content: center;
  // align-items: flex-start;
  // flex-wrap: wrap;
  transition: all 0.3s ease-in-out;

  overflow-y: auto;

  @media screen and (min-width: 1920px) {
    width: 1536px‬;
  }
}
.item {
  width: 200px;
  height: 200px;
  // background-color: #fff;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: relative;

  overflow: hidden;

  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  }

  & .back-btn {
    position: absolute;
    top: 40px;
    left: 0;
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 2px 1px 20px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 28px;
    }

    &:hover {
      width: 60px;
    }
  }
}
.grow {
  width: 200px;
  height: 1px;
  margin: 10px;
}

.mask {
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.5);
  position: fixed;
  left: 0;
  top: 0;

  transition: all 1s ease-in-out;
  backdrop-filter: blur(8px);
}
</style>
