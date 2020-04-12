export const opt1 = {
    grid: {
        left: "0%",
        right: "0%",
        top: "0%",
        bottom: "0%",
    },
    xAxis: {
        type: "category",
        data: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        // show: false,
        boundaryGap: false,
        splitNumber: 1
    },
    yAxis: {
        type: "value",
        show: false,
    },
    series: [
        {
            type: "line",
            name: "Revenue",
            smooth: true,
            symbol: "none",
            itemStyle: {
                color: "rgb(79,93,244)"
            },
            lineStyle: {
                shadowColor: "rgba(79,93,244, .5)",
                shadowBlur: 7,
                width: 3
            },
            data: [200, 180, 100, 50, 70, 60, 40, 80, 100],
        },
        {
            type: "line",
            name: "Orders",
            smooth: true,
            symbol: "none",
            itemStyle: {
                color: "rgb(247,229,52)"
            },
            lineStyle: {
                shadowColor: "rgba(247,229,52, .3)",
                shadowBlur: 5,
                width: 1
            },
            data: [30, 50, 68, 130, 200, 180, 120, 70, 100],
        },
        {
            type: "line",
            name: "Visits",
            smooth: true,
            symbol: "none",
            itemStyle: {
                color: "rgb(159,239,201)"
            },
            lineStyle: {
                shadowColor: "rgba(159,239,201, .3)",
                shadowBlur: 5,
                width: 2
            },
            data: [70, 100, 120, 80, 50, 100, 150, 180, 220],
        },
    ]
}

export const opt2 = {
    angleAxis: {
        axisLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },

    },
    radiusAxis: {
        axisLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        type: 'category',
        data: ['fd', 'fsd', 'asd', 'a', 'd', 'dsaf', 'a', 'b', 'c'],
        z: 10
    },
    polar: {

    },
    series: [{
        type: 'bar',
        data: [0, 0, 0, 0, 0, 0, {
            value: 66, itemStyle: {
                color: "rgb(79, 93, 224)"
            }
        }, {
                value: 80,
                itemStyle: {
                    color: "rgb(149, 191, 250)"
                }
            }, {
                value: 70,
                itemStyle: {
                    color: "#D6EAF8"
                }
            }],
        coordinateSystem: 'polar',
        name: 'With Round Cap',
        roundCap: true,
        color: 'rgba(0, 200, 0, 0.5)',
        itemStyle: {
            borderColor: 'transparent',
            borderWidth: 0.1
        }
    }],

};


export const opt3 = {
    grid: {
        left: "0%",
        right: "0%",
        top: "0%",
        bottom: "20%",
    },
    xAxis: {
        type: 'category',
        data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"],
        axisLine: {
            show: false
        },
        axisTick: false,
        axisLabel: {
            color: "rgb(200, 200, 230)"
        }
    },
    yAxis: {
        type: 'value',
        splitLine: false,
        axisLine: false,

    },
    series: {
        type: "bar",
        itemStyle: {
            color: "rgb(244,245,249)",
            barBorderRadius: [7, 7, 0, 0]
        },
        emphasis: {
            itemStyle: {
                color: "rgb(78,88,239)",
            },
        },
        data: [
            4, 6, 4,
            {
                value: 10,
                itemStyle: {
                    color: "rgb(255,219, 40)",
                }
            },
            6, 4, 4, 6, 3, 5,
            {
                value: 8,
                itemStyle: {
                    color: "rgb(226,231, 251)",
                }
            },
            {
                value: 2,
                itemStyle: {
                    color: "rgb(78,88, 227)",
                }
            },
            {
                value: 5,
                itemStyle: {
                    color: "rgb(226,231, 251)",
                }
            },
            5, 3, 4, 5, 3

        ]
    }
}