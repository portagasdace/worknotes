// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import Router from 'vue-router'
import Index from '@/pages/index'
import About from '@/pages/about'
import Team from '@/pages/team'
import Course from '@/pages/courses'
import Lianxi from '@/pages/lianxi'

Vue.use(Router)
Vue.config.productionTip = false
var router = new Router({
    routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/courses',
      name: 'Course',
      component: Course
    },
    {
      path: '/lianxi',
      name: 'Lianxi',
      component: Lianxi
    },
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
