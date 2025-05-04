import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CartPage from '../components/CartPage.vue'
import CheckoutPage from '../components/CheckoutPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: CartPage },
  { path: '/checkout', component: CheckoutPage },
  // 404 Route - fallback for undefined routes
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
