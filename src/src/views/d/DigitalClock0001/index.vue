<template>
  <main class="animation-root">
    <div class="display-area">
      <div v-for="c in clock" :key="c.class" :class="c.class">
        <div
          v-for="i in 2"
          :key="i"
          class="bar"
          :style="`
                height: ${10 * 2 + (c.keys[i-1] === 'h1' ? 3 : 10) * 80 + 'px'};
                transform: translateY(${ time[c.keys[i-1]] * -80 + 'px'});
            `"
        >
          <div class="card" :style="`top: ${10 + time[c.keys[i-1]] * 80 + 'px'}`"></div>
          <div
            :class="['num', time[c.keys[i-1]] === j-1 ? 'active' : '']"
            v-for="j in c.keys[i-1] === 'h1' ? 3 : 10"
            :key="j"
          >{{ j - 1 }}</div>

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
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  mounted() {
    this.start();
  },
  data() {
    return {
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
        h1: 0,
        h2: 0,

        m1: 0,
        m2: 0,

        s1: 0,
        s2: 0
      }
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

          //   this.h1 = Math.floor(hour / 10);
          //   this.h2 = hour % 10;
          //   this.m1 = Math.floor(minute / 10);
          //   this.m2 = minute % 10;
          //   this.s1 = Math.floor(second / 10);
          //   this.s2 = second % 10;

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
        h1: 0,
        h2: 0,

        m1: 0,
        m2: 0,

        s1: 0,
        s2: 0
      };
      setTimeout(() => {
          this.start();
      }, 1000);
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
main.animation-root {
  background: @bg;
  background-image: linear-gradient(to left, #e6e9f0 0%, #eef1f5 100%);
  width: 100%;
  height: 100%;
  overflow: hidden;

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

    .bar {
      width: 80px;
      height: auto;
      margin: 8px;
      background: transparent;
      border-radius: 10px;
      box-shadow: -5px -5px 8px rgba(255, 255, 255, 0.65),
        4px 4px 8px rgba(0, 0, 0, 0.15);
      transition: all 0.3s linear;
      //   transition: all 1s linear;
      padding: 10px 10px;
      box-sizing: border-box;
      .card {
        width: 80%;
        left: 10%;
        border-radius: 10px;

        height: 80px;
        background-color: #212f3d;
        position: absolute;
        z-index: -1;
        transition: all 0.3s linear;

        box-shadow: -2px -2px 3px rgba(255, 255, 255, 1),
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

        color: #D6DBDF;
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
          text-shadow: none;
          //   background-color: #212f3d;
          //   box-shadow: -4px -4px 5px rgba(255, 255, 255, 0.9),
          //     4px 4px 5px rgba(0, 0, 0, 0.4);
        }
      }

      .reset-ghost {
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
    }
  }
}
</style>