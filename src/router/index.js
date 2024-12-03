import { createRouter, createWebHistory } from 'vue-router'

// Import your components
import HomeView from '../views/HomeView.vue'
import StudentsView from '../views/StudentsView.vue'
import ParentsView from '../views/ParentsView.vue'
import TeachersView from '../views/TeachersView.vue'
// Define your routes
const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/students',
    name: 'StudentsView',
    component: StudentsView,
    // Alternatively, use lazy loading:
    // component: () => import('../views/About.vue')
  },
  {
    path: '/teachers',
    name: 'TeachersView',
    component: TeachersView,
  },
  {
    path: '/parents',
    name: 'ParentsView',
    component: ParentsView
  }
]

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Optional: Add navigation guards
// router.beforeEach((to, from, next) => {
//   // Example: Check if route requires authentication
//   if (to.meta.requiresAuth && !isAuthenticated()) {
//     next('/login')
//   } else {
//     next()
//   }
// })

export default router