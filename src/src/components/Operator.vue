<template>
  <div id="operator-container">
    <input class="check-btn" type="checkbox" v-model="showOperator" />
    <div class="check-btn">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div class="op-content">
      <header>Animation Config</header>
      <main>
        <!-- <transition enter-active-class="enter-anima" leave-active-class="leave-anima"> -->
          <component :is="componentId"></component>
        <!-- </transition> -->
      </main>
    </div>
  </div>
</template>

<script>
/* 批量导入配置项 */
const requireComponent = require.context(
  // 其组件目录的相对路径
  "@/assets/tpls/",
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /(config\.vue)$/,
  // 懒加载
  "lazy"
);
// 处理懒加载
const promisedTpls = requireComponent.keys().reduce((result, fileName) => {
  const dirNameArray = fileName.split("/").reverse();
  const dirName =
    dirNameArray[0] === "config.vue"
      ? `${dirNameArray[1]}`
      : dirNameArray[0].split(".")[0];
  const componentName = `${dirName}-config`;
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
  components: {
    ...promisedTpls
  },

  data() {
    return {
      showOperator: this.$store.state.showOperator
    };
  },

  watch: {
    showOperator(flag) {
      this.$store.commit("UPDATE", {
        key: "showOperator",
        value: flag
      });
    }
  },

  computed: {
    componentId() {
      const { currentActiveAnima } = this.$store.state;
      if (currentActiveAnima) {
        return `tpl-${currentActiveAnima}-config`;
      } else {
        return undefined;
      }
    }
  }
};
</script>

<style lang="less" scoped>
#operator-container {
  // position: fixed;

  .check-btn {
    position: fixed;
    top: 10px;
    right: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    z-index: 99;
    transform: scale(0.7);

    &:hover {
      background-color: #fafafa;
    }

    span {
      transition: all 0.2s ease-in-out;
      display: block;
      width: 70%;
      margin-left: 15%;
      height: 2px;
      background-color: #000;
      position: absolute;

      &:nth-child(1) {
        top: 50%;
      }
      &:nth-child(2) {
        top: 30%;
      }
      &:nth-child(3) {
        top: 70%;
      }
    }
  }

  .op-content {
    width: 300px;
    height: 100%;
    // position: fixed;
    right: 0;
    top: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    background-color: #fff;
    box-shadow: -2px 0px 10px rgba(0, 0, 0, 0.1);
    z-index: 98;
    // transform: translateX(120%);
    margin-right: -320px;
    transition: all 0.3s ease-in-out;

    header {
      width: 100%;
      height: 60px;
      background-color: #fff;
      line-height: 70px;
      text-align: left;
      padding-left: 20px;
      font-size: 1.2rem;
      font-weight: bold;
    }
    main {
      width: 100%;
      height: ~"calc(100% - 60px)";
      overflow-x: hidden;
      overflow-y: auto;
    }
  }

  input[type="checkbox"] {
    opacity: 0;
    z-index: 100;

    &:checked {
      & ~ div.check-btn span {
        &:nth-child(2) {
          transform: rotate(45deg);
          width: 40%;
          top: 34%;
          margin-left: 50%;
        }
        &:nth-child(3) {
          transform: rotate(-45deg);
          width: 40%;
          margin-left: 50%;
          top: 66%;
        }
      }
      & ~ div.op-content {
        // transform: translateX(0%);
        margin-right: 0;
      }
    }
  }
}

.enter-anima {
  position: absolute;
  animation: moveX1 0.3s ease 0s;
}
.leave-anima {
  position: absolute;
  animation: moveX2 0.3s ease 0s;
}
@keyframes moveX1 {
  0% {
    // transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    // transform: translateX(0%);
    opacity: 1;
  }
}
@keyframes moveX2 {
  0% {
    // transform: translateX(0%);
    opacity: 1;
  }
  100% {
    // transform: translateX(100%);
    opacity: 0;
  }
}
</style>