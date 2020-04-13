<template>
  <main class="animation-root">
    <div class="wrap">
      <div class="loading">
        <div class="loop">
          <div class="ball"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@bg: #00bcd4;
@dark: #5499c7;
@light: #aed6f1;

@w: 100px;
@size: 20px;
@d: 10px;
main.animation-root {
  background-color: @bg;
  * {
    box-sizing: content-box;
  }

  .wrap {
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    .loading {
      width: @w;
      height: @w;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: -2px -2px 2px rgba(130, 130, 130, 0.2),
        2px 2px 5px rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      .loop {
        width: ~"calc(@{size} + @{d})";
        height: ~"calc(@{size} + @{d})";
        border-radius: 50%;
        border: @size solid @light;
        position: relative;
        .ball {
          width: @size;
          height: @size;
          border-radius: 50%;
          background-color: @dark;
          position: absolute;
          bottom: -@size;
          left: 50%;
          margin-left: ~"calc(-@{size} / 2)";
          transform-origin: ~"calc(@{size} / 2)" ~"calc((@{size} + @{d}) / -2)";
          transform: rotate(90deg);

          animation: rotateBall 2s cubic-bezier(0.5, 0.04, 0.69, 1.22) 0s
            infinite;
        }
      }
    }
  }
}

@keyframes rotateBall {
  0% {
    transform: rotate(0);
  }

  80% {
    transform: rotate(720deg);
  }
  100% {
    transform: rotate(720deg);
  }
}
</style>