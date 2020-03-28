<template>
  <main class="animation-root">
    <div class="wrap">
      <div class="bottom"></div>
      <div class="top"></div>
      <div class="label">CatsJuice</div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@bg: #325d79;
@color-deep: #cc2a49;
@color-light: #ec6363;
@duration: 5s;

main.animation-root {
  background-color: @bg;

  .wrap {
    width: 200px;
    height: 80px;
    overflow: hidden;
    position: relative;

    .bottom,
    .top,
    .label {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      animation: l @duration ease 0s infinite;
    }

    .bottom {
      background-color: @color-light;
      border-radius: 50%;
      animation: b @duration ease 0s infinite;
      border: 2px solid @color-light;
    }
    .top {
      background-color: @color-deep;
      border-radius: 50%;
      animation: t @duration ease 0s infinite;
      border: 2px solid @color-deep;
    }
    .label {
      color: #fff;
      font-weight: 100;
    }
  }
}

@keyframes b {
  0% {
    width: 0;
    height: 0;
    border-radius: 50%;
  }
  30% {
    width: 400px;
    height: 400px;
    border-radius: 50%;
  }
  35% {
    width: 400px;
    height: 400px;
    border-radius: 0;
  }
  37% {
    width: 200px;
    height: 200px;
    border-radius: 0;
  }
  46% {
    width: 150px;
    height: 60px;
    border-radius: 0;
    background-color: transparent;
  }
  70% {
    width: 150px;
    height: 60px;
    border-radius: 0;
    background-color: transparent;
    margin-left: 5px;
    margin-top: 5px;
  }

  100% {
    width: 150px;
    height: 60px;
    border-radius: 0;
    background-color: transparent;
    margin-left: 5px;
    margin-top: 5px;
  }
}

@keyframes t {
  0% {
    width: 0;
    height: 0;
    border-radius: 50%;
  }
  3% {
    width: 0;
    height: 0;
    border-radius: 50%;
  }
  33% {
    width: 400px;
    height: 400px;
    border-radius: 50%;
  }
  35% {
    width: 400px;
    height: 400px;
    border-radius: 0;
  }
  37% {
    width: 200px;
    height: 200px;
    border-radius: 0;
  }
  46% {
    width: 150px;
    height: 60px;
    border-radius: 0;
  }
  80% {
    width: 150px;
    height: 60px;
    border-radius: 0;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  }
  100% {
    width: 150px;
    height: 60px;
    border-radius: 0;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  }
}

@keyframes l {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  3% {
    transform: translate(-50%, -50%) scale(0);
  }
  15% {
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>