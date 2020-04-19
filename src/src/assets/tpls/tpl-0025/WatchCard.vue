<template>
  <div
    class="card"
    :style="`
    width: ${w};
    height: ${h};
    border-radius: 10px;
    background-color: ${bg};
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    cursor: pointer;
  `"
  >
    <header>
      <h6>{{ bigTitle }}</h6>
      <div class="like-icon">
        <a-icon style="color: #fff" theme="filled" type="heart" />
      </div>
    </header>

    <p>{{ smallTitle }}</p>

    <img :src="img" />
  </div>
</template>

<script>
export default {
  props: {
    w: { type: String, default: "100%" },
    h: { type: String, default: "100%" },
    bg: { type: String, default: "rgb(241,118,60)" },
    bigTitle: { type: String, default: "Title" },
    smallTitle: { type: String, default: "SmallTitle" },
    img: {}
  }
};
</script>

<style lang="less" scoped>
* {
  user-select: none;
}
header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  padding: 0 10px;
  margin-top: 10px;

  h6 {
    font-size: 0.7rem;
    color: #fff;
    font-weight: bold;
    padding: 0;
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  div.like-icon {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
p {
  color: #fff;
  padding-left: 12px;
  font-size: 0.7rem;
}
img {
  position: absolute;
  width: 70%;
  bottom: 2%;
  right: -18%;
}
</style>