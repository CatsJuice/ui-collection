<template>
  <main :class="['animation-root', active ? 'active' : '']">
    <!-- 屏幕的大容器 -->
    <!-- <div class="screen-container"> -->

    <!-- 空的一面屏幕 -->
    <div class="screen-half"></div>
    <!-- 实际放置内容的容器 -->
    <div class="screen" v-for="screen in 4" :key="`SCREEN_${screen}`">
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
    <!-- </div> -->
  </main>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      list: [
        { type: "r", w: [90, 70, 50] },
        { type: "l", w: [80, 50] },
        { type: "r", w: [90, 70, 50] },
        { type: "l", w: [80, 50] },
        { type: "r", w: [90, 70, 50] },
        { type: "l", w: [80, 50] }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.interval) {
        this.interval = setInterval(() => {
          setTimeout(() => {
            this.active = true;
            setTimeout(() => {
              this.active = false
            }, 1000)
          }, 1500);
        }, 2500);
      }
    });
  }
};
</script>

<style lang="less" scoped>
// @bg: #ffb3a7;
// @sbg: #4b7bec;
// @light: #85c1e9;
// @deep: #4b6584;
// @headBg: #fed330;

@bg: #3700b3;
@sbg: #130f40;
@light: #30336b;
@deep: #f9ca24;
@headBg: #6200ee;

@msgSize: 10px;
@duration: 2.5s;

@w: 72px;
@h: 132px;
main.animation-root {
  background-color: @bg;
  color: @bg;

  .screen {
    transition: all 0.5s ease-in-out;
    position: absolute;
    width: @w;
    height: @h;
    background-color: @sbg;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.1);
    transform: translateY(20px) skew(16deg) rotateX(53deg) rotateY(-2deg)
      rotateZ(-43deg);
    opacity: 1;
    &:nth-child(2) {
      transform: translateY(18px) skew(16deg) rotateX(53deg) rotateY(-2deg)
        rotateZ(-43deg);
      opacity: 0.3;
    }
    &:nth-child(3) {
      transform: translateY(16px) skew(16deg) rotateX(53deg) rotateY(-2deg)
        rotateZ(-43deg);
      opacity: 0.6;
    }
    &:nth-child(4) {
      transform: translateY(14px) skew(16deg) rotateX(53deg) rotateY(-2deg)
        rotateZ(-43deg);
      opacity: 0.8;
    }
    &:nth-child(5) {
      transform: translateY(11px) skew(16deg) rotateX(53deg) rotateY(-2deg)
        rotateZ(-43deg);
      opacity: 1;
    }

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
        background-color: @headBg;
        box-shadow: 0px 2px 8px @headBg;
        // background-image: url();
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
  }
  .screen-half {
    position: absolute;
    width: @w;
    height: @h;
    background-color: @sbg;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: -10px 10px 20px rgba(0, 0, 0, 0.5);

    opacity: 0.3;
    transform: translateY(20px) skew(16deg) rotateX(53deg) rotateY(-2deg)
      rotateZ(-43deg);
  }

  &:hover,
  &.active {
    .screen {
      &:nth-child(2) {
        transform: translateY(15px) skew(16deg) rotateX(53deg) rotateY(-2deg)
          rotateZ(-43deg);
        opacity: 0.3;
      }
      &:nth-child(3) {
        transform: translateY(8px) skew(16deg) rotateX(53deg) rotateY(-2deg)
          rotateZ(-43deg);
        opacity: 0.6;
      }
      &:nth-child(4) {
        transform: translateY(-1px) skew(16deg) rotateX(53deg) rotateY(-2deg)
          rotateZ(-43deg);
        opacity: 0.8;
      }
      &:nth-child(5) {
        transform: translateY(-12px) skew(16deg) rotateX(53deg) rotateY(-2deg)
          rotateZ(-43deg);
        opacity: 1;
      }
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
</style>