import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import axios from 'axios';
import VueAxios from 'vue-axios';

import store from '@/store';
import i18n from '@/languages/translations';
import App from '@/App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faEyeSlash)
library.add(faEye)
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(require('vue-moment'));
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  i18n,
  mode: 'history',
  render: h => h(App),
  store,
  components: { App },
  template: '<App/>',
});

