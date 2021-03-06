/*!

 =========================================================
 * Vue Now UI Kit - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/now-ui-kit
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from 'vue';
import App from './App.vue';
import store from './store';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
// import VueCookie from 'vue-cookie';
import VueRadioToggleButtons from 'vue-radio-toggle-buttons';
import 'vue-radio-toggle-buttons/dist/vue-radio-toggle-buttons.css';
// import VueDropdown from 'vue-dynamic-dropdown'


Vue.config.productionTip = false;

Vue.use(NowUiKit);
// Vue.component('vue-dropdown', VueDropdown);

// Vue.use(VueCookie);
// Vue.use(VueRadioToggleButtons);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
