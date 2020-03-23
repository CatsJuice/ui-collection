<template>
  <div id="app">
    <router-view />
    <!-- <operator /> -->
  </div>
</template>

<script>
import Operator from "./components/Operator";

export default {
  components: {
    Operator
  },
  mounted() {
    this.scrollLister = window.addEventListener("scroll", () => {
      var scroll_top = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
        //如果非IE
        scroll_top = document.documentElement.scrollTop;
      } else if (document.body) {
        //IE浏览器
        scroll_top = document.body.scrollTop;
      }
      this.$store.commit("updateScrollTop", scroll_top)
    });
  }
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  width: 100%;
  height: 100vh;
  background-color: #f6f6f6;
  display: flex;
  // @media screen and (min-width: 1920px){

  // }
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  max-width: 1920px;
  margin: 0px auto;
}
</style>
