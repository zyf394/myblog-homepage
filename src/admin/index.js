import Vue from 'vue'
import VueRouter from 'vue-router'
import configRouter from './routes'
import Admin from './Admin'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueRouter)
Vue.use(ElementUI)

const router = new VueRouter({
  routes: configRouter
})

const MyBlogAdimn = Vue.extend(Admin)
new MyBlogAdimn({ router }).$mount('#root')

window.router = router
