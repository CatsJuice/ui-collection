<template>
  <main class="animation-root">
    <div class="outer">
      <!-- 左侧按钮 -->
      <div class="button-r"></div>
      <!-- 右侧按钮 1 -->
      <div class="button-l b1"></div>
      <!-- 右侧按钮 2 -->
      <div class="button-l b2"></div>

      <!-- 刘海 -->
      <div class="hair"></div>
      <!-- 显示区域 -->
      <div class="screen">
        <div class="card" v-for="i in 5" :key="i">
          <card-content />
          <div class="user-con">
            <div class="head"></div>
            <div class="info">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <header></header>
      </div>
    </div>
  </main>
</template>

<script>
import CardContent from "./components/CardContent";
export default {
  components: {
    CardContent
  }
};
</script>


<style lang="less" scoped>
@bg: #130f40;
@w: 75px;
@h: 150px;
@duration: 5s;
main.animation-root {
  background-color: @bg;
  color: @bg;

  .outer {
    width: @w;
    height: @h;
    border-radius: 10px;
    // background: #e5e7e9;
    background: #34495e;
    border: 2px solid #e5e7e9;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .button-r {
      width: 4px;
      height: 20px;
      position: absolute;
      border-radius: 2px;
      background-color: #fff;
      right: -4px;
      top: 40px;
    }

    .button-l.b1 {
      width: 4px;
      height: 10px;
      position: absolute;
      border-radius: 2px;
      background-color: #fff;
      left: -4px;
      top: 20px;
    }
    .button-l.b2 {
      width: 4px;
      height: 10px;
      position: absolute;
      border-radius: 2px;
      background-color: #fff;
      left: -4px;
      top: 30px;
    }
    // .button-l.b1,
    // .button-l.b2 {
    //   border: 2px solid @bg;
    //   left: -6px;
    //   border-radius: 10px;
    // }
    .button-r {
      border: 2px solid @bg;
      border-radius: 10px;
      right: -6px;
    }

    .hair {
      width: 45px;
      height: 8px;
      border-radius: 6px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: #34495e;
      z-index: 10;
    }

    .screen {
      width: ~"calc(@{w} - 4px)";
      height: ~"calc(@{h} - 4px)";
      background-color: thistle;
      border-radius: 8px;
      overflow: hidden;
      position: relative;

      header {
        width: 100%;
        height: 13px;
        background-color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
      }

      .card {
        width: 90%;
        margin: 3px 5% 0px 5%;
        height: 60px;
        //   background-color: #EAEDED;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
        overflow: hidden;
        position: relative;
        box-sizing: border-box;

        &:nth-child(1) {
          margin-top: -50px;
          animation: scrollTop @duration ease 0s infinite;
        }

        &:nth-child(3) {
          animation: toggleFull @duration ease 0s infinite;
        }

        .user-con {
          position: absolute;
          width: ~"calc(100% - 4px)";
          height: 20px;
          background-color: #0c2461;
          bottom: 2px;
          left: 2px;
          border-radius: 5px;
          box-shadow: 0px -10px 14px rgba(12, 26, 97, 0.28);

          display: flex;
          align-items: center;
          .head {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: #fafafa;
            margin: 0 4px;
          }
          .info {
            flex-grow: 1;
            margin-right: 4px;
            span {
              display: block;
              width: 100%;
              height: 3px;
              background-color: #fafafa;
              margin: 2px 0;
              border-radius: 2px;
            }
            span:nth-child(1) {
              height: 5px;
            }
            span:nth-child(2) {
              width: 80%;
              border-radius: 5px;
            }
          }
        }
      }
    }
  }
}

@keyframes scrollTop {
  0% {
    margin-top: -50px;
  }
  20% {
    margin-top: -110px;
  }
  100% {
    margin-top: -110px;
  }
}
@keyframes toggleFull {
  0% {
    padding-top: 0px;
    width: 90%;
    margin: 3px 5% 0px 5%;
    height: 60px;
  }
  30% {
    padding-top: 0px;
    width: 90%;
    margin: 3px 5% 0px 5%;
    height: 60px;
  }
  40% {
    padding-top: 0px;
    width: 90%;
    margin: 3px 5% 0px 5%;
    height: 60px;
  }
  50% {
    // 变换为全屏
    width: 100%;
    margin: 0;
    margin-top: -14px;
    height: 100%;
    padding-top: 20px;
  }
  70% {
    // 维持全屏状态
    width: 100%;
    margin: 0;
    margin-top: -14px;
    height: 100%;
    padding-top: 20px;
  }
  80% {
    padding-top: 0px;
    width: 90%;
    margin: 3px 5% 0px 5%;
    height: 60px;
  }
  100% {
    padding-top: 0px;
    width: 90%;
    margin: 3px 5% 0px 5%;
    height: 60px;
  }
}
</style>