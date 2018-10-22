import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import BookingPage from '../components/BookingPage'
import SignUp from '../components/SignUp'
import Login from '../components/Login'
import Admin from '../components/Admin'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/meets/:user',
      name: 'BookingPage',
      component: BookingPage
    },
    {
      path: '/reg',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
