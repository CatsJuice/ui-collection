<template>
  <main class="animation-root">
    <div class="wrap">
      <div class="straw">
        <div class="s1"></div>
        <div class="s2"></div>
      </div>
      <div class="cup">
        <div class="juice j1"></div>
        <div class="juice j2"></div>
        <div class="juice j3"></div>

        <div class="light l1"></div>
        <div class="light l2"></div>

        <div class="bubbles">
          <div class="bubble" v-for="i in 10" :key="i"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@bg: #1e272e;
@cup-color: rgba(214, 234, 248, 0.2);
@cup-border: rgba(214, 234, 248, 0.5);
@w: 60px;
@h: 120px;
@duration: 10s;
@straw-color: #ec7063;
main.animation-root {
  background-color: @bg;

  .wrap {
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    .cup {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: @w;
      height: @h;
      background-color: @cup-color;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      border: 2px solid @cup-border;
      border-top: 2px solid transparent;
      box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.9);

      overflow: hidden;

      .juice {
        width: 500px;
        height: 500px;
        background-color: rgba(255, 168, 1, 1);
        position: absolute;
        transform: rotate(45deg);
        transform-origin: 0 0;
        bottom: -500px;
        left: 50%;

        &.j1 {
          border-radius: 200px;
          bottom: -420px;
          background-color: @bg;
          background-color: rgba(255, 168, 1, 0.7);
          animation: juice @duration linear 0s infinite;
        }

        &.j2 {
          bottom: -395px;
          left: -10px;
          border-radius: 260px;
          background-color: rgba(255, 168, 1, 0.3);
          animation: juice @duration linear 0s infinite;
        }

        &.j3 {
          left: 40%;
          bottom: -420px;
          border-radius: 180px;
          background-color: rgba(255, 168, 1, 0.2);
          animation: juice @duration linear 0s infinite;
        }
      }

      .light {
        width: 6px;
        height: 20px;
        border-radius: 3px;
        position: absolute;
        left: 5px;
        background-color: rgba(255, 255, 255, 0.4);

        &.l1 {
          height: 50px;
          top: 20px;
        }
        &.l2 {
          top: 75px;
        }
      }

      .bubbles {
        width: 100%;
        height: 100%;
        position: absolute;
        .bubble {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 1);
          left: 10px;
          &:nth-child(1) {
            top: 110%;
            left: 10px;
            width: 5px;
            height: 5px;
            animation: bubble @duration ease 0s infinite;
          }
          &:nth-child(2) {
            top: 120%;
            left: 25px;
            width: 8px;
            height: 8px;
            animation: bubble @duration linear 0.03s infinite;
          }
          &:nth-child(3) {
            top: 104%;
            left: 20px;
            width: 12px;
            height: 12px;
            animation: bubble @duration linear 0.05 infinite;
          }
          &:nth-child(4) {
            top: 106%;
            left: 30px;
            width: 8px;
            height: 8px;
            animation: bubble @duration linear 0.08s infinite;
          }
          &:nth-child(5) {
            top: 112%;
            left: 40px;
            width: 2px;
            height: 2px;
            animation: bubble @duration linear 0.1s infinite;
          }
          &:nth-child(6) {
            top: 109%;
            left: 50px;
            width: 8px;
            height: 8px;
            animation: bubble @duration linear 0.12s infinite;
          }
          &:nth-child(7) {
            top: 102%;
            left: 40px;
            width: 9px;
            height: 9px;
            animation: bubble @duration linear 0.2s infinite;
          }
          &:nth-child(8) {
            top: 107%;
            left: 26px;
            width: 12px;
            height: 12px;
            animation: bubble @duration linear 0.3s infinite;
          }
          &:nth-child(9) {
            top: 111%;
            left: 15px;
            width: 4px;
            height: 4px;
            animation: bubble @duration linear 0.1s infinite;
          }
          &:nth-child(10) {
            top: 105%;
            left: 35px;
            width: 9px;
            height: 9px;
            animation: bubble @duration linear 0.2s infinite;
          }
        }
      }
    }

    .straw {
      position: absolute;
      width: @w;
      height: @h;
      //   background-color: yellow;

      @out-size: 20px;
      .s1 {
        width: 5px;
        height: ~"calc(@{h} + @{out-size} + 4px)";
        transform-origin: 50% @out-size;
        background-color: @straw-color;
        position: absolute;
        right: 0;
        top: -@out-size;
        transform: rotate(15deg);
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
      }
      .s2 {
        width: 5px;
        height: 30px;
        transform-origin: 0 0;
        background-color: @straw-color;
        position: absolute;
        transform: rotate(-80deg);
        right: -5px;
        top: ~"calc(-@{out-size} + 5px)";
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
      }
    }
  }
}

@keyframes juice {
  0% {
    transform: rotate(45deg) translateY(30px);
  }
  10% {
    transform: rotate(43deg) translateY(0);
  }
  20% {
    transform: rotate(45deg) translateY(-30px);
  }
  30% {
    transform: rotate(48deg) translateY(-60px);
  }
  40% {
    transform: rotate(45deg) translateY(-90px);
  }
  50% {
    transform: rotate(46deg) translateY(-120px);
  }
  60% {
    transform: rotate(45deg) translateY(-90px);
  }
  70% {
    transform: rotate(48deg) translateY(-60px);
  }
  80% {
    transform: rotate(45deg) translateY(-30px);
  }
  90% {
    transform: rotate(43deg) translateY(0);
  }
  100% {
    transform: rotate(45deg) translateY(30px);
  }
}
@keyframes bubble {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.8;
  }
  10% {
    transform: translateY(0) scale(1);
    opacity: 0.5;
  }
  60% {
    transform: translateY(-70px) scale(1.2);
    opacity: 0;
  }
  100% {
    transform: translateY(-70px) scale(1.2);
    opacity: 0;
  }
}
</style>