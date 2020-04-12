<template>
  <main>
    <div class="window">
      <section class="docker"></section>
      <section class="user-list">
        <div class="user-card" v-for="user in 20" :key="user"></div>
      </section>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@border-radius: 15px;
@bg: rgb(245, 246, 250);
@pad: 40px;
// background-image: radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%);
main {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  //   background-image: linear-gradient(
  //     to top,
  //     #1e3c72 0%,
  //     #1e3c72 1%,
  //     #2a5298 100%
  //   );
  background-color: rgb(207, 228, 255);
  .window {
    width: 1200px;
    height: 800px;
    border-radius: @border-radius;
    background-color: @bg;
    box-sizing: border-box;
    display: flex;
    box-shadow: inset -10px -10px 100px rgba(255, 255, 255, 1),
      inset 50px 0px 50px rgba(0, 0, 0, 0.06);

    // 左侧 docker
    .docker {
      width: 90px;
      height: ~"calc(100% - 10px *2)";
      background-image: linear-gradient(to top, #273746 0%, #2c3e50 100%);
      border-radius: @border-radius;
      margin: 10px;

      box-shadow: -5px -5px 5px rgba(255, 255, 255, 0.8),
        10px 10px 15px rgba(0, 0, 0, 0.2), 10px 0px 50px rgba(0, 0, 30, 0.2);
    }

    // 用户列表
    section.user-list {
      width: 360px;
      height: 100%;
      padding: 0px 30px;
      border-radius: @border-radius;
      box-sizing: border-box;
      overflow-x: visible;
      overflow-y: auto;
      &::-webkit-scrollbar {
        /*滚动条整体样式*/
        width: 0px;
        height: 0px;
      }
      &::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius: 10px;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background: #535353;
      }
      &::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        background: transparent;
      }

      .user-card {
        width: 100%;
        height: 80px;
        margin-bottom: 20px;
        flex-shrink: 0;

        border-radius: 15px;
        box-shadow: 6px 6px 12px rgba(100, 100, 100, 0.1),
          -6px -7px 18px rgba(255, 255, 255, 0.7);

        cursor: pointer;

        &:hover {
          box-shadow: inset 8px 8px 16px rgba(100, 100, 100, 0.1),
            inset -6px -7px 12px rgba(255, 255, 255, 0.8);
        }
        &:nth-child(1) {
          margin-top: 20px;
        }
      }
    }
  }
}
</style>