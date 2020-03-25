<template>
  <main class="animation-root">
    <div class="wrap">
      <div class="screen">
        <div class="card">
          <!--  -->
          <!--  -->
          <!-- 区域 A -->
          <div class="a">
            <div class="l">
              <span></span>
              <span></span>
            </div>
            <div class="r"></div>
          </div>

          <!--  -->
          <!--  -->
          <!-- 区域 B -->
          <div class="b">
            <header></header>
            <div class="galary-list">
              <div class="galary" v-for="i in 5" :key="i"></div>
            </div>
          </div>

          <!--  -->
          <!--  -->
          <!-- 区域 C -->
          <div class="c">
            <div class="l">
              <span></span>
              <span></span>
            </div>
            <div class="r"></div>
          </div>

          <!--  -->
          <!--  -->
          <!-- 区域 B -->
          <div class="b">
            <header></header>
            <div class="galary-list">
              <div class="galary" v-for="i in 5" :key="i"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
// @bg: linear-gradient(45deg, #6a11cb 0%, #2575fc 100%);
@bg: #5d6d7e;
@topColor: #c93756;
@borderRadius: 10px;
@duration: 3s;
main.animation-root {
  background: @bg;

  .screen {
    width: 80px;
    height: 160px;
    border-radius: @borderRadius;
    background-color: @topColor;
    transform: perspective(1000px) translateZ(10px);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    position: relative;
    overflow: hidden;
    .card {
      position: absolute;
      width: 100%;
      height: 70%;
      border-radius: @borderRadius;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      background-color: #fff;
      box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.2);
      bottom: 0;
      overflow: hidden;

      animation: cardAnima @duration ease 0s infinite;

      .a {
        box-sizing: border-box;
        width: ~"calc(100% - @{borderRadius})";
        margin-left: ~"calc(@{borderRadius} / 2)";
        margin-top: ~"calc(@{borderRadius} / 2)";
        border-radius: 5px;
        height: 20px;
        //   background-color: thistle;
        display: flex;
        align-items: center;
        padding: 2px 8px;
        background-color: #f0f0f0;

        .l {
          width: 100%;
          span {
            display: block;
            height: 5px;
            background-color: thistle;
            border-radius: 2px;
            &:nth-child(1) {
              background-color: #bdbdbd;
              margin-bottom: 2px;
            }
            &:nth-child(2) {
              background-color: #d6d6d6;
              width: 60%;
            }
          }
        }

        .r {
          margin-left: 5px;
          flex-shrink: 0;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: @topColor;
          box-shadow: 3px 2px 5px @topColor;
        }
      }

      .b {
        header {
          width: 50%;
          height: 8px;
          background-color: #d4d4d4;
          border-radius: 2px;
          margin-left: ~"calc(@{borderRadius} / 2)";
          margin-top: ~"calc(@{borderRadius} / 2)";
        }

        .galary-list {
          display: flex;
          width: 100%;
          height: 40px;
          .galary {
            position: absolute;
            margin-top: 5px;
            margin-left: ~"calc(@{borderRadius} / 2)";
            width: 25px;
            height: 34px;
            background-color: #85929e;
            border-radius: 5px;

            animation: scrollX @duration ease 0s infinite;

            &:hover {
              transform: translateX(-55px);
            }

            &:nth-child(1) {
              transform: translateX(0);
            }
            &:nth-child(2) {
              transform: translateX(~"calc(100% + 5px * 1)");
            }
            &:nth-child(3) {
              transform: translateX(~"calc(200% + 5px * 2)");
            }
            &:nth-child(4) {
              transform: translateX(~"calc(300% + 5px * 3)");
            }
            &:nth-child(5) {
              transform: translateX(~"calc(400% + 5px * 4)");
            }
            &:nth-child(6) {
              transform: translateX(~"calc(500% + 5px * 5)");
            }
          }
        }
      }

      .c {
        width: 100%;
        padding: 5px;
        display: flex;
        height: 20px;
        // background-color: @topColor;
        box-sizing: border-box;
        .l {
          flex-grow: 1;
          span {
            display: block;
            background-color: #f0f0f0;
            height: 6px;
            border-radius: 2px;
            margin-bottom: 3px;
            &:nth-child(1) {
              background-color: #dddddd;
            }
            &:nth-child(2) {
              background-color: #eeeeee;
            }
          }
        }
        .r {
          flex-shrink: 0;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          margin: 0 0 0 20px;
          background-color: #f0f0f0;
        }
      }
    }
  }
}
@keyframes cardAnima {
  0% {
  }
  20% {
    height: 100%;
  }
  50% {
    height: 100%;
  }
  70% {
      height: 70%;
  }
}
@keyframes scrollX {
  0% {
    margin-left: ~"calc(@{borderRadius} / 2)";
  }
  20% {
    margin-left: ~"calc(@{borderRadius} / 2 - 62px)";
  }
  100% {
    margin-left: ~"calc(@{borderRadius} / 2 - 62px)";
  }
}

</style>