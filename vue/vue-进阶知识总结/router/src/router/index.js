import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import About from '@/components/about'
import Team from '@/components/team'
import Course from '@/components/courses'
import Lianxi from '@/components/lianxi'

Vue.use(Router)

export default new Router({
  mode:"history",
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
