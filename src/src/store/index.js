import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showOperator: false,
    currentActiveAnima: undefined,
    tpl0001: {
      bgColor: "#48C9B0"
    },
    tpl0002: {
      bgColor: "#48C9B0"
    },
    tpl0003: {
      status: 0,
    }
  },
  mutations: {
    updateCurrentActiveAnimation(state, val) {
      state.currentActiveAnima = val;
    },

    updateStyle0001(state, { key, value }) {
      state.tpl0001[key] = value
    },
    updateStyle0002(state, { key, value }) {
      state.tpl0002[key] = value
    },
    updateStyle0003(state, { key, value }) {
      state.tpl0003[key] = value;
    },
    UPDATE(state, { key, value }) {
      state[key] = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
