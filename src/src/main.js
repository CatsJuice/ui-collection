import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/** Ant Design */
import { Icon, Avatar, Slider } from 'ant-design-vue';
Vue.use(Icon);
Vue.use(Avatar);
Vue.use(Slider);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
