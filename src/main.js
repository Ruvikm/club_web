import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from "./router";
import store from './store';

//信息提示框
import myconfirm from '../src/utils/myconfirm'
Vue.prototype.$myconfirm = myconfirm;

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,//新增
  store,//新增
  render: h => h(App)
});
