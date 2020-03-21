<template>
    <div>
        <button class="reload" @click="reload">重载动画</button>
    </div>
</template>

<script>
export default {
    methods: {
        reload() {
            this.$store.commit('updateStyle0003', {
                key: "status",
                value: this.$store.state.tpl0003.status + 1
            })
        }
    }
}
</script>

<style lang="less" scoped>
button.reload {
    width: 80%;
    height: 43px;
    background-color: #5D6D7E;
    color: #fff;
    border: none;
    box-shadow: 0px 2px 10px rgba(0,0,0,.1);
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background-color: #5D6D7E;
    }

    &:focus,
    &:active {
        outline: none;
        border: none;
    }
}
</style>