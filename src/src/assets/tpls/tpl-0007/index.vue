<template>
  <main class="animation-root">
    <div class="cards">
      <div class="col" v-for="i in 4" :key="i">
        <div
          class="card"
          v-for="j in 10"
          :key="`${i}-${j}`"
          :style="`
            background-color: #34495E;
        `"
        >
          <img :src="require('./assets/imgs/bg ('+ ((i-1) * 4 + j) % 24 +').jpg')" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { colors } from "../tpl-0002/assets/colors";

export default {
  data() {
    return {
      offset: 10
    };
  },
  methods: {
    getRandomColor() {
      return colors[Math.floor(Math.random() * colors.length)];
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/public.less";
@duration: 5s;
main.animation-root {
  background-color: #fff;
  color: #fff;
  overflow: hidden;

  /* 3D变形 */
  transform-style: preserve-3d;
  -webkit-perspective: 500;
  -moz-perspective: 500;
  -ms-perspective: 500;
  perspective: 500;

  .cards {
    width: 300px;
    height: 300px;
    transform: rotateX(57deg) rotateY(0deg) rotateZ(40deg) scale(2)
      translate(-30px, -20px);
    display: flex;
    overflow: hidden;

    .col {
      width: 50px;
      padding: 2.5px;
      .card {
        width: 100%;
        height: 80px;
        background-color: #fff;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
        margin-top: 5px;
        border-radius: 3px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }

      &:nth-child(1) {
        transform: translateY(-500px);
        animation: col1 @duration ease 0s infinite;
      }
      &:nth-child(2) {
        transform: translateY(-380px);
        animation: col2 @duration ease 0s infinite;
      }
      &:nth-child(3) {
        transform: translateY(-190px);
        animation: col3 @duration ease 0s infinite;
      }
      &:nth-child(4) {
        transform: translateY(-50px);
        animation: col4 @duration ease 0s infinite;
      }
    }
  }
}

@keyframes col1 {
  0% {
    transform: translateY(-500px);
  }
  20% {
    transform: translateY(-500px);
  }
  40% {
    transform: translateY(-100px);
  }
  60% {
    transform: translateY(-100px);
  }
  80% {
    transform: translateY(-500px);
  }
  100% {
    transform: translateY(-500px);
  }
}

@keyframes col2 {
  0% {
    transform: translateY(-380px);
  }
  20% {
    transform: translateY(-380px);
  }
  40% {
    transform: translateY(-500px);
  }
  60% {
    transform: translateY(-500px);
  }
  80% {
    transform: translateY(-380px);
  }
  100% {
    transform: translateY(-380px);
  }
}

@keyframes col3 {
  0% {
    transform: translateY(-190px);
  }
  20% {
    transform: translateY(-190px);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-30px);
  }
  80% {
    transform: translateY(-190px);
  }
  100% {
    transform: translateY(-190px);
  }
}

@keyframes col4 {
  0% {
    transform: translateY(-50px);
  }
  20% {
    transform: translateY(-50px);
  }
  40% {
    transform: translateY(-250px);
  }
  60% {
    transform: translateY(-250px);
  }
  80% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(-50px);
  }
}
</style>