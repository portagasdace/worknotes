# router
> vue路由
#### 利用npm引入router模块
> 利用npm下载router模块并保存到packge.json便于查看和他人使用,可以在src目录下建立一个单独的router文件家，本案例是单独建立的文件夹,写在index.js里的。

	npm install vue-router --save
#### 在项目中引入vue-router模块
> 项目中需要先引入vue 

	import Vue from 'vue'
	import Router from 'vue-router'
#### 运用模块
	Vue.use(Router)
####  引入路由跳转的vue
	import About from '@/pages/about'
	import Team from '@/pages/team'
####  配置路由
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
	    }
	  ]
	})
####  在main.js里边引入router文件夹下的index.js
	import router from './router'

> 默认找到router文件夹下的index.js

####  添加到实例化的Vue中
	new Vue({
	  el: '#app',
	  router,
	  template: '<App/>',
	  components: {App}
	})
### 写在main.js里面的代码案例
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
	new Vue({
	  el: '#app',
	  router,
	  template: '<Layout/>',
	  components: { Layout }
	})
> 本案例没有用默认的App.vue引用的是components下的layout.vue



	
