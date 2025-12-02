import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about-me',
      name: 'about-me',
      component: () => import('../views/AboutMeView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/volunteer-work',
      name: 'volunteer-work',
      component: () => import('../views/VolunteerWorkView.vue'),
    },
    {
      path: '/art',
      name: 'art',
      component: () => import('../views/ArtView.vue'),
    },
  ],
})

export default router
