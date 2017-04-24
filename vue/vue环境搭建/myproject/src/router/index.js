import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import movie from '@/components/movie'
import Videos from'@/components/Videos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/movie',
      name: 'movie',
      component: movie
    },
    {
      path: '/videos',
      name: 'Videos',
      component: Videos
    },
  ]
})
