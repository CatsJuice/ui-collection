<template>
  <main class="animation-root">
    <div class="small-container">
      <div :class="['wrap', active ? 'active': '']">
        <div class="handler"></div>
        <div class="on"></div>
        <div class="off"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      interval: undefined,
      active: false
    };
  },
  mounted() {
    // this.$nextTick(() => {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.active = true;
        setTimeout(() => {
          this.active = false;
        }, 1500);
      }, 3000);
    }
    // });
  }
};
</script>

<style lang="less" scoped>
@bg: #c91f37;
@h: 50px;
@m: 5px;
@bw: 8px;

@off: #212f3d;
@on: #f1c40f;
@duration: 0.4s;
@duration2: 0.3s;
main.animation-root {
  background: @bg;

  div.small-container {
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    .wrap {
      cursor: pointer;
      user-select: none;
      width: 120px;
      transition: all 0.3s ease-in-out;
      height: @h;
      border-radius: ~"calc(@{h} / 2)";
      //   background-color: @off;
      box-shadow: 0px 0px 0px rgba(255, 255, 255, 0.6);
      overflow: hidden;
      position: relative;

      .handler {
        transition: all 0.3s ease-in-out, 
                    border-radius @duration cubic-bezier(.42,-0.58,.55,1.56),
                    width 0.5s cubic-bezier(.65,-0.16,.56,1.71);
        width: ~"calc(@{h} - 2 * @{m} - 2*@{bw})";
        height: ~"calc(@{h} - 2 * @{m} - 2*@{bw})";
        position: absolute;
        border-radius: 20px;
        background-color: @off;
        top: @m;
        margin-left: @m;
        border: @bw solid #fff;
        left: 0;
        z-index: 2;
      }
      .off,
      .on {
        width: 130px;
        height: 130px;
        border-radius: 50%;
        position: absolute;
        transition: all @duration ease-in-out;
        z-index: 1;
      }
      .off {
        background-color: @off;
        left: 0;
        top: ~"calc(-1 * (130px - @{h}) / 2)";
      }
      .on {
        background-color: @on;
        left: -130px;
        top: 100%;
      }

      &:hover,
      &.active {
        .handler {
          width: 0;
          transition: all 0.4s cubic-bezier(.65,-0.16,.56,1.71),
            border-radius 0.5s cubic-bezier(.65,-0.16,.56,1.71) @duration2;
          //   height: ~"calc((@{h} - 2 * @{m} - 2*@{bw} ) - 10px)";
          //   top: ~"calc(@{m} + 5px)";
          background-color: #fff;
          // border-radius: ~"calc(@{bw})";
          left: ~"calc(130px - @{h}* 3/4 - 10px)";
        }
        .on {
          left: -5px;
          top: ~"calc(-1 * (130px - @{h}) / 2)";
          border-radius: 0;
        }
        .off {
          left: 100%;
          top: -130px;
        }
      }
    }
  }

  &:hover {
    div.small-container {
      .wrap {
        box-shadow: -1px 3px 1px rgba(255, 255, 255, 0.6);
        transform: translate(1px, -3px);
      }
    }
  }
}
</style>