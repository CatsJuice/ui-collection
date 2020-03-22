<template>
  <section class="content">
    <div class="news">
      <div class="left"></div>
      <div class="right">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <!-- smile -->
    <span class="bar" v-for="i in 10" :key="i"></span>
  </section>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@color: #EBEDEF;
section.content {
  width: 100%;
  padding: 5px;
  box-sizing: border-box;

  .news {
    display: flex;
    .left {
      width: 18px;
      height: 25px;
      background-color: @color;
      flex-shrink: 0;
    }
    .right {
      flex-flow: 1;
      height: 25px;
      width: 100%;
      margin-left: 3px;
      span {
        display: block;
        height: 5px;
        background-color: @color;
        margin-top: 3px;
        border-radius: 5px;
        width: 100%;

        &:nth-child(1) {
            width: 90%;
        }
        &:nth-child(2) {
            width: 50%;
        }
        &:nth-child(3) {
            width: 80%;
        }
      }
    }
  }
  & > span.bar {
    display: block;
    height: 5px;
    background-color: @color;
    border-radius: 5px;
    margin-top: 3px;

    &:nth-child(5) {
      height: 30px;
      border-radius: 2px;
    }
  }
}

span {
    // box-shadow: 0px 0px 4px rgba(0,0,0,.1);
}
</style>