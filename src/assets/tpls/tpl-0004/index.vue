<template>
  <main>
    <material-input style="width: 80%;" v-model="text" placeholder="Form Input" :max="10"></material-input>
  </main>
</template>

<script>
import MaterialInput from "@/components/common/MaterialInput";
export default {
  components: {
    MaterialInput
  },
  data() {
    return {
      text: ""
    };
  }
};
</script>

<style lang="less" scoped>
main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>