<template>
  <div class="item-container" :style="`
    background-color: ${bgColor};
    color: ${bgColor};
  `">
    <div class="animation-container">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    bgColor() {
      return this.$store.state.tpl0001.bgColor
    }
  }
};
</script>

<style lang="less" scoped>
.item-container {
  width: 100%;
  height: 100%;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: #48c9b0;
  color: #48c9b0;
  border-radius: 5px;

  .animation-container {
    width: 100px;
    height: 100px;
    position: relative;

    span {
      display: block;
      // background-color: rgb(59, 59, 59);
      background-color: #fff;
      width: 90%;
      height: 7%;
      position: absolute;
      left: 5%;

      top: 50%;
      margin-top: -3.5%;

      transition: all 0.3s ease-in-out;

      &:nth-child(1) {
        top: 30%;
      }
      &:nth-child(2) {
        top: 50%;
      }
      &:nth-child(3) {
        top: 70%;
      }
    }
  }

  &:hover {
    box-shadow: 0px 30px 40px currentColor;

    span {
      &:nth-child(1) {
        width: 54%;
        transform: rotate(-45deg);
        left: 0%;
      }
      &:nth-child(2) {
      }
      &:nth-child(3) {
        width: 54%;
        transform: rotate(45deg);
        left: 0%;
      }
    }
  }
}
</style>