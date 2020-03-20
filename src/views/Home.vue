<template>
  <div class="home">
    <div 
      class="item" 
      v-for="({name}, index) in list" 
      :key="`${name}-${index}`">
      <component :is="name" />
    </div>
    <div v-for="(item, index) in t" :key="`grow-${index}`" class="grow"></div>
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
  /\w+\.(vue)$/,
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

export default {
  name: "home",
  data() {
    return {
      t: [, , , , , , , , , , , , , , , ,],
      list: [],
      page: 0,
      size: 20
    };
  },
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
          name: `tpl-${code}`
        });
      }
    }
  },
  components: {
    ...promisedTpls
  }
};
</script>

<style lang="less" scoped>
* {
  transition: all 0.3s ease-in-out;
}
.home {
  width: 80%;
  height: 800px;
  margin: 0px auto;
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;

  @media screen and (min-width: 1920px) {
    width: 1536px‬;
  }
}
.item {
  width: 200px;
  height: 200px;
  background-color: #fff;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 0px 0px 15px rgba(0,0,0,.2);
  }
}
.grow {
  width: 200px;
  height: 1px;
  margin: 10px;
}
</style>
