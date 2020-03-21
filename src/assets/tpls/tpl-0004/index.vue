<template>
  <main :style="`
    color: ${color.outer};
    background-color: ${color.outer};
  `">
    <div class="con" :style="`
    background-color: ${color.main};
  `">
      <!-- 头上的东西 -->
      <div class="ear">
        <span></span>
        <span></span>
      </div>

      <!-- 眼睛 -->
      <div class="eye-con">
        <div class="eye" :style="`
          background-color: ${color.light};
        `"></div>
      </div>

      <!-- 嘴巴 -->
      <div class="mouse" :style="`
        background-color: ${color.light};
      `"></div>
    </div>

    <!-- 切换颜色按钮 -->
    <span class="switch l" @click="switchColor(-1)">
      <img src="./assets/imgs/arrow_down.png" />
    </span>
    <span class="switch r" @click="switchColor(1)">
      <img src="./assets/imgs/arrow_down.png" />
    </span>
  </main>
</template>

<script>
export default {
  data() {
    return {
      dic: [
        {
          outer: "#e55f6b",
          main: "#2471a3",
          light: "#fa8072"
        },
        {
          outer: "#e55f6b",
          main: "#F4D03F",
          light: "#C0392B"
        }, 
        {
          outer: "#F5CBA7",
          main: "#D84161",
          light: "#3498DB",
        },
        {
          outer: "#3498DB",
          main: "#F4D03F",
          light: "#1ABC9C",
        },
        {
          outer: "#85929E",
          main: "#D35400",
          light: "#99A3A4",
        },
      ],
      index: 0
    };
  },
  computed: {
    color() {
      return this.dic[this.index];
    }
  },
  methods: {
    switchColor(i) {
      if (i > 0) {
        this.index = this.index + i >= this.dic.length ? 0 : this.index + i;
      } else if (i < 0) {
        this.index = this.index + i < 0 ? this.dic.length - 1 : this.index + i;
      }
    }
  }
};
</script>

<style lang="less" scoped>
@earH: 8px;
main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background-color: #e55f6b;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 20px 45px currentColor;
  }
  * {
    transition: all 0.3s ease-in-out;
  }

  .con {
    width: 40%;
    height: 40%;
    border-radius: 10px;
    // background-color: #2471a3;
    position: relative;

    animation: debounce 2s ease 0s infinite normal;

    // 耳朵
    .ear {
      span {
        display: block;
        width: 18%;
        height: @earH;
        background-color: #fff;
        position: absolute;
        top: ~"calc(-1 * @{earH})";

        &:nth-child(1) {
          border-top-left-radius: ~"calc(@{earH} / 2)";
          border-bottom-left-radius: ~"calc(@{earH} / 2)";
          right: 50%;
          margin-right: -3%;
          transform: rotate(20deg);
        }
        &:nth-child(2) {
          border-top-right-radius: ~"calc(@{earH} / 2)";
          border-bottom-right-radius: ~"calc(@{earH} / 2)";
          left: 50%;
          margin-left: -3%;
          transform: rotate(-20deg);
        }
      }
    }

    // 眼睛
    .eye-con {
      width: 50%;
      height: 50%;
      border-radius: 50%;
      background-color: #fff;
      position: absolute;
      left: 50%;
      top: 40%;
      transform: translate(-50%, -50%);
      overflow: hidden;
      animation: closeEye 5s ease 0s infinite;

      .eye {
        width: 50%;
        height: 50%;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: shake 4s linear 0s infinite normal;
        // 高亮的颜色
        // background-color: #fa8072;
      }
    }

    // 嘴巴
    .mouse {
      width: 30%;
      height: @earH;
      // background-color: #fa8072;

      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 75%;
      border-radius: 5px;

      animation: openMouse 5s ease 0s infinite;
    }
  }

  span.switch {
    display: block;
    position: absolute;
    width: 20%;
    height: 20%;
    top: ~"calc((100% - 20%) / 2)";
    opacity: 0.5;
    transition: all 0.4s ease;
    cursor: pointer;

    img {
      width: 80%;
      height: 80%;
    }

    &.l {
      transform: rotate(180deg);
      left: -20%;
    }
    &.r {
      transform: rotate(-180deg);
      right: -20%;
    }
  }

  &:hover {
    span.switch {
      &.l {
        transform: rotate(90deg);
        left: 0%;
      }
      &.r {
        transform: rotate(-90deg);
        right: 0%;
      }
      &:hover {
        opacity: 1;
      }
    }
  }
}

@keyframes debounce {
  0% {
    transform: translateY(0%);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }
  30% {
    transform: translateY(-30%);
    box-shadow: 0px 50px 15px rgba(0, 0, 0, 0.2);
  }
  60% {
    transform: translateY(0%);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }
  100% {
    transform: translateY(0%);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }
}

@keyframes shake {
  0% {
    left: 50%;
    width: 50%;
  }
  10% {
    left: 26%;
    width: 30%;
  }
  20% {
    left: 50%;
    width: 50%;
  }
  //
  50% {
    left: 50%;
    width: 50%;
  }
  60% {
    left: 74%;
    width: 30%;
  }
  70% {
    left: 50%;
    width: 50%;
  }
  100% {
    left: 50%;
    width: 50%;
  }
}

@keyframes closeEye {
  0% {
    height: 50%;
  }
  5% {
    height: 0%;
  }
  10% {
    height: 50%;
  }
  100% {
    height: 50%;
  }
}

@keyframes openMouse {
  0% {
    width: 30%;
    height: @earH;
    border-radius: 5px;
  }
  5% {
    width: ~"calc(@{earH} + 5px)";
    height: ~"calc(@{earH} + 5px)";
    border-radius: ~"calc(@{earH} / 2)";
  }
  10% {
    width: 30%;
    height: @earH;
    border-radius: 5px;
  }
  100% {
    width: 30%;
    height: @earH;
    border-radius: 5px;
  }
}
</style>