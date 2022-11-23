import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import "../public/reset.css";
// TODO css样式，主页地址刷新bug，修正bug后css样式页面单独引入
import "./assets/css/login.css";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
}).$mount("#app");
