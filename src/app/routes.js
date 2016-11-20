import Home from './page/Home'
import Profile from './page/Profile'
import About from './page/About'
import Article from './page/Article'
import List from './page/List'

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/list',
    component: List
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/article/:id',
    component: Article
  },
  {
    path: '*',
    component: Profile
  }
]
