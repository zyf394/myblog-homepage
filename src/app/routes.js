import Home from './page/Home'
import Profile from './page/Profile'
import About from './page/About'
import Article from './page/Article'

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/article/:id',
    component: Article
  }
]
