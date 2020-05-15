//Attempt 1

// import Vue from 'vue';
// import { ReactiveBase } from '@appbaseio/reactivesearch-vue';
// import App from './App';

// Vue.config.productionTip = false;
// Vue.use(ReactiveBase);
// console.log('[i] Starting client app')

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
//   components: { App }
// }).$mount('#app')

//Attempt 2

// import Vue from 'vue'
// import ReactiveSearch from '@appbaseio/reactivesearch-vue'
// import App from './App'

// Vue.config.productionTip = false

// Vue.use(ReactiveSearch)

// /* eslint-disable no-new */
// new Vue({
//   render: h => h(App),
//   components: { App }
// }).$mount('#app')

// import Vue from 'vue';
// import App from './App.vue';
// import ReactiveSearch from '@appbaseio/reactivesearch-vue'

// Vue.use(ReactiveSearch);
// Vue.config.productionTip = false;

// new Vue({
// 	render: h => h(App),
// }).$mount('#app');

import Vue from "vue";
import App from "./App.vue";
import VueRs from "@appbaseio/reactivesearch-vue";

Vue.use(VueRs);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");