<template>
    <component :is="id" />
</template>

<script>
const tplList = require("@/assets/tpls/list");
/* 批量导入配置项 */
const requireComponent = require.context(
  // 其组件目录的相对路径
  "./d/",
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /(\.vue)$/,
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
    data() {
        return {
            id: undefined
        }
    },
    mounted() {
        const id = this.$route.params.id;

        const components = Object.keys(promisedTpls)
        if (components.indexOf(id) < 0) {
            this.id = components[0]
        } else {
            this.id = id;
        }
    },

    components: {
        ...promisedTpls
    }
}
</script>