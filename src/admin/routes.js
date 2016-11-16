import Home from './page/Home.vue'
import Edit from './page/Edit.vue'
import Articles from './page/Articles.vue'

export default [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/edit',
        component: Edit
      },
      {
        path: '/edit/:id',
        component: Edit
      },
      {
        path: '/articles',
        component: Articles
      },
      {
        path: '/articles/:id',
        component: Articles
      }
    ]
  }
]
