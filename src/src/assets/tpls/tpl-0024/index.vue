<template>
  <main class="animation-root" :style="rootStyle">
    <flex-box class="screen" v-if="curAni === '0024'">
      <!-- 左侧 -->
    </flex-box>
  </main>
</template>

<script>
import FlexBox from "@/components/common/FlexBox";

export default {
  components: {
    FlexBox
  },
  computed: {
    curAni() {
      return this.$store.state.currentActiveAnima;
    },
    rootStyle() {
      if (this.curAni === "0024") return {};
      return {
        backgroundImage: `url(${require("./assets/imgs/prev.jpg")})`
      };
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/ttf/font.css";

main.animation-root {
  background-color: rgb(180, 209, 247);
  font-family: "MYFONT";
  background-repeat: no-repeat;
  background-position: center;
  background-size: 80%;

  .screen {
    width: 1200px;
    height: 700px;
    background-color: #fff;
    border-radius: 30px;
  }
}
</style>