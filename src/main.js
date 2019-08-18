import Vue from 'vue';
import App from './App.vue';
import {library} from "@fortawesome/fontawesome-svg-core";
import FontAwesomeIcon from "@fortawesome/vue-fontawesome/src/components/FontAwesomeIcon";
import {faFolder} from "@fortawesome/free-solid-svg-icons";

library.add(faFolder);

Vue.component('fa-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
