<template>
  <div
    class="root"
    :style="`
        width: ${width}px;
        height: ${height}px;
        border-radius: ${borderRadius}px;
    `"
  >
    <!-- 按钮 -->
    <span
      :style="`
        width: ${horizentalBorder}px;
        height: ${
            btn.class === 'volume'
                ? volumeHeight
                : btn.class === 'power'
                    ? powerHeight
                    : btn.class === 'bixby' 
                        ? bixbyHeight
                        : 0
        }px;
        border-radius: ${horizentalBorder / 2 }px;
        ${
          btn.class === 'power' 
            ? 'right: ' + horizentalBorder / -2 + 'px;' 
            : 'left: '  + horizentalBorder / -2 + 'px;'
        }
        ${
            btn.class === 'power' 
                ? 'background-color: rgb(192, 193, 195);' : ''
        }
      `"
      v-for="(btn) in sideBtns"
      :key="btn.id"
      :class="['side-btn', btn.class]"
    ></span>

    <main
      class="outer"
      :style="`
        width: ${width}px;
        height: ${height}px;
        border-radius: ${borderRadius}px;
    `"
    >
      <!-- 天线 -->
      <span
        v-for="i in 2"
        :key="i"
        class="antenna"
        :style="`
        width: ${horizentalBorder * 1.4}px;
        ${i % 2 === 0 ? 'left' : 'right'}: 15%;
      `"
      ></span>

      <!-- 屏幕总成容器 -->
      <div
        class="glass"
        :style="`
        width: ${width - 2 * horizentalBorder}px;
        height: ${height - 2 * verticalBorder}px;
        border-radius: ${borderRadius}px;
    `"
      ></div>

      <div
        class="speaker"
        :style="`
        width: ${width}px;
        height: ${verticalPadding}px;
        border-radius: ${verticalPadding / 2}px;
        top: ${verticalBorder + verticalPadding * 0.2}px;
        padding: 0 ${verticalPadding * 0.6 / 2}px;
        transform: translateX(-50%) scale(${40 / 227});
      `"
      >
        <span
          v-for="i in 13"
          :key="i"
          :style="`
            width: ${verticalPadding / 2}px;
            height: ${verticalPadding / 2}px;
          `"
        ></span>
      </div>

      <!-- 显示区域 -->
      <div
        class="screen"
        :style="`
        width: ${width - 4 * horizentalBorder}px;
        height: ${height - 2 * verticalBorder - 2*verticalPadding}px;
        border-radius: ${borderRadius}px;
    `"
      >
        <slot></slot>
      </div>

      <!-- 全局光照  1-->
      <div
        class="shadow"
        :style="`
        width: 100%;
        border-radius: ${borderRadius}px;
        left: 100%;
        box-shadow: -${width}px 0px ${width}px rgba(0,0,0, .2);
    `"
      ></div>
      <!-- 全局光照  2-->
      <div
        class="shadow"
        :style="`
        width: 100%;
        border-radius: ${borderRadius}px;
        right: 100%;
        box-shadow: ${width}px 0px ${width}px rgba(255,255,255, .2);
    `"
      ></div>

      <!-- 高光 1 -->
      <div
        class="shadow"
        :style="`
        width: ${width * 0.1}px;
        border-radius: ${borderRadius}px;
        left: 100%;
        box-shadow: -${width}px 0px ${width * 0.1}px rgba(255,255,255, .5);
    `"
      ></div>
      <!-- 高光 2 -->
      <div
        class="shadow"
        :style="`
        width: ${width * 0.05}px;
        border-radius: ${borderRadius}px;
        left: 100%;
        box-shadow: -${width}px 0px ${width * 0.05}px rgba(255,255,255, .8);
    `"
      ></div>
      <!-- 阴影 1 -->
      <div
        class="shadow"
        :style="`
        width: ${width * 0.1}px;
        border-radius: ${borderRadius}px;
        right: 100%;
        box-shadow: ${width}px 0px ${width * 0.1}px rgba(0,0,0, .3);
    `"
      ></div>
      <!-- 阴影 2 -->
      <div
        class="shadow"
        :style="`
        width: ${width * 0.1}px;
        border-radius: ${borderRadius}px;
        right: 100%;
        box-shadow: ${width}px 0px ${width * 0.05}px rgba(0,0,0, .02);
    `"
      ></div>
    </main>
  </div>
</template>

<script>
export default {
  /** props */
  /** ============================================================================= */
  props: {
    width: { type: Number, default: 227 }
  },

  /** Variables */
  /** ============================================================================= */
  data() {
    return {
      sideBtns: [
        {
          id: "1",
          class: "volume",
          height: Math.ceil(this.height * (75 / 486))
        },
        {
          id: "2",
          class: "power",
          height: Math.ceil(this.height * (35 / 486))
        },
        {
          id: "3",
          class: "bixby",
          height: Math.ceil(this.height * (35 / 486))
        }
      ]
    };
  },

  /** computed */
  /** ============================================================================= */
  computed: {
    // 上下边框厚度 px
    verticalBorder() {
      return Math.ceil(this.width * (7 / 227));
    },
    // 左右边框厚度 px
    horizentalBorder() {
      return Math.ceil((this.width * (7 / 227)) / 2);
    },
    // 上下屏幕总成与屏幕的间距 px
    verticalPadding() {
      return Math.ceil(this.width * (22 / 227));
    },
    // 圆角半径 px
    borderRadius() {
      return Math.ceil(this.width * (30 / 227));
    },
    // 总高度 px
    height() {
      return Math.ceil(this.width * (486 / 227));
    },
    // 音量键高度 px
    volumeHeight() {
      return Math.ceil(this.height * (75 / 486));
    },
    // 电源键高度 px
    powerHeight() {
      return Math.ceil(this.height * (35 / 486));
    },
    // Bixby键的高度 px
    bixbyHeight() {
      return Math.ceil(this.height * (35 / 486));
    }
  }
};
</script>

<style lang="less" scoped>
div.root {
  position: relative;
  box-shadow: 30px 30px 30px rgba(0, 0, 0, 0.05),
    15px 15px 10px rgba(0, 0, 0, 0.07), 20px 20px 20px rgba(0, 0, 0, 0.1);

  .side-btn {
    display: block;
    position: absolute;
    background-color: #fff;

    &.volume {
      top: 17.6%;
    }

    &.bixby {
      top: 36.42%;
    }

    &.power {
      top: 30.45%;
    }
  }
}
main.outer {
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(
    to right,
    rgb(255, 255, 255) 0%,
    rgb(240, 239, 241) 100%
  );

  .antenna {
    display: block;
    position: absolute;
    z-index: 0;
    height: 100%;
    background-color: rgb(217, 216, 218);
  }

  .glass {
    background-color: rgb(245, 244, 247);
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #eaeaea;
  }

  .speaker {
    position: absolute;
    border: 5px solid #eaeaea;
    z-index: 10;
    left: 50%;
    transform-origin: 50% 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      display: block;
      border-radius: 50%;
      background-color: #888;
    }
  }

  .screen {
    background-color: rgb(238, 236, 239);
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
  }

  .shadow {
    height: 100%;
    background-color: transparent;
    //   background-color:thistle;
    position: absolute;
    z-index: 99;
  }
}
</style>