<template>
  <main>
    <span :style="`color:#fff;font-weight:bold;`">Button Animation</span>
    <div class="btn" :style="`
            background-color: ${bgColor};
        `">
      <span>Got It!</span>
      <div class="img" :style="`background-color:${bgColor};`">
        <img src="./assets/imgs/check.svg" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    bgColor() {
      return this.$store.state.tpl0002.bgColor;
    }
  }
};
</script>

<style lang="less" scoped>
main {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: #808b96;
  border-radius: 5px;
  &:hover {
    box-shadow: 0px 20px 40px currentColor;
  }

  & > span {
    position: absolute;
    width: 90%;
    top: 50%;
    left: 5%;

    animation: moveTop1 5s ease 0s infinite normal;
  }

  .btn {
    height: 40px;
    border-radius: 20px;
    line-height: 40px;
    color: #fff;
    font-weight: bold;
    font-size: 0.9rem;
    position: absolute;
    overflow: hidden;
    user-select: none;
    cursor: pointer;

    width: 40px;

    margin-top: 120%;
    margin-left: 50%;
    transition: all 0.2s ease-in-out;
    transform: translate(-50%, -50%);
    animation: moveTop2 5s ease 0s infinite normal;

    .img {
      transition: all 0.2s ease-in-out;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 50%;
      top: 50%;
      transform: translate(50%, -50%);
      animation: moveTop3 5s ease 0s infinite normal;
      img {
        width: 50%;
        height: 50%;
      }
    }
  }
}
@keyframes moveTop1 {
  0% {
    top: 50%;
    font-size: 1.2rem;
  }
  10% {
    top: 15%;
    font-size: 0.65rem;
    font-weight: normal;
  }
  90% {
    top: 15%;
    font-size: 0.65rem;
    font-weight: normal;
  }
  100% {
    top: 50%;
    font-size: 1.2rem;
  }
}

@keyframes moveTop2 {
  0% {
    margin-top: 120%;
    width: 40px;
    letter-spacing: 0px;
  }
  10% {
    margin-top: 50%;
    width: 40px;
    letter-spacing: 0px;
  }
  15% {
    margin-top: 50%;
    width: 40px;
    //
    letter-spacing: 0px;
  }
  20% {
    margin-top: 50%;
    width: 80%;
    letter-spacing: 4px;
  }
  35% {
    margin-top: 50%;
    width: 80%;
    //
    letter-spacing: 0px;
  }
  80% {
    margin-top: 50%;
    width: 80%;
    letter-spacing: 0px;
  }
  90% {
    margin-top: 50%;
    width: 40px;
    letter-spacing: 0px;
  }
  100% {
    margin-top: 120%;
    width: 40px;
    letter-spacing: 0px;
  }
}
@keyframes moveTop3 {
  0% {
    right: 50%;
  }
  10% {
    right: 50%;
  }
  20% {
    right: 20px;
  }
  80% {
    right: 20px;
  }
  90% {
    right: 50%;
  }
  100% {
    right: 50%;
  }
}
</style>