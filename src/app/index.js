import Vue from 'vue'
import VueRouter from 'vue-router'
import configRouter from './routes'
import VueResource from 'vue-resource'
import App from './App'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.filter('formatTime', function (value) {
  if (typeof value === 'undefined') return
  var time = value.match(/\d{4}-\d{2}-\d{2}/)
  return time ? time[0] : ''
})

const router = new VueRouter({
  routes: configRouter,
  mode: 'history'
})

const MyBlog = Vue.extend(App)
new MyBlog({ router }).$mount('#root')

window.router = router
