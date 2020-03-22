<template>
  <main class="animation-root">
    <!-- 屏幕的大容器 -->
    <div class="screen-container">
      <!-- 空的一面屏幕 -->
      <div class="screen-half"></div>
      <!-- 实际放置内容的容器 -->
      <div class="screen">
        <!-- 一行消息 -->
        <div :class="['row', type]" v-for="({type, w}, index) in list" :key="index">
          <div class="msg-con">
            <div
              class="msg"
              :style="`
            width: ${width}%;
          `"
              v-for="(width, i) in w"
              :key="`${index}-${i}`"
            ></div>
          </div>
          <div class="head"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { type: "r", w: [60, 80, 70] },
        { type: "l", w: [80, 70] },
        { type: "r", w: [60, 80, 70] },
        { type: "l", w: [80, 70] },
        { type: "r", w: [60, 80, 70] },
        { type: "l", w: [80, 70] }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@bg: #283747;
@sbg: #4b7bec;
@light: #85c1e9;
@deep: #4b6584;

@msgSize: 10px;
@duration: 2s;

@w: 72px;
@h: 132px;
main.animation-root {
  background-color: @bg;
  color: @bg;
  /* 3D变形 */
  transform-style: preserve-3d;
  -webkit-perspective: 200;
  -moz-perspective: 200;
  -ms-perspective: 200;
  perspective: 200;

  .screen-container {
    width: ~"calc(@{w} * 2)";
    height: @h;
    display: flex;
    // transform: translateX(-25%) rotateY(-20deg);
    // animation: rotate3D @duration ease 0s infinite;
    transform: translateX(-25%);
    transition: all 0.3s ease-in-out;

    .screen-half {
      width: @w;
      height: @h;
    }
    .screen {
      position: relative;
      width: @w;
      height: @h;
      background-color: @sbg;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 10px -3px 10px rgba(0, 0, 0, 0.2);

      .row {
        margin: 2px 0;
        display: flex;
        position: relative;
        &:nth-child(1) {
          margin-top: 7px;
          // margin-top: -62px;
          animation: scrollTop @duration ease 0s infinite;
        }
        .msg-con {
          position: relative;
          width: 100%;
          .msg {
            margin: 0 2px;
            margin-bottom: 3px;
            height: @msgSize;
            border-radius: ~"calc(@{msgSize} / 2)";
            box-shadow: 1px 6px 10px rgba(0, 0, 0, 0.1);
          }
        }
        &.r {
          flex-direction: row;
          justify-content: flex-end;
          .msg-con {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            .msg {
              background-color: @deep;
              border-bottom-right-radius: 0;
            }
          }
          .head {
            margin: 0 5px 0 2px;
          }
        }
        &.l {
          flex-direction: row-reverse;
          justify-content: flex-end;
          // transform: translateX(-30px);
          .msg-con {
            width: 100%;
            .msg {
              border-bottom-left-radius: 0;
              background-color: @light;
            }
          }
          .head {
            margin: 0 2px 0 5px;
          }
        }

        .head {
          flex-shrink: 0;
          width: @msgSize;
          height: @msgSize;
          border-radius: 50%;
          background-color: #fed330;
          box-shadow: 0px 2px 7px #fed330;
          // background-image: url();
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      }
    }
  }
  .screen-container::after {
    content: "";
    position: absolute;
    bottom: -15px;
    right: 0;
    width: 50%;
    height: 10px;
    background-color: transparent;
    //   background-color: snow;
    background-color: #000;
    border-radius: 2px;
    transform: scale(0.5)
      matrix3d(1, 0, 0, 0, -0.9, 1, 1, 0, 0, 0, 1, 0, 2, 5, 4, 0.9);
    box-shadow: 0px 0px 2px #000;
    filter: blur(14px);
  }
  &:hover {
    .screen-container {
      transform: translateX(-25%) rotateY(-30deg);
    }
  }
}
@keyframes scrollTop {
  0% {
    // margin-top: -62px;
    margin-top: 7px;
  }
  60% {
    margin-top: 7px;
  }
  100% {
    margin-top: -62px;
  }
}

// @keyframes rotate3D {
//   0% {
//     transform: translateX(-25%);
//   }
//   50% {
//     transform: translateX(-25%) rotateY(-20deg);
//   }
//   100% {
//     transform: translateX(-25%);
//   }
// }
</style>