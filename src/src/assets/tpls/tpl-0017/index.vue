<template>
  <main class="animation-root">
    <div class="wrap">
      <div class="outer">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@bg: #1abc9c;
@color: #fff;
@border-radius: 5px;
@outer-width: 80px;
@margin: 5px;
@duration: 1.5s;
@inner-width: ~"calc((@{outer-width} - 3 * @{margin}) / 2)";

.center() {
  display: flex;
  justify-content: center;
  align-items: center;
}
main.animation-root {
  background-color: @bg;
  position: relative;
  * {
    box-sizing: content-box;
  }
  .wrap {
    width: 200px;
    height: 200px;
    display: flex;
    .center();

    .outer {
      width: @outer-width;
      height: @outer-width;
      border-radius: @border-radius;
      border: 2px solid @color;
      position: relative;
      transition: all 2s ease-in-out;
      transform: rotate(-45deg);

      animation: rotate @duration ease 0s infinite;

      .box {
        width: @inner-width;
        height: @inner-width;
        border-radius: @border-radius;
        background: @color;
        position: absolute;

        &:nth-child(1) {
          top: @margin;
          left: @margin;
          animation: slide @duration ease 0s infinite;
        }
        &:nth-child(2) {
          bottom: @margin;
          left: @margin;
        }
        &:nth-child(3) {
          bottom: @margin;
          right: @margin;
        }
      }

      //   &:hover {
      //     transform: rotate(45deg);

      //     .box {
      //       &:nth-child(1) {
      //         left: ~"calc(2*@{margin} + @{inner-width})";
      //       }
      //     }
      //   }
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotate(-45deg);
  }
  30% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(45deg);
  }
}

@keyframes slide {
  0% {
    left: @margin;
  }
  10% {
    left: @margin;
  }
  40% {
    left: ~"calc(2*@{margin} + @{inner-width})";
  }
  100% {
    left: ~"calc(2*@{margin} + @{inner-width})";
  }
}
</style>