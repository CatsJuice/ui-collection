<template>
  <main>
    <section>
      <header>设置颜色</header>
      <section class="color-con" :style="`width: ${36 * colNum}px;`">
        <div
          @click="updateColor(color)"
          class="color"
          v-for="(color, index) in colors"
          :key="color"
          :style="`
            background-color: ${color};
            left: ${(index % colNum) * 36}px;
            top: ${(Math.floor(index / colNum) * 36 )}px;
          `"
        ></div>
      </section>
    </section>
  </main>
</template>

<script>
import { colors } from "../tpl-0002/assets/colors";
export default {
  data() {
    return {
      colors,
      colNum: 7
    };
  },
  methods: {
      updateColor(color) {
          this.$store.commit("updateStyle0001", { key: "bgColor", value: color})
      }
  },
};
</script>

<style lang="less" scoped>
main {
  & > section {
    & > header {
      width: 100%;
      height: 40px;
      text-align: left;
      padding: 0 20px;
    }
    section.color-con {
      min-width: 100px;
      display: flex;
      flex-wrap: wrap;
      position: relative;
      margin-left: 50%;
      transform: translateX(-50%);

      .color {
        width: 36px;
        height: 36px;
        position: absolute;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &:hover {
          width: 60px;
          height: 60px;
          z-index: 10;
          transform: translate(-12px, -12px);
          border-radius: 5px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
}
</style>