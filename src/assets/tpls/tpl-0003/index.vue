<template>
  <main>
    <img id="outer" class="c" src="./assets/imgs/outer.png" />
    <div class="watch-con c">
      <img id="bg" class="c" src="./assets/imgs/bg.png" />

      <img
        :style="`
        transition: all 1s linear;
        transform: translate(-49.5%, -49.6%) rotate(${top_circle_rotate}deg);
        transform-origin: 49.8% 50.2%;
      `"
        id="t-c-pointer"
        class="c"
        src="./assets/imgs/top-circle-pointer.svg"
      />

      <img
        :style="`
        transition: ${duration};
        transform: translate(-49.5%, -49.6%) rotate(${m_rotate}deg);
        transform-origin: 49.8% 50.2%;
      `"
        id="minute"
        class="c"
        src="./assets/imgs/minute.svg"
      />

      <img
        :style="`
        transition: ${duration};
        transform: translate(-49.6%, -50.4%) rotate(${h_rotate}deg);
        transform-origin: 49.9% 51%;
      `"
        id="hour"
        class="c"
        src="./assets/imgs/hour.svg"
      />

      <img
        :style="`
        transition: ${duration};
        transform: translate(-49.8%, -50.2%) rotate(${s_rotate}deg);
        transform-origin: 50% 51%;
      `"
        id="second"
        class="c"
        src="./assets/imgs/second.svg"
      />
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      hour: 0,
      minute: 0,
      second: 0,
      duration: "all 2s ease-out",
      interval: undefined,

      count_h: 0,
      count_m: 0,
      count_s: 0,
      count: 0
    };
  },

  mounted() {
    this.start();
  },
  computed: {
    h_rotate() {
      if (this.hour === 0 && this.minute === 0 && this.second === 0)
        this.count_h++;
      return this.count_h * 360 + this.hour * 30 + (this.minute / 60) * 30;
    },
    m_rotate() {
      if (this.minute === 0 && this.second === 0) this.count_m++;
      return this.count_m * 360 + this.minute * 6 + (this.second / 60) * 6;
    },
    s_rotate() {
      if (this.second === 0) this.count_s++;
      return this.count_s * 360 + this.second * 6;
    },
    top_circle_rotate() {
      return Math.floor(this.count / 10) * 6;
    },
    status() {
      return this.$store.state.tpl0003.status;
    }
  },
  watch: {
    status: {
      deep: true,
      handler(s) {
        if (s) {
          clearInterval(this.interval);
          this.hour = 0;
          this.minute = 0;
          this.second = 0;
          this.duration = "all 0.8s ease";
          this.interval = undefined;
          this.count_h = 0;
          this.count_m = 0;
          this.count_s = 0;
          this.count = 0;
          setTimeout(() => {
            this.duration = "all 2s ease-out";
            this.start();
          }, 1300);
        }
      }
    }
  },
  methods: {
    start() {
      if (!this.interval) {
        this.interval = setInterval(() => {
          const time = new Date();
          this.hour = time.getHours() % 12;
          this.minute = time.getMinutes();
          this.second = time.getSeconds();
          // console.log(`${this.hour}:${this.minute}:${this.second}`)
          this.count++;
        }, 100);
      }
      setTimeout(() => {
        this.duration = "all 1s linear";
      }, 2000);
    }
  }
};
</script>

<style lang="less" scoped>
.c {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
main {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  background-color: #273746;
  color: #273746;
  border-radius: 5px;
  &:hover {
    box-shadow: 0px 20px 40px currentColor;
  }
  img#outer {
    width: 95%;
    position: absolute;
    // opacity: 0.2;
    z-index: 10;
    transition: all 0.3s ease-in-out;
  }

  div.watch-con {
    width: 65%;
    height: 65%;
    background-color: brown;
    position: absolute;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;

    img#bg {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    img#hour,
    img#minute,
    img#second,
    img#t-c-pointer {
      position: absolute;
      transform-origin: center;
    }
    img#second {
      width: 110%;
      height: 110%;
    }
    img#minute {
      width: 75%;
      height: 75%;
    }
    img#hour {
      width: 70%;
      height: 70%;
    }
    img#t-c-pointer {
      width: 25%;
      height: 25%;
      top: 27.5%;
      left: 51%;
    }
  }

  &:hover {
    cursor: pointer;
  }
}
</style>