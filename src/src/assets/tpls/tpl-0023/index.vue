<template>
  <main class="animation-root">
    <div
      class="screen"
      :style="`
        ${curAni !== '0023' ? 'transform: scale(0.13);' : ''}
    `"
    >
      <!-- 左侧 -->
      <div class="guide">
        <div class="top">
          <img src="./assets/imgs/a.svg" />
          <p>
            <span style="margin-right: 5px;">Cats</span>
            <span>
              <strong>Juice</strong>
            </span>
          </p>
        </div>
        <div class="middle">
          <div
            @click="tab = t.id"
            :class="['tab-item', t.id === tab ? 'active' : '' ]"
            v-for="t in tabs"
            :key="t.id"
          >
            <a-icon v-if="t.id !== tab" :type="t.icon" />
            <span v-if="t.id === tab">{{ t.label }}</span>
            <div class="dot" v-if="t.id === tab"></div>
          </div>
        </div>
        <div class="bottom">
          <a-icon type="logout" />
        </div>
      </div>

      <!-- 右侧 -->
      <div class="content">
        <!-- 主要内容顶部 -->
        <div class="top">
          <div class="left">
            <input type="text" placeholder="Search" />
          </div>
          <div class="right">
            <img src="./assets/imgs/bell.svg" />
            <div class="head"></div>
            <div class="name">
              <span>Cats Juice</span>
            </div>
          </div>
        </div>
        <!--  -->
        <!-- 主要内容的中部 -->
        <div class="middle">
          <div class="middle-left">
            <div class="middle-left-top">
              <div class="chart-container">
                <header>
                  <div class="middle-left-top-left">
                    <section>
                      <check-box-01 size="14" br="2" style="font-size: 0.7rem;" v-model="revenue" color="rgb(79,93,244)" />
                      <span>Revenue</span>
                    </section>
                    <section>
                      <check-box-01 size="14" br="2" style="font-size: 0.7rem;" v-model="orders" color="rgb(247,229,52)" />
                      <span>Orders</span>
                    </section>
                    <section>
                      <check-box-01 size="14" br="2" style="font-size: 0.7rem;" v-model="visits" color="rgb(159,239,201)" />
                      <span>Visits</span>
                    </section>
                  </div>
                  <div class="middle-left-top-right">
                    <span>March</span>
                    <a-icon type="down" />
                  </div>
                </header>
                <div class="chart">
                  <e-charts style="width: 100%;height:100%;" autoresize :options="opt1" />
                </div>

                <div class="count">
                    <div class="item">
                        <p>Avg.Revenue</p>
                        <p>$ 13,564</p>
                    </div>

                    <div class="item">
                        <p>Satisfaction Rate</p>
                        <p>56%</p>
                    </div>
                </div>
              </div>

              <div class="user-card">
                <div class="user-head">
                  <img src="./assets/imgs/user.svg" />
                </div>

                <div>
                  Emgaged
                  <br />users
                </div>

                <div class="circle"></div>
                <div class="check"></div>
              </div>
            </div>
          </div>
          <div class="right"></div>
        </div>
        <div class="bottom"></div>
      </div>
    </div>
  </main>
</template>

<script>
import ECharts from "vue-echarts";
import CheckBox01 from "@/components/common/CheckBox01";

import "echarts/lib/chart/line";

import { opt1 } from "./charts";

export default {
  components: {
    ECharts,
    CheckBox01
  },
  computed: {
    curAni() {
      return this.$store.state.currentActiveAnima;
    }
  },
  data() {
    return {
      tabs: [
        {
          id: 0,
          label: "home",
          icon: "pie-chart"
        },
        {
          id: 1,
          label: "heat",
          icon: "heat-map"
        },
        {
          id: 2,
          label: "swap",
          icon: "swap"
        },
        {
          id: 3,
          label: "fund",
          icon: "fund"
        }
      ],
      tab: 0,

      opt1,

      revenue: true,
      orders: true,
      visits: true
    };
  }
};
</script>

<style lang="less" scoped>
@bg: #f4d03f;
@br: 30px;
@out-padding: 12px;

@import "~@/assets/style/ttf/font.css";

* {
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
}

main.animation-root {
  background-color: @bg;
  font-family: "MYFONT";

  .screen {
    width: 1100px;
    height: 700px;
    border-radius: @br;
    background-color: #fff;
    flex-shrink: 0;
    transition: all 0.2s ease;

    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

    display: flex;
    padding: @out-padding;
    box-sizing: border-box;

    .guide {
      width: 100px;
      border-radius: @br;
      height: 100%;
      background-color: rgb(80, 92, 255);

      display: flex;
      flex-direction: column;

      .top {
        padding: 30px 0;
        img {
          width: 40%;
          flex-shrink: 0;
          transform: rotate(0deg);
        }

        p {
          color: #fff;
          font-size: 0.7rem;
          transform: scale(0.8);
          span:nth-child(2) {
            font-weight: 900;
          }
        }
      }
      .middle {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 0.9rem;

        .tab-item {
          display: flex;
          flex-direction: column;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 10px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 5px 0;
          box-sizing: border-box;
          height: 50px;
          width: 80%;

          &.active,
          &:hover {
            background-color: rgba(255, 255, 255, 0.2);
          }

          .dot {
            width: 6px;
            height: 6px;
            background-color: #fff;
            border-radius: 50%;
            transform: translateY(5px);
          }
        }
      }

      .bottom {
        padding: 30px 0;
        color: #fff;
        cursor: pointer;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      height: 100%;
      margin-left: @out-padding;
      border-radius: @br;
      //   background-color: #678231;
      padding-left: 40px;
      padding-right: 20px;

      //   主要内容头部
      .top {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
          position: relative;
          input {
            width: 300px;
            height: 40px;
            border: none;
            border-radius: 36px;
            background-color: rgb(244, 245, 249);
            padding-left: 50px;

            &:focus {
              outline: none;
            }
          }

          &::after {
            content: "";
            position: absolute;
            left: 10px;
            top: 0;
            width: 40px;
            height: 40px;
            background-image: url(./assets/imgs/search.svg);
            background-size: 40%;
            background-repeat: no-repeat;
            background-position: center;
          }
        }

        .right {
          height: 100%;
          display: flex;
          align-items: center;
          font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
            sans-serif;
          color: #888;
          font-weight: bold;

          img {
            width: 24px;
            height: 24px;
            margin-right: 10px;
          }

          .head {
            width: 40px;
            height: 40px;
            background-image: url(./assets/imgs/head.jpg);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 12px;
            margin-right: 10px;
          }
        }
      }

      // 主要内容的中间部分
      .middle {
        width: 100%;
        flex-grow: 1;
        // background-color: turquoise;
        padding-top: 30px;

        display: flex;
        flex-direction: row;
        .middle-left {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          &::after {
            width: 0;
            height: 0;
            background: none;
          }

          .middle-left-top {
            display: flex;
            flex-direction: row;
            height: 280px;
            background-color: rgb(244, 245, 249);
            border-radius: 20px;
            box-sizing: border-box;
            padding: 20px;

            .chart-container {
              height: 100%;
              width: 75%;
              padding: 10px;
              background-color: #fff;
              border-radius: 20px;
              box-sizing: border-box;
              overflow: hidden;
              header {
                font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
                color: #666;
                font-size: 0.9rem;
                display: flex;
                justify-content: space-between;

                .middle-left-top-left {
                  display: flex;

                  section {
                    display: flex;
                    margin-right: 20px;
                    align-items: center;
                    span {
                      margin-left: 5px;
                    }
                  }
                }

                .middle-left-top-right {
                  width: 100px;
                  height: 40px;
                  border-radius: 20px;
                  background-color: rgb(244, 245, 249);

                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  padding: 0 15px;
                  font-size: 0.7rem;
                  //   font-family: "MYFONT";
                  color: #aaa;
                  cursor: pointer;
                  &:hover {
                    background-color: rgb(240, 241, 245);
                  }
                }
              }

              .chart {
                  
                  width: 100%;
                  height: 120px;
              }

              .count {
                  display: flex;
                    margin-top: 10px;
                  .item {
                      display: flex;
                      flex-direction: column;
                      align-items: flex-start;
                      margin-right: 50px;

                      p {
                          &:nth-child(1) {
                              color: #bbb;
                              margin-bottom: 10px;
                              font-size: 0.8rem;
                          }
                          &:nth-child(2) {
                              color: rgb(35,42,108);
                              font-weight: bold;
                          }
                      }
                      
                  }
              }
            }
            .user-card {
              width: ~"calc(25% - 20px)";
              margin-left: 5%;
              height: 100%;
              background-color: #fff;
              overflow: hidden;
              border-radius: 15px;
              position: relative;

              display: flex;
              flex-direction: column;
              align-items: center;
              font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
              cursor: pointer;
              &:hover {
                  box-shadow: 10px 10px 20px rgba(0,0,0, .1);
              }

              .user-head {
                margin-top: 30px;
                margin-bottom: 10px;
                width: 40px;
                height: 40px;
                border-radius: 5px;
                border: 2px solid rgb(234,235,240);
                display: flex;
                align-items: center;
                justify-content: center;
                img {
                  width: 50%;
                }
              }
              line-height: 30px;
              color: rgb(69, 74, 299);
              font-weight: bold;

              .circle {
                  width: 200px;
                  height: 200px;
                  border-radius: 50%;
                  background-color: rgb(81, 96, 238);
                  position: absolute;
                  bottom: -110px;
              }
              .check {
                  width: 30px;
                  height: 30px;
                  border-radius: 50%;
                  background-color: #fff;
                  position: absolute;
                  bottom: 20px;

                  background-image: url(./assets/imgs/check.svg);
                  background-size: 40%;
                  background-repeat: no-repeat;
                  background-position: center;
              }
            }
          }
        }
        .right {
          width: 280px;
          // background-color: aquamarine;
        }
      }

      .bottom {
        width: 100%;
        height: 120px;
        background-color: thistle;
      }
    }
  }
}
</style>