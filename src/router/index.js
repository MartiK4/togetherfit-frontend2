import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Exercise from '../views/Exercise'
import Upload from '../views/Upload'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/exercise',
    name: 'Exercise',
    component: Exercise
  },
  {
    path: '/upload',
    name: 'Upload',
    component: Upload
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
