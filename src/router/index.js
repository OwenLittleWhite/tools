import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Timestamp from '@/components/tools/Timestamp'
import Base64 from '../components/tools/Base64'
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
    },
    {
      path: '/base64',
      name: 'Base64',
      component: Base64
    }
  ],
  mode: 'hash',
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})
