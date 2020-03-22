<template>
  <main class="animation-root">
    <div class="con">
      <!-- <div class="card" v-for="i in 5" :key="i"></div> -->

      <!-- 主要内容 -->
      <div class="content-wrap">
        <div class="li" v-for="i in 7" :key="i"></div>
      </div>

      <!-- 状态栏 -->
      <header>
        <div class="status-bar"></div>
      </header>

      <!-- ripple 特效 -->
      <div class="ripple">
        <span v-for="i in 3" :key="i"></span>
      </div>

      <!-- 悬浮按钮 -->
      <div class="float-btn"></div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
// @import "~./animation.less";

@bg: #f8a5c2;
@duration: 5s;

main.animation-root {
  background-color: @bg;
  color: @bg;

  div.con {
    position: absolute;
    width: 40px;
    height: 40px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    border: 2px solid #fff;
    border-radius: 2px;
    animation: wrapAnima @duration ease 0s infinite;
    overflow: hidden;
    display: flex;

    .ripple {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      span {
        // width: 20px;
        // height: 20px;
        // background-color: royalblue;
        display: block;
        position: absolute;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        &:nth-child(1) {
          animation: ripple @duration ease 0s infinite;
        }
        &:nth-child(2) {
          animation: ripple @duration ease 0.05s infinite;
        }
        &:nth-child(3) {
          animation: ripple @duration ease 0.1s infinite;
        }
      }
    }

    div.content-wrap {
      position: absolute;
      left: 0;
      top: 100%;
      width: 100%;
      padding: 0 5%;

      animation: contentAnima @duration ease 0s infinite;

      div.li {
        width: 90%;
        height: 10px;
        background-color: #eaeded;
        border-radius: 3px;
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
        margin-top: 5px;

        &:nth-child(1) {
          height: 20px;
        }
      }
    }

    header {
      width: 100%;
      height: 20px;
      position: absolute;
      background-color: #303952;
      top: -25px;
      animation: headerAnima @duration ease 0s infinite;
      div.status-bar {
        width: 100%;
        height: 7px;
        background-color: rgba(255, 255, 255, 0.2);
      }
    }

    div.float-btn {
      width: 12px;
      height: 12px;
      position: absolute;
      border-radius: 50%;
      background-color: #fed330;
      top: 14px;
      //   right: 5px;
      box-shadow: 0px 0px 20px #fed330;
      animation: floatBtnAnima @duration ease 0s infinite;
    }
  }
}

@keyframes wrapAnima {
  0% {
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0);
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0);
    border: 2px solid #fff;
  }
  10% {
    // 宽度明显变化， 高度几乎不变
    width: 160px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0);
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0);
    border: 2px solid #fff;
  }
  20% {
    // 高度明显变化， 宽度基本不变, 填充颜色
    width: 160px;
    height: 80px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0);
    border: 0px solid #fff;
  }
//   30% {
//     // 增加阴影
//     width: 160px;
//     height: 80px;
//     background-color: rgba(255, 255, 255, 1);
//     box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.4);
//     border: 0px solid #fff;
//   }
  30% {
    // 增加阴影
    width: 160px;
    height: 80px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.4);
    border: 0px solid #fff;
  }
  45% {
    // 变换为手机
    width: 70px;
    height: 120px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.4);
    border: 0px solid #fff;
  }
  80% {
    width: 70px;
    height: 120px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.4);
    border: 0px solid #fff;
  }
  90% {
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0);
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0);
    border: 2px solid #fff;
  }
  100% {
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0);
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0);
    border: 2px solid #fff;
  }
}

@keyframes ripple {
  0% {
    // 结束ripple 动画
    width: 0px;
    height: 0px;
    opacity: 1;
    background-color: #d5dbdb;
  }
  //   10% {
  //     // 宽度明显变化， 高度几乎不变
  //   }
  //   20% {
  //     // 高度明显变化， 宽度基本不变, 填充颜色
  //   }
  20% {
    // 开始ripple 动画
    width: 0;
    height: 0;
    opacity: 1;
    background-color: #d5dbdb;
  }
  30% {
    // 结束ripple 动画
    width: 200px;
    height: 200px;
    opacity: 0;
    background-color: #d5dbdb;
  }
  100% {
    // 结束ripple 动画
    width: 200px;
    height: 200px;
    opacity: 0;
    background-color: #d5dbdb;
  }
}
@keyframes contentAnima {
  0% {
    top: 100%;
  }
  30% {
    // ripple 动画结束
    top: 100%;
  }
//   50% {
//     top: 100%;
//   }
  45% {
    // 已变成手机
    top: 24px;
  }
  80% {
    // 开始变成方块
    top: 24px;
  }
  90% {
    // 变成方块
    top: 100%;
  }
  100% {
    top: 100%;
  }
}
@keyframes headerAnima {
  0% {
    top: -25px;
  }
  30% {
    // ripple 动画结束
    top: -25px;
  }
//   50% {
//     top: -25px;
//   }
  45% {
    // 已变成手机
    top: 0;
  }
  80% {
    // 开始变成方块
    top: 0;
  }
  90% {
    // 变成方块
    top: -25px;
  }
  100% {
    top: -25px;
  }
}
@keyframes floatBtnAnima {
  0% {
    right: -25px;
  }
  40% {
    // ripple 动画结束
    right: -25px;
  }
  50% {
    right: -25px;
  }
  60% {
    // 已变成手机
    right: 5px;
  }
  80% {
    // 开始变成方块
    right: 5px;
  }
  90% {
    // 变成方块
    right: 100px;
  }
  100% {
    right: 100px;
  }
}
</style>