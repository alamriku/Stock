// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'

import {routes} from './routes'
import store from './store/store'

Vue.use(VueResource)

Vue.use(VueRouter)

Vue.http.options.root = 'https://vue-stock-app-7e114.firebaseio.com/'
const router = new VueRouter({
  mode: 'history',
  routes
})
Vue.config.productionTip = false

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
