import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faFacebookSquare,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faChevronDown,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

library.add(faFacebookSquare, faTwitter, faChevronDown, faExclamationCircle);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
