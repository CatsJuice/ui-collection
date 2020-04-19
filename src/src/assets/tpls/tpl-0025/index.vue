<template>
  <main class="animation-root">
    <s8-wrapper :width="size" :style="`${curAni === '0025' ? '' : 'transform: scale(0.3);'}`">
      <main class="watch-list">
        <header>
          <div class="menu">
            <span></span>
          </div>

          <section>
            <a-icon type="search" style="color: #333;transform: translate(-10px, 2px);" />
            <a-avatar :size="20" icon="user" />
          </section>
        </header>

        <main class="content">
          <h2>Discover</h2>
          <p>
            <span
              :class="[activeTab === i ? 'active' : '']"
              v-for="i in tabs"
              :key="i"
              @click="activeTab = i"
            >{{ i }}</span>
          </p>

          <div
            class="swipper"
            :style="`
        width: 100%;
        height: 45%;
        transition: all 0.3s ease;
        transform: translateX(${activeWatch === 1 ? '0' : '-60%'});
      `"
          >
            <watch-card
              :img="require('@/assets/apple-watch/apple-watch-02.png')"
              bigTitle="Apple Watch 5"
              smallTitle="$199"
              bg="rgb(241,118,60)"
              w="60%"
              h="100%"
              @click.native="activeWatch = 1"
              :style="`
            margin-left: 12px;
            ${activeWatch === 1 ? '' : 'transform: scale(0.8);'}
          `"
            />

            <watch-card
              :img="require('@/assets/apple-watch/apple-watch-03.png')"
              bigTitle="Apple Watch 5"
              smallTitle="$199"
              bg="rgb(32,201,207)"
              w="60%"
              h="100%"
              @click.native="activeWatch = 2"
              :style="`
            margin-left: 12px;
            ${activeWatch === 2 ? '' : 'transform: scale(0.8);'}
          `"
            />

            <watch-card
              :img="require('@/assets/apple-watch/apple-watch-03.png')"
              style="margin-left: 12px;transform: scale(0.8);"
              bigTitle="Apple Watch 5"
              smallTitle="$199"
              bg="rgb(31,204,159)"
              w="60%"
              h="100%"
            />
          </div>

          <footer style>
            <h3 style>Discount Offer</h3>
            <div class="row" style>
              <div class="card" :style="`
            background-color:rgb(31,200,205);`">
                <img src="@/assets/apple-watch/apple-watch-02.png" style />
                <p class="card-text">
                  <span>Apple Watch 3</span>
                  <span>$199</span>
                </p>
              </div>

              <div
                class="card"
                :style="`
            background-color:rgb(29,164,195);
            margin-left: 12px;`"
              >
                <img src="@/assets/apple-watch/apple-watch-02.png" style />
                <p class="card-text">
                  <span>Apple Watch 3</span>
                  <span>$199</span>
                </p>
              </div>

              <div
                class="card"
                :style="`
            background-color:rgb(31,204,159);
            margin-left: 12px;`"
              >
                <img src="@/assets/apple-watch/apple-watch-02.png" style />
                <p class="card-text">
                  <span>Apple Watch 3</span>
                  <span>$199</span>
                </p>
              </div>
            </div>
          </footer>
        </main>
      </main>
    </s8-wrapper>

    <div class="slier-handler" v-if="curAni === '0025'">
      <a-slider v-model="size" :min="50" :max="1000" :vertical="true" :style="`
        height: 200px;
      `"/>
    </div>
  </main>
</template>

<script>
import WatchCard from "./WatchCard.vue";
import S8Wrapper from "@/components/common/S8Wrapper";

export default {
  components: {
    WatchCard,
    S8Wrapper
  },
  data() {
    return {
      tabs: ["Apple", "Samsung", "Xiaomi", "Asus"],
      activeTab: "Apple",
      activeWatch: 1,
      size: 227,
    };
  },
  computed: {
    curAni() {
      return this.$store.state.currentActiveAnima;
    },
  },

  watch: {
      curAni(id) {
          if (id !== '0025') this.size = 227;
      }
  }
};
</script>

<style lang="less" scoped>
main.animation-root {
  background-color: #e7e7f1;
  position: relative;
  .slier-handler {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
 }
}
main.watch-list {
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;

  * {
    box-sizing: border-box;
  }

  // 头部
  header {
    width: 100%;
    height: 50px;
    display: flex;
    padding: 0 10px;
    padding-bottom: 10px;
    align-items: center;
    justify-content: space-between;
    color: #666;

    .menu {
      span {
        display: block;
        width: 12px;
        height: 1px;
        background-color: #333;
        position: relative;
        margin-top: -8px;
        &::after {
          content: "";
          position: absolute;
          display: block;
          top: 4px;
          width: 6px;
          height: 1px;
          background-color: #333;
        }
        &::before {
          content: "";
          position: absolute;
          display: block;
          top: 8px;
          width: 8px;
          height: 1px;
          background-color: #333;
        }
      }
      width: 20px;
      height: 20px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:hover {
        background-color: #f0f0f0;
      }
    }

    section {
    }
  }

  // content
  main.content {
    flex-grow: 1;
    width: 100%;
    //   background-color: tomato;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2 {
      padding: 0 12px;
      font-weight: bold;
      color: #444;
    }

    p {
      font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
      padding: 0 12px;
      display: flex;
      span {
        transform: scale(0.9);
        transition: all 0.1s ease-in-out;
        color: #999;
        font-size: 0.6rem;
        margin-right: 2px;
        padding: 0px 5px;
        height: 18px;
        border-radius: 9px;

        cursor: pointer;
        display: block;

        &.active {
          color: #333;
          font-weight: bold;
        }

        &:hover {
          background-color: #444;
          color: #fff;
        }
      }
    }

    .swipper {
      display: flex;
      overflow-x: visible;
    }
  }
}

footer {
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  h3 {
    font-weight: bold;
    color: #555;
    text-align: left;
    padding: 10px 12px;
  }

  .row {
    display: flex;
    width: 100%;
    flex-grow: 1;

    .card {
      width: 40%;
      height: 80%;
      margin-left: 12px;
      border-radius: 15px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;

      img {
        width: 70%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -22%;
      }

      p.card-text {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        padding: 0;
        margin: 0;
        transform: scale(0.8);
        span {
          font-size: 0.7rem;
          white-space: nowrap;
          color: #fff;
        }
      }
    }
  }
}
</style>