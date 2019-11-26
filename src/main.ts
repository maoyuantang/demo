/*
 * @Author: tmy
 * @Date: 2019-11-25 15:49:06
 * @LastEditors: zqg
 * @LastEditTime: 2019-11-26 15:19:51
 * @Description: Do not edit
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import './assets/iconfont/iconfont.css';

import 'element-ui/lib/theme-chalk/index.css';
import './utils/elementUI';
// import VeeValidate, {config, removeErrorName} from '@/utils/veeValidate';
// // 删除vee-validate验证注册Vue实列Errors对象下某一个错误
// Vue.prototype.removeErrorName = removeErrorName;
// Vue.use(VeeValidate, config);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
