<template>
  <main>
    <div class="screen">
      <header>
        <div class="status"></div>
      </header>
      <section>
        <div class="content1">
          <div class="c1"></div>

          <div class="c2"></div>
          <div class="c3"></div>
          <div class="c4"></div>

          <div class="c1"></div>

          <div class="c5">
            <div class="c6"></div>
            <div class="c7">
              <div class="c2"></div>
              <div class="c3"></div>
              <div class="c4"></div>
            </div>
          </div>

          <div class="c5">
            <div class="c6"></div>
            <div class="c7">
              <div class="c2"></div>
              <div class="c3"></div>
              <div class="c4"></div>
            </div>
          </div>
        </div>
        <div class="content2"></div>
      </section>

      <div class="float-btn"></div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@w1: 40%;
@w2: 80%;
main {
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #f4d03f;
  color: #f4d03f;
  border-radius: 5px;
  &:hover {
    box-shadow: 0px 20px 40px currentColor;
  }

  div.screen {
    width: @w1;
    height: 80%;
    background-color: #f5f5f5;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    animation: screen 5s ease 0s infinite;
    display: flex;
    flex-direction: column;
    align-items: center;

    header {
      width: 100%;
      background-color: #2980b9;
      height: 20px;

      div.status {
        width: 100%;
        height: 7px;
        background-color: rgba(0, 0, 0, 0.4);
      }
    }

    section {
      width: 100%;
      animation: display 5s ease 0s infinite;
      height: ~"calc(100% - 20px)";
      // background-color: cyan;

      .content1 {
        padding: 2px 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        overflow: hidden;
      }
      .content2 {
        width: 100%;
        height: 100%;
        background-color: #aeb6bf;
        margin-top: 10px;
        border-radius: 5px;
      }
    }

    div.float-btn {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      position: absolute;
      background-color: #6200ee;
      //   bottom: 5px;
      top: ~"calc(100% - 25px)";
      right: 5px;
      box-shadow: 0px 0px 12px #6200ee;
      animation: floatBtn 5s 0s infinite;
    }
  }
}

.content1 {
  .c1 {
    margin: 2px 0;
    width: 90%;
    margin-top: 10px;
    margin-left: 5%;
    height: 20px;
    background-color: #f0f0f0;
    border-radius: 5px;
  }
  .c2,
  .c3,
  .c4 {
    background-color: #f0f0f0;
    height: 5px;
    margin: 2px 0;
    margin-left: 5%;
  }
  .c2 {
    width: 80%;
  }
  .c3 {
    width: 70%;
  }
  .c4 {
    width: 50%;
  }
  .c5 {
    display: flex;
    .c6 {
      width: 14px;
      height: 14px;
      background-color: #f0f0f0;
      border-radius: 50%;
      margin-left: 5%;
    }
    .c7 {
      flex-grow: 1;
    }
  }
}

@keyframes screen {
  0% {
    width: @w1;
  }
  20% {
    width: @w2;
  }
  50% {
    width: @w2;
  }
  70% {
    width: @w1;
  }
  100% {
    width: @w1;
  }
}

@keyframes display {
  0% {
    width: 100%;
    margin-top: 0px;
    height: 100%;
  }
  20% {
    width: 60%;
    margin-top: 5px;
    height: 66%;
  }
  50% {
    width: 60%;
    margin-top: 5px;
    height: 66%;
  }
  70% {
    width: 100%;
    margin-top: 0px;
    height: 100%;
  }
  100% {
    width: 100%;
    margin-top: 0px;
    height: 100%;
  }
}

@keyframes floatBtn {
  0% {
    top: ~"calc(100% - 25px)";
  }
  20% {
    top: ~"calc(100% - 25px)";
  }
  30% {
    top: 12px;
  }
  60% {
    top: 12px;
  }
  70% {
    top: ~"calc(100% - 25px)";

  }
  100% {
    top: ~"calc(100% - 25px)";
  }
}
</style>