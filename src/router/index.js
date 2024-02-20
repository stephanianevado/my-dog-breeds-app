import Vue from 'vue'
import VueRouter from 'vue-router'
import DogView from '../views/DogView.vue'
import DogsView from '../views/DogsView.vue'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/dogs',
      name: 'dogs',
      component: DogsView,
    },
    {
      path: `/dog/:id`,
      name: 'dog',
      component: DogView,
    },
  ],
})

export default router
