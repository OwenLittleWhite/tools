import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Timestamp from '@/components/tools/Timestamp'
Vue.use(Router)
export default new Router({
  base: '/tools',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/timestamp',
      name: 'Timestamp',
      component: Timestamp
    }
  ],
  mode: 'hash',
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})
