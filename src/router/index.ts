import { createRouter as createNewRouter, createWebHistory } from 'vue-router'
import DogView from '../views/DogView.vue'
import DogsView from '../views/DogsView.vue'
import HomeView from '../views/HomeView.vue'

const router = createNewRouter({
  history: createWebHistory(),
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
      path: `/dog/:breed/:id`,
      name: 'dog',
      component: DogView,
    },
  ],
})

export default router
