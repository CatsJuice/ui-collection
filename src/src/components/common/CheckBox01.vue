<template>
  <div
    :style="`
        position:relative;
        width: ${size}px;
        height:${size}px;
        border-radius: ${br}px;
        overflow: hidden;
    `"
  >
    <div class="container" :style="`
        border: 2px solid ${color};
        background-color: ${ checked ? color : 'transparent'}; 
        border-radius: ${br}px;
    `">
      <img src="./assets/imgs/check.svg" v-if="checked" />
    </div>
    <input type="checkbox" :value="checked" @change="$emit('change', $event.target.checked)" />
  </div>
</template>


<script>
export default {
  props: {
    color: {
      type: String,
      default: "#48C9B0"
    },
    checked: {
      type: Boolean
    },
    size: {
      type: Number,
      default: 20
    },
    br: {
      type: Number,
      default: 5
    }
  },
  model: {
    prop: "checked",
    event: "change"
  }
};
</script>

<style lang="less" scoped>
div.container {
    display: flex;
    align-items: center;
    justify-content: center;
  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
}
input[type="checkbox"],
div.container {
  position: absolute;
  left: 0;
  top: 0;
  width: ~"calc(100% - 4px)";
  height: ~"calc(100% - 4px)";
}
input[type="checkbox"] {
  opacity: 0;
  cursor: pointer;
}
// input[type="checkbox"]:checked + div.container {

// }
</style>