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
                shadowColor: "rgba(79,93,244, .3)",
                shadowBlur: 5,
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