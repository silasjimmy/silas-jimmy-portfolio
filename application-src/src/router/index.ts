import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/blog',
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue'),
    // },
    // {
    //   path: '/projects',
    //   name: 'projects',
    //   component: () => import('../views/ProjectsView.vue'),
    // },
    // {
    //   path: '/volunteer',
    //   name: 'volunteer',
    //   component: () => import('../views/VolunteerView.vue'),
    // },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
    },
    {
      path: '/blog/:id',
      name: 'blog-post',
      component: () => import('../views/BlogPostView.vue'),
      props: true,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a different route
    return { top: 0 }
  },
})

export default router
