import Vue from 'vue'
import VueRouter from 'vue-router'
import configRouter from './routes'
import store from './store'
import App from './App'

const router = new VueRouter({
  routes: configRouter,
  mode: 'history'
})
Vue.use(VueRouter)

Vue.filter('formatTime', function (value) {
  if (typeof value === 'undefined') return
  var time = value.match(/\d{4}-\d{2}-\d{2}/)
  return time ? time[0] : ''
})

/* eslint-disable no-new */
new Vue({
  el: '#root',
  store,
  router,
  template: '<App/>',
  components: { App }
})

window.router = router
