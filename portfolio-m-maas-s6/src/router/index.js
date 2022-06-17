import Vue from 'vue'
import VueRouter from 'vue-router'

// main views
import AboutView from '../views/AboutView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import CVView from '../views/CVView.vue'
import ContactView from '../views/ContactView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'over',
    component: AboutView
  },
  {
    path: '/portfolio',
    name: 'PortfolioView',
    component: PortfolioView
  },
  {
    path: '/cv',
    name: 'CVView',
    component: CVView
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: ContactView
  },

]

const router = new VueRouter({
  routes
})

export default router
