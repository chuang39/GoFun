import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/ApiData'
import Home from '@/components/Home'
import Login from '@/components/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/xxb',
      name: 'Hello',
      component: Hello
    }
  ]
})
