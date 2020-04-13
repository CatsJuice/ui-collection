<template>
    <div :style="`
        flex-direction: ${fd};
        justify-content: ${jc};
        align-items: ${ai};
        flex-grow: ${fg};
    `">

    </div>
</template>

<script>
export default {
    props: {
        fd: {
            default: "row"
        },
        jc: {
            default: "center"
        },
        ai: {
            default: "center"
        },
        fg: {
            default: 0
        }
    }
}
</script>