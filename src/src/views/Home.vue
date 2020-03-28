<template>
  <main style="width:100%;">
    <div class="home scroll-bar" :style="`height: ${wrapBoxHeight}px`">
      <div class="mask" v-if="curAni !== -1 && !!curAni"></div>
      <div
        :ref="`item${code}`"
        @mouseover="itemMouseover(code)"
        @mouseout="itemMouseout(code)"
        @click="itemClick(code, index)"
        :class="['item', curAni === code ? 'active' : '']"
        v-for="({name, code,description,  x,y,z}, index) in list"
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
        <div :class="['info-container', curAni === code ? 'show' : 'hide']">
          <h3>{{ code }}</h3>
          <p>{{ description }}</p>
        </div>
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
    <div class="load-btn" @click="loadNextPage()">
      <span>{{ loadAll ? '已加载全部' : '加载更多' }}</span>
      <svg
        t="1585406512582"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2254"
      >
        <path
          d="M138.2 512.1c0-206.1 167.1-373.2 373.2-373.2S884.6 306 884.6 512.1 717.5 885.3 511.4 885.3c-206.1 0.1-373.2-167-373.2-373.2zM511.5 64.3c-247.4 0-447.9 200.5-447.9 447.9C63.6 759.5 264.1 960 511.5 960c247.4 0 447.9-200.5 447.9-447.9-0.1-247.3-200.6-447.8-447.9-447.8z m37.3 298.5c0-20.6-16.7-37.3-37.3-37.3s-37.3 16.7-37.3 37.3v208.5L425.9 523c-14.6-14.6-38.2-14.6-52.8 0-14.6 14.6-14.6 38.2 0 52.8l112 112c7 7 16.5 10.9 26.4 10.9s19.4-3.9 26.4-10.9l112-112c14.6-14.6 14.6-38.2 0-52.8-14.6-14.6-38.2-14.6-52.8 0l-48.3 48.3V362.8z"
          p-id="2255"
          fill="currentColor"
        />
      </svg>
    </div>
  </main>
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
      maxZIndex: 100,
      loadAll: false
    };
  },
  mixins: [layoutMixin],
  mounted() {
    this.loadNextPage();
  },
  methods: {
    loadNextPage() {
      const { page, size } = this;

      const upLimit = Math.min(size, tplList.length - page * size);
      if (upLimit <= 0) {
        this.loadAll = true;
        return;
      } else if (upLimit < size) {
        this.loadAll = true;
      }

      const base = page * size;
      for (let i = 0; i < upLimit; i++) {
        const { code, name, description } = tplList[i + base];
        this.list.push({
          // name: `tpl-${code}`,
          code,
          name,
          description
        });
      }
      this.page++;
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
      this.$refs[
        `item${code}`
      ][0].style.boxShadow = `0px 5px 10px rgba(0,0,0,.2)`;
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
  // position: relative;

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

  .info-container {
    max-width: 300px;
    min-height: 60px;
    min-width: 100px;
    padding: 20px;
    position: absolute;
    bottom: 20px;
    background-color: #eee;
    border-radius: 15px;
    // text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: inset -2px -2px 4px rgba(255, 255, 255, 0.2),
      inset 4px 4px 4px rgba(0, 0, 0, 0.2);
    user-select: text;
    opacity: 0;
    &:hover {
      opacity: 1;
    }
    &.hide {
      transform: translateY(~"calc(100% + 50px)");
    }
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.9rem;
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

.load-btn {
  // position: absolute;
  bottom: 50px;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: -50px;
  font-size: 0.8rem;
  width: 200px;
  height: 44px;
  line-height: 44px;
  cursor: pointer;
  border-radius: 22px;
  background-color: transparent;
  font-weight: bold;
  position: relative;

  .icon {
    position: absolute;
    right: 7px;
    top: 7px;
    width: 20px;
    height: 30px;
    // color: #555555;
    transition: all 0.022s ease-in-out;
  }
  transition: all 0.3s ease-in-out;
  box-shadow: -2px -2px 7px rgba(255, 255, 255, 0.9),
    2px 2px 4px rgba(0, 0, 0, 0.2), inset -2px -2px 7px rgba(255, 255, 255, 0),
    inset 2px 2px 4px rgba(0, 0, 0, 0);
  color: #555555;

  &:hover {
    width: 250px;
    box-shadow: -2px -2px 7px rgba(255, 255, 255, 0),
      2px 2px 4px rgba(0, 0, 0, 0), inset -2px -2px 7px rgba(255, 255, 255, 0.9),
      inset 2px 2px 4px rgba(0, 0, 0, 0.2);
    color: #222;
    letter-spacing: 5px;
  }
  @media (prefers-color-scheme: dark) {
    box-shadow: -2px -2px 4px rgba(255, 255, 255, 0.08),
      2px 2px 5px rgba(0, 0, 0, 0.3), inset -3px -3px 6px rgba(255, 255, 255, 0),
      inset 4px 4px 6px rgba(0, 0, 0, 0);
    color: #ddd;

    &:hover {
      width: 250px;
      box-shadow: -3px -3px 6px rgba(255, 255, 255, 0),
        4px 4px 6px rgba(0, 0, 0, 0),
        inset -3px -3px 6px rgba(255, 255, 255, 0.15),
        inset 4px 4px 6px rgba(0, 0, 0, 0.3);
      color: #fff;
    }
  }
}
</style>
