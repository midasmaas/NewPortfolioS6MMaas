import Vue from 'vue'
import VueRouter from 'vue-router'

// main views
import AboutView from '../views/AboutView.vue'
import CVView from '../views/CVView.vue'
import ContactView from '../views/ContactView.vue'
import testView from '../views/testView'

// portfolio views
import PortfolioView from '../views/PortfolioView.vue'
import PortfolioProductView from '../views/PortfolioProductView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'over',
    component: AboutView
  },
  {
    path: '/cv/:jobid',
    name: 'CVView',
    component: CVView
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: ContactView
  },
  {
    path: '/portfolio',
    name: 'PortfolioView',
    component: PortfolioView,
  },
  {
    path: '/portfolio/product/:productid',
    name: 'PortfolioProductView',
    component: PortfolioProductView
  },
  {
    path: '/test',
    name: 'testView',
    component: testView,
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(){
    return {x: 0, y: 0}
  }
})

export default router
