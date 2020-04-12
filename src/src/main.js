import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/** Ant Design */
import { Icon } from 'ant-design-vue';
Vue.use(Icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
