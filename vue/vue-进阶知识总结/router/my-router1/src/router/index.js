import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import About from '@/pages/about'
import Team from '@/pages/team'
import Course from '@/pages/courses'
import Lianxi from '@/pages/lianxi'

Vue.use(Router)

export default new Router({
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
