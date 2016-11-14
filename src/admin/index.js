import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import configRouter from './routes'
import Admin from './Admin'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes: configRouter,
  history: false
})

const app = new Vue({ router }).extend(Admin).$mount('#root')
console.log(app)

window.router = router
