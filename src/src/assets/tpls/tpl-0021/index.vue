<template>
  <main class="animation-root">
    <div class="display-area">
      <div v-for="c in clock" :key="c.class" :class="c.class">
        <div
          v-for="i in 2"
          :key="i"
          class="bar"
          :style="`
                transform: translateY(${ time[c.keys[i-1]] * -24 + 'px'});
            `"
        >
          <div
            class="num"
            v-for="j in 10"
            :key="j"
            :style="`
            color: ${time[c.keys[i-1]] === j-1 ? '#fff' : '#85929E'};
            font-weight: ${time[c.keys[i-1]] === j-1 ? 'bold' : '100'};
            font-size: ${time[c.keys[i-1]] === j-1 ? '0.9rem' : '0.8rem'};
            background-color: ${time[c.keys[i-1]] === j-1 ? '#212F3D' : 'transparent'};
            box-shadow: ${time[c.keys[i-1]] === j-1 ? '0px 4px 5px rgba(0,0,0,.4)' : 'none'};
          `"
          >{{ j - 1 }}</div>
        </div>
      </div>
      <!-- <div class="minute">
        <div class="bar">
          <div class="num" v-for="i in 10" :key="i">{{ i - 1 }}</div>
        </div>
        <div class="bar">
          <div class="num" v-for="i in 10" :key="i">{{ i - 1 }}</div>
        </div>
      </div>
      <div class="second">
        <div class="bar">
          <div class="num" v-for="i in 10" :key="i">{{ i - 1 }}</div>
        </div>
        <div class="bar">
          <div class="num" v-for="i in 10" :key="i">{{ i - 1 }}</div>
        </div>
      </div>-->
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
    }
  }
};
</script>

<style lang="less" scoped>
@bg: #EAECEE;
main.animation-root {
  background-color: @bg;

  .display-area {
    width: 180px;
    height: 40px;
    position: relative;

    .hour {
      position: absolute;
      display: flex;
      left: 50%;
      transform: translateX(-165%);
      .bar {
        width: 20px;
        margin: 2px;
      }
    }
    .minute {
      position: absolute;
      display: flex;
      left: 50%;
      transform: translateX(-50%);
      .bar {
        width: 20px;
        margin: 2px;
      }
    }
    .second {
      position: absolute;
      display: flex;
      left: 50%;
      transform: translateX(65%);
      .bar {
        width: 20px;
        margin: 2px;
      }
    }

    .bar {
      background-color: @bg;
      border-radius: 3px;
      box-shadow: -3px -3px 6px rgba(255, 255, 255, 0.8),
        2px 2px 3px rgba(0, 0, 0, 0.22);
      transition: all 0.3s ease-in-out;
      padding: 3px 0;
      .num {
        height: 24px;
        line-height: 24px;
        width: 80%;
        margin-left: 10%;
        border-radius: 3px;
        text-align: center;
        font-size: 0.8rem;

        transition: all 0.3s ease-in-out;
      }
    }
  }
}
</style>