<template>
  <div>
    <material-input
      style="width: 80%;margin-left: 5%;"
      placeholder="Material Design"
      v-model="val"
    />
  </div>
</template>

<script>
import MaterialInput from "@/components/common/MaterialInput";
export default {
  components: {
    MaterialInput
  },
  data() {
    return {
      val: ""
    };
  }
};
</script>

<style lang="less" scoped>
</style>