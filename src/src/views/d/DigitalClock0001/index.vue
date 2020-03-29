<template>
  <main class="d-root" :style="`background:${themes[theme].bg};`">
    <div class="display-area">
      <div v-for="c in clock" :key="c.class" :class="c.class">
        <div
          v-for="i in 2"
          :key="i"
          class="bar"
          :style="`
                height: ${10 * 2 + (c.keys[i-1] === 'h1' ? 3 : 10) * 80 + 'px'};
                transform: translateY(${ time[c.keys[i-1]] * -80 + 'px'});
                ${themes[theme].barShadow ? 'box-shadow:' + themes[theme].barShadow + ';' : ''}
            `"
        >
          <!-- <div class="card" :style="`top: ${10 + time[c.keys[i-1]] * 80 + 'px'}`"></div> -->
          <div
            :class="['num', time[c.keys[i-1]] === j-1 ? 'active' : '']"
            v-for="j in c.keys[i-1] === 'h1' ? 3 : 10"
            :style="`
              ${time[c.keys[i-1]] === j-1 ? 
                'color: ' + themes[theme].primaryText : 
                'color: ' + themes[theme].textNormal 
              };

              ${time[c.keys[i-1]] === j-1 ? 
                'text-shadow: ' + themes[theme].primaryTextShadow : 
                ''
              };

              ${time[c.keys[i-1]] !== j-1 ?
                'text-shadow:' + themes[theme].textNormalShadow :
                ''
              };
            `"
            :key="j"
          >{{ j - 1 }}</div>

          <!-- 重置按钮 -->
          <div @click="reset" class="reset-ghost" v-if="c.keys[i-1] === 'h1'">
            <svg
              t="1585466044257"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2986"
              width="30"
              height="30"
            >
              <path
                class="refresh-btn"
                d="M753.066667 270.933333C691.2 209.066667 606.293333 170.666667 512 170.666667 323.413333 170.666667 170.666667 323.413333 170.666667 512 170.666667 700.586667 323.413333 853.333333 512 853.333333 671.146667 853.333333 803.84 744.533333 841.813333 597.333333L753.066667 597.333333C718.08 696.746667 623.36 768 512 768 370.773333 768 256 653.226667 256 512 256 370.773333 370.773333 256 512 256 582.826667 256 645.973333 285.44 692.053333 331.946667L554.666667 469.333333 853.333333 469.333333 853.333333 170.666667 753.066667 270.933333Z"
                p-id="2987"
              />
            </svg>
          </div>

          <!-- 切换主题 -->
          <div @click="switchTheme" class="theme-ghost" v-if="c.keys[i-1] === 'h1'">
            <svg
              t="1585482572258"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1396"
              width="30px"
              height="30px"
            >
              <path
                class="icon"
                d="M277.333333 554.666667a64 64 0 1 1 0-128 64 64 0 0 1 0 128z m469.333334 0a64 64 0 1 1 0-128 64 64 0 0 1 0 128z m-128-170.666667a64 64 0 1 1 0-128 64 64 0 0 1 0 128z m-213.333334 0a64 64 0 1 1 0-128 64 64 0 0 1 0 128zM512 943.744C276.352 943.744 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667c0 124.970667-113.28 289.28-320 226.389333-69.205333-21.034667 92.586667 205.354667-106.666667 205.354667z m0-85.333333a119.466667 119.466667 0 0 0 18.688-1.28c-0.170667-2.005333-0.341333-4.821333-0.682667-8.448-0.853333-8.533333-2.517333-18.133333-5.546666-32.554667l-2.986667-14.037333c-1.237333-5.973333-2.133333-10.538667-2.986667-15.061334a178.688 178.688 0 0 1-3.626666-38.613333c1.877333-67.2 60.928-112.256 128.64-91.690667C765.354667 693.802667 853.333333 614.485333 853.333333 512a341.333333 341.333333 0 1 0-682.666666 0c0 189.781333 154.069333 346.410667 341.333333 346.410667z"
                p-id="1397"
              />
            </svg>
          </div>
        </div>

      <!-- 激活的时间数字背景 -->
        <div
          v-for="i in 2"
          :key="`card${i}`"
          class="active-bg-card"
          :style="`
            left: ${(i - 1) * (80 + 16) + 16}px;
            top: 18px;
            background: ${themes[theme].primary};
            box-shadow: ${themes[theme].primaryShadow};
        `"
        ></div>
      </div>
    </div>
  </main>
</template>

<script>
import themes from "./themes";

export default {
  mounted() {
    const storedTheme = window.localStorage.getItem("digitalClock0001Theme");
    if (storedTheme) {
      themes.forEach(({ id }, index) => {
        if (id === storedTheme) this.theme = index;
      });
    }
    this.start();
  },
  data() {
    return {
      theme: 0,
      clock: [
        {
          class: "hour",
          keys: ["h1", "h2"]
        },
        {
          class: "minute",
          keys: ["m1", "m2"]
        },
        {
          class: "second",
          keys: ["s1", "s2"]
        }
      ],
      time: {
        // y1: 0,
        // y2: 0,
        // y3: 0,
        // y4: 0,

        // m1: 0,
        // m2: 0,

        // d1: 0,
        // d2: 0,

        h1: 0,
        h2: 0,

        m1: 0,
        m2: 0,

        s1: 0,
        s2: 0
      },
      themes
    };
  },
  methods: {
    start() {
      if (!this.interval) {
        this.interval = setInterval(() => {
          const time = new Date();
          const hour = time.getHours();
          const minute = time.getMinutes();
          const second = time.getSeconds();

          this.$set(this.time, "h1", Math.floor(hour / 10));
          this.$set(this.time, "h2", hour % 10);
          this.$set(this.time, "m1", Math.floor(minute / 10));
          this.$set(this.time, "m2", minute % 10);
          this.$set(this.time, "s1", Math.floor(second / 10));
          this.$set(this.time, "s2", second % 10);
        }, 100);
      }
    },

    reset() {
      clearInterval(this.interval);
      this.interval = undefined;
      this.time = {
        // y1: 0,
        // y2: 0,
        // y3: 0,
        // y4: 0,

        // m1: 0,
        // m2: 0,

        // d1: 0,
        // d2: 0,

        h1: 0,
        h2: 0,

        m1: 0,
        m2: 0,

        s1: 0,
        s2: 0
      };
      setTimeout(() => {
        this.start();
      }, 1300);
    },

    /**
     * 切换主题
     * */
    switchTheme() {
      if (this.theme === this.themes.length - 1) {
        this.theme = 0;
      } else {
        this.theme++;
      }
      window.localStorage.setItem(
        "digitalClock0001Theme",
        themes[this.theme].id
      );
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/ttf/font.css";
// @bg: #EAECEE;
// @bg: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
// @bg: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);
// @bg: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
// @bg: radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%);
// // @bg: linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);
// @bg: linear-gradient(45deg, #c4cdd6 0%, #e8ebf2 50%, #d9e1eb 100%),
//   linear-gradient(
//     -45deg,
//     rgba(0, 0, 0, 0.02) 50%,
//     rgba(255, 255, 255, 0.02) 61%,
//     rgba(0, 0, 0, 0.02) 73%
//   ),
//   linear-gradient(33deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%);

@bg: inear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
@bar-width: 100px;
main.d-root {
  background: @bg;
  background-image: linear-gradient(to left, #e6e9f0 0%, #eef1f5 100%);
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  .display-area {
    width: 500px;
    height: 100px;
    position: relative;

    .hour {
      position: absolute;
      display: flex;
      left: 50%;
      transform: translateX(-165%);
    }
    .minute {
      position: absolute;
      display: flex;
      left: 50%;
      transform: translateX(-50%);
    }
    .second {
      position: absolute;
      display: flex;
      left: 50%;
      transform: translateX(65%);
    }

    // 被激活的时间数字背景
    .active-bg-card {
      width: 64px;
      height: 80px;
      background-color: #222f3e;
      position: absolute;
      z-index: -1;
      border-radius: 10px;
      box-shadow: inset -3px -3px 4px rgba(255, 255, 255, 0.25),
        inset 3px 3px 16px rgba(0, 0, 0, 0.2);
    }

    .bar {
      width: 80px;
      height: auto;
      margin: 8px;
      background: transparent;
      border-radius: 10px;
      box-shadow: -5px -5px 8px rgba(255, 255, 255, 0.65),
        4px 4px 8px rgba(0, 0, 0, 0.15);
      transition: all 0.7s ease;
      //   transition: all 1s linear;
      padding: 10px 10px;
      box-sizing: border-box;
      .card {
        width: 80%;
        left: 10%;
        border-radius: 10px;

        height: 80px;
        background-color: #212f3d;
        position: fixed;
        z-index: -1;
        transition: all 1s ease;

        box-shadow: -3px -3px 4px rgba(255, 255, 255, 1),
          5px 5px 10px rgba(0, 0, 0, 0.3);
      }
      .num {
        height: 80px;
        line-height: 80px;
        width: 100%;
        // margin-left: 10%;
        border-radius: 10px;
        text-align: center;

        transition: all 0.3s ease-in-out;

        color: #d6dbdf;
        font-weight: normal;
        font-size: 2rem;
        text-shadow: -1px -1px 2px rgba(255, 255, 255, 0.9),
          1px 1px 1px rgba(0, 0, 0, 0.2);
        background-color: transparent;

        font-family: "MYFONT";
        &.active {
          color: #fff;
          font-weight: 500;
          font-size: 3rem;
          text-shadow: -1px -1px 5px rgba(0, 0, 0, 0.2),
            1px 1px 5px rgba(0, 0, 0, 0.2);
          //   background-color: #212f3d;
          //   box-shadow: -4px -4px 5px rgba(255, 255, 255, 0.9),
          //     4px 4px 5px rgba(0, 0, 0, 0.4);
        }
      }

      .reset-ghost,
      .theme-ghost {
        width: 40px;
        height: 40px;
        position: absolute;
        bottom: -100px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #eee;
        transition: all 0.3s ease-in-out;

        cursor: pointer;
        .refresh-btn {
          fill: transparent;
          transition: all 0.3s ease-in-out;
        }
        &:hover {
          box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.2),
            inset -2px -2px 2px rgba(255, 255, 255, 1);
          .refresh-btn {
            fill: #d6dbdf;
          }
        }
      }
      .theme-ghost {
        bottom: -150px;

        .icon {
          fill: transparent;
        }
        &:hover {
          .icon {
            fill: #d6dbdf;
          }
        }
      }
    }
  }
}
</style>