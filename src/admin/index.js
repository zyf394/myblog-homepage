import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import configRouter from './routes'
import Admin from './Admin'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes: configRouter
})

const MyBlogAdimn = Vue.extend(Admin)
new MyBlogAdimn({ router }).$mount('#root')

window.router = router
