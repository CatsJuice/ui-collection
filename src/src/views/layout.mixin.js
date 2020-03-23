import { throttle } from "lodash"

export default {
    mounted() {
        this.$nextTick(() => {
            this.layout();
            const vm = this;
            this.windowResizeListenr = window.addEventListener("resize", throttle(function () {
                vm.layout();
            }, 10))
        })
    },
    data() {
        return {
            rectWidth: 200,                     // 卡片的 宽高
            minPagePaddingHorizen: 100,         // 最小的左右页边距
            minPagePaddingTop: 100,             // 最小的顶部页边距
            minPagePaddingBottom: 200,          // 最小的底部页边距
            margin: 20,                         // 卡片之间的 间距
            wrapBoxHeight: 0,                   // 容器的高度
        }
    },
    methods: {
        layout() {
            const { clientWidth, clientHeight } = document.body;
            const {
                list,
                rectWidth,
                margin,
                minPagePaddingTop,
                minPagePaddingBottom
            } = this;
            const pagePaddingHorizen = this.getPagePaddingHorizen();
            const displayWidth = clientWidth - 2 * pagePaddingHorizen;
            /** 该条件下，一行可以放置的卡片数量满足：
             *  this.rectWidth * n + (n-1) * this.margin < displayWidth
             *  (this.rectWidth + this.margin) * n < displayWidth + this.margin;
             *  n < (displayWidth + this.margin) /  (this.rectWidth + this.margin) 
             *  n(max) = Math.floor((displayWidth + this.margin) /  (this.rectWidth + this.margin))
             */
            const colNum = Math.floor((displayWidth + margin) / (rectWidth + margin))
            const rowNum = Math.ceil(list.length / colNum);
            const centerHelperOffset = (displayWidth - colNum * rectWidth - (colNum - 1) * margin) / 2;
            // 遍历列表， 写入偏移的像素
            list.forEach((el, index) => {
                const rowIndex = Math.floor(index / colNum);
                const colIndex = (index) % colNum;
                // ❌ 直接赋值并不能触发 Vue 的视图更新（可尝试赋值后 this.$forceUpdate();）
                // el.x = pagePaddingHorizen + colIndex * (rectWidth + margin);
                // el.y = minPagePaddingTop + rowIndex * (rectWidth + margin);

                const offsetX = centerHelperOffset + pagePaddingHorizen + colIndex * (rectWidth + margin);
                const offsetY = centerHelperOffset + minPagePaddingTop + rowIndex * (rectWidth + margin)
                this.$set(list[index], 'x', offsetX)
                this.$set(list[index], 'y', offsetY)
            });

            this.wrapBoxHeight = minPagePaddingTop + rowNum * (margin + rectWidth) + minPagePaddingBottom
        },

        /**
         * 动态获取实际的左右页边距
         */
        getPagePaddingHorizen() {
            const { clientWidth, clientHeight } = document.body;
            if (clientWidth > 1920) {
                return (clientWidth - 1920) / 2 + this.minPagePaddingHorizen
            } if (clientWidth < 450) {
                // 移动设备的尺寸
                return clientWidth * 0.1;
            } else {
                return this.minPagePaddingHorizen;
            }
        }
    },
}