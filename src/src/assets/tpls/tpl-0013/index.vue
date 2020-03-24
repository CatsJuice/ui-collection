<template>
  <main class="animation-root">
    <div :class="['wrap', active ? 'active' : '']">
      <div class="slider"></div>
      <div
        class="selection l"
        :style="`color:${active ? 'rgb(38, 37, 40)' : 'color: rgb(153, 151, 164)'};`"
      >{{off}}</div>
      <div
        class="selection r"
        :style="`color:${active ? 'rgb(38, 37, 40)' : 'color: rgb(153, 151, 164)'};`"
      >{{on}}</div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      off: "off",
      on: "on",
      active: false
    };
  },

  mounted() {
    this.start();
  },

  methods: {
    start() {
      if (!this.interval) {
        this.interval = setInterval(() => {
          this.toggle();
        }, 2000);
      }
    },
    toggle() {
      this.active = !this.active;
    }
  }
};
</script>


<style lang="less" scoped>
@bg: #E5E7E9;
@h: 44px;
@padding: 5px;
@br: 10px;

@duration: 0.5s;
main.animation-root {
  background-color: @bg;

  div.wrap {
    width: 160px;
    height: @h;
    // border-radius: ~"calc(@{h} / 2)";
    border-radius: @br;
    box-shadow: -4px -4px 8px rgba(255,255,255,.7), 
        4px 4px 7px rgba(0, 0, 0, 0.3),
      inset 0px 1px 10px rgba(0, 0, 0, 0.1);
    background-color: rgb(240, 240, 240);
    position: relative;

    .slider,
    .selection {
      transition: all @duration cubic-bezier(0.01, 0.1, 0.25, 1);
      position: absolute;
      width: 50%;
      height: @h;
      line-height: @h;
      text-align: center;
      font-size: 0.7rem;
      font-weight: bold;
      //   color: rgb(153, 151, 164);
      color: rgb(38, 37, 40);
      &.r {
        left: 50%;
      }
    }

    .slider {
      width: ~"calc(50% - 2 * @{padding})";
      height: ~"calc(@{h} - 2 * @{padding})";
      top: @padding;
      border-radius: @br;
      background-color: rgb(233, 233, 233);
      left: @padding;
      box-shadow: 0px 0px 5px rgba(100, 100, 100, 0.1),
        inset 5px 5px 7px rgba(0, 0, 0, 0.18),
        inset -5px -5px 7px rgba(255, 255, 255, 1);
    }
    animation: trans3d2 0.8s ease 0s;
    // &:hover,
    &.active {
      animation: trans3d1 0.8s ease 0s;
      .slider {
        left: ~"calc(50% + @{padding})";
      }
    }
  }
}

@keyframes trans3d1 {
  0% {
  }
  50% {
    transform: perspective(200px) rotateY(10deg);
  }
  100% {
  }
}
@keyframes trans3d2 {
  0% {
  }
  50% {
    transform: perspective(200px) rotateY(-10deg);
  }
  100% {
  }
}
</style>
