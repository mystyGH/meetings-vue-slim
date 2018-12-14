import Vue from 'vue';
import VueResource from "vue-resource";
import Meetings from './Meetings.vue';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueResource);
Vue.http.options.root = '/api';

new Vue({
  render: h => h(Meetings),
}).$mount('#app');



