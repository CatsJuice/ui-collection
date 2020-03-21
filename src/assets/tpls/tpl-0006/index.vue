<template>
  <main class="animation-root">
    <div class="con">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "~@/assets/style/public.less";

@h: 20px;
@m: 10px;
@dur: 1.2s;
main {
  background-color: #3498DB;
  color: #3498DB;

  div.con {
    width: 60%;
    height: @h;
    // background-color: cyan;
    span {
      display: block;
      width: @h;
      height: @h;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      position: absolute;
      left: 50%;
      @c: ~"calc(@{h} / 2)";
      &:nth-child(1) {
        // 位置 2
        margin-left: ~"calc(-@{h} - @{m} / 2)";
        animation: dot1 @dur ease 0s infinite;
      }
      &:nth-child(2) {
        // 位置 1
        margin-left: ~"calc(-2 * @{h} - @{m}*1.5)";
        animation: dot2 @dur ease 0s infinite;
      }
      &:nth-child(3) {
        // 位置 3
        margin-left: ~"calc( @{m} / 2)";
        animation: dot3 @dur ease 0s infinite;
      }
      &:nth-child(4) {
        // 位置 4
        margin-left: ~"calc(@{h} + @{m} * 1.5)";
        animation: dot4 @dur ease 0s infinite;
        transform-origin: ~"calc(-1.5 * @{m} - @{h})" 50%;
      }
    }
  }
}
// 第二个点
@keyframes dot1 {
  0% {
    margin-left: ~"calc(-@{h} - @{m} / 2)";
  }
  50% {
    margin-left: ~"calc( @{m} / 2)";
  }
  100% {
    margin-left: ~"calc( @{m} / 2)";
  }
}

// 第一个点
@keyframes dot2 {
  0% {
    margin-left: ~"calc(-2 * @{h} - @{m}*1.5)";
  }
  50% {
    margin-left: ~"calc(-@{h} - @{m} / 2)";
  }
  100% {
    margin-left: ~"calc(-@{h} - @{m} / 2)";
  }
}
// 第三个点
@keyframes dot3 {
  0% {
    margin-left: ~"calc( @{m} / 2)";
    background-color: #fff;
  }
  50% {
    margin-left: ~"calc(@{h} + @{m} * 1.5)";
    background-color: #F1C40F;
  }
  100% {
    margin-left: ~"calc(@{h} + @{m} * 1.5)";
    background-color: #F1C40F;
  }
}

// 第四个点
@keyframes dot4 {
  0% {
    transform: rotate(0);
    background-color: #F1C40F;
  }
  50% {
    transform: rotate(180deg);
    background-color: #fff;
  }
  100% {
    transform: rotate(180deg);
    background-color: #fff;
  }
}
</style>