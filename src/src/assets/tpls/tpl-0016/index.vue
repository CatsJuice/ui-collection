<template>
  <main class="animation-root" @mouseover="mouseOver" @mouseout="mouseOut">
    <div class="wrap">
      <div
        @click.stop="nextCard"
        :class="['card', `status-${getStatus(index)}`]"
        v-for="({id, bgColor, highLight, textColor, coreColor}, index) in cards"
        :key="id"
        :style="`
        background-color: ${bgColor};
        color: ${bgColor};
      `"
      >
        <span class="a a1" :style="`background-color: ${highLight};`"></span>
        <span class="a a2" :style="`background-color: ${highLight};`"></span>
        <span class="a a3" :style="`background-color: ${highLight};`"></span>

        <span class="b" :style="{backgroundColor: coreColor || '#dddddd'}"></span>

        <span class="c" :style="{color: textColor || '#fff'}">CARDHOLDER NAME</span>

        <span class="d" :style="{color: textColor || '#fff'}">
          1234
          <span class="margin"></span>
          5678
          <span class="margin"></span>
          9012
          <span class="margin"></span>
          1314
        </span>

        <span class="e" :style="{color: textColor || '#fff'}">VISA</span>

        <span class="catsjuice" :style="{color: textColor || '#fff'}">&copy;CatsJuice</span>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      curr: 1,
      cards: [
        { id: 1, bgColor: "#f53b57", highLight: "#00d8d6", textColor: "#fff" },
        { id: 2, bgColor: "#273746", highLight: "#ffa801", textColor: "#fff" },
        { id: 3, bgColor: "#0336ff", highLight: "#f1c40f", textColor: "#fff" },
        { id: 4, bgColor: "#17202A", highLight: "#f1c40f", textColor: "#fff" },
        { id: 5, bgColor: "#D5D8DC", highLight: "#E74C3C", textColor: "#333", coreColor: "#1e272e" },
      ]
    };
  },
  mounted() {
      this.start();
  },
  methods: {
    getStatus(index) {
        const matrix = [
            [2, 1,5,4,3,],
            [3, 2,1,5,4,],
            [4, 3,2,1,5,],
            [5, 4,3,2,1,],
            [1, 5,4,3,2,],
        ]
        const rowIndex = index;
        const colIndex = this.curr % (this.cards.length);
        return matrix[colIndex][rowIndex]
    },
    mouseOver() {
        clearInterval(this.inerval)
        this.inerval = undefined;
    },
    mouseOut(){
        this.start();
    },
    nextCard() {
      this.curr++;
    },
    start() {
        if (!this.inerval) {
          this.inerval = setInterval(() => {
              this.curr++;
          }, 1000)
      }
    },
  },
  computed: {

  }
};
</script>

<style lang="less" scoped>
@bg: #f1c40f;
@w: 150px;
@mh: 85px;
main.animation-root {
  background-color: @bg;

  .wrap {
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    .card {
      width: @w;
      height: @mh;
      background-color: rgb(88, 68, 210);
      color: rgb(88, 68, 210);
      border-radius: 8px;
      box-shadow: 0px 5px 5px currentColor, 0px -5px 5px rgba(0,0,0,.2);
      position: absolute;
      overflow: hidden;
      transition: all 0.4s cubic-bezier(.65,-0.16,.56,1.71);

      span {
        display: block;
        position: absolute;
      }
      .a {
        width: 8px;
        height: 8px;
        background-color: @bg;
        border-radius: 50%;
        &.a1 {
          top: 10px;
          left: 50%;
        }
        &.a2 {
          top: 5px;
          left: 30%;
        }

        &.a3 {
          bottom: 5px;
          left: 20px;
        }
      }

      .b {
        width: 20px;
        height: 14px;
        border-radius: 3px;
        background-color: #dddddd;
        top: 20%;
        left: 10px;
      }

      .c {
        bottom: 5px;
        color: #ffffff;
        font-size: 0.7rem;
        white-space: nowrap;
        transform: scale(0.5) translateX(-50px);
        left: 5px;
        text-align: left;
      }

      .d {
        top: 40%;
        font-size: 0.7rem;
        color: #fff;
        // font-weight: bold;
        transform: scale(0.7) translateX(-10px);
        span.margin {
          margin: 0 2px;
        }
      }

      .e {
        font-size: 0.7rem;
        color: #fff;
        font-weight: bold;
        top: 10px;
        right: 12px;
        transform: scale(0.9);
      }
      .catsjuice {
          font-size: 0.7rem;
          bottom: 5px;
          right: 10px;
          transform: scale(0.5);
          transform-origin: 100% 50%;
      }
    }

    .card.status-1 {
      transform: translateY(0) scale(1);
      z-index: 4;
    }
    .card.status-2 {
      transform: translateY(-10px) scale(0.95) perspective(200px);
      z-index: 3;
    }
    .card.status-3 {
      transform: translateY(-20px) scale(0.85);
      z-index: 2;
    }
    .card.status-4 {
      transform: translateY(-30px) scale(0.7);
      opacity: 0.2;
      z-index: 1;
      box-shadow: 0px -2px 10px rgba(0, 0, 0, .2);
    }
    .card.status-5 {
      transform: translateY(20px) scale(1.2);
      z-index: 5;
      opacity: 0;
    }

  }
}
</style>