<template>
  <main class="animation-root">
    <div class="wrap">
      <div class="con">
        <div class="stars">
          <div
            class="star"
            v-for="({id, left, top, opacity}) in stars"
            :key="id"
            :style="`
                left: ${left}%;
                top: ${top}%;
                opacity: ${opacity};
            `"
          ></div>
        </div>
        <div class="moon"></div>
        <div class="sun"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      stars: []
    };
  },
  mounted() {
    this.loadStars();
  },
  methods: {
    loadStars() {
      const sum = Math.floor(Math.random() * (60 - 40) + 40);
      this.stars = [];
      for (let i = 0; i < sum; i++) {
        this.stars.push({
          id: i,
          left: Math.floor(Math.random() * 100),
          top: Math.floor(Math.random() * 100),
          opacity: Math.random()
        });
      }

      this.shakeStar();
    },
    shakeStar() {
        if (!this.interval) {
            this.interval = setInterval(() => {
                this.stars.forEach(({left, top, opacity}, index) => {
                    this.$set(this.stars[index], "left", left + 10*(Math.random() - 0.5));
                    this.$set(this.stars[index], "opacity", Math.random());
                });
            }, 1000)
        }
    }
  }
};
</script>

<style lang="less" scoped>
@bg: #ee5253;

@light: #82ccdd;
@dark: #0a3d62;
@w: 120px;

@sun-width: 50px;
@moon-width: 40px;
@sun-bg: #f4d03f;
@moon-bg: #fef5e7;
@duration: 5s;
.center() {
  display: flex;
  align-items: center;
  justify-content: center;
}
main.animation-root {
  background-color: @bg;

  .wrap {
    .center();
    .con {
      width: @w;
      height: @w;
      border-radius: 50%;
      background-color: @light;
      animation: sky @duration ease 0s infinite;

      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5),
        inset 6px 5px 5px rgba(0, 0, 0, 0.3);
      overflow: hidden;
      position: relative;
      .stars {
        width: 100%;
        height: 100%;
        position: relative;
        animation: stars @duration ease 0s infinite;

        .star {
          position: absolute;
          width: 4px;
          height: 4px;
          background-color: #fff;
          border-radius: 50%;
          transition: all 1s ease-in-out;
        }
      }
      .sun {
        width: @sun-width;
        height: @sun-width;
        border-radius: 50%;
        background-color: @sun-bg;
        box-shadow: 0px 0px 15px @sun-bg, 0px 0px 15px @sun-bg,
          0px 0px 15px @sun-bg, 0px 0px 15px rgba(255, 255, 255, 0.3);
        position: absolute;
        top: ~"calc(50% - @{sun-width} / 2)";
        left: ~"calc(50% - @{sun-width} / 2)";
        transform-origin: 50% ~"calc(@{w})";
        transition: all 0.5s ease-in-out;

        animation: sun @duration linear 0s infinite;
      }
      .moon {
        width: @moon-width;
        height: @moon-width;
        border-radius: 50%;
        background-color: @moon-bg;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3),
          0px 0px 10px rgba(244, 208, 63, 0.1);
        position: absolute;
        top: ~"calc(60% - @{moon-width} / 2)";
        left: ~"calc(50% - @{moon-width} / 2)";
        transform-origin: 50% ~"calc(@{w})";
        animation: moon @duration linear 0s infinite;

        &::before {
          content: "";
          position: absolute;
          background-color: rgba(255, 255, 255, 1);
          width: 10px;
          height: 10px;
          border-radius: 50%;
          top: 50%;
          left: 50%;
        }
      }
      &:hover {
        .sun {
          transform: rotate(90deg);
        }
      }
    }
  }
}

@keyframes sun {
  0% {
    transform: rotate(-90deg);
  }
  50% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(90deg);
  }
}
@keyframes moon {
  0% {
    transform: rotate(-90deg);
  }
  40% {
    transform: rotate(-90deg);
  }
  90% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(90deg);
  }
}
@keyframes sky {
  0% {
    background-color: @dark;
  }
  25% {
    background-color: @light;
  }
  50% {
    background-color: @light;
  }
  75% {
    background-color: @dark;
  }
  100% {
    background-color: @dark;
  }
}

@keyframes stars {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>