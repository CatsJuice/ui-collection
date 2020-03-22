<template>
  <div id="app">
    <router-view />
    <operator />
  </div>
</template>

<script>
import Operator from "./components/Operator";
export default {
  components: {
    Operator
  }
}
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
  overflow-x: hidden;
  display: flex;

}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
