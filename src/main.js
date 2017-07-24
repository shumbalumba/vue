// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Login from './Login.vue';
import Servers from './Servers.vue';
import VueResource from 'vue-resource';

require('../node_modules/bootstrap/less/bootstrap.less');

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
    { path: '/servers/', component: Servers},
    { path: '/', component: Login}
];

const router = new VueRouter({
    routes,
    mode:'history'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
