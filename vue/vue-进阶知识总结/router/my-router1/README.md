# router
> vue路由
## 模块引入和配置路由
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

## router-view和router-link引用路由
> 在哪个模块里用路由就在哪里引用router-view,连接用router-link创建，to属性填写连接地址，此处也可以理由v-for进行循环扩展。

	<template>
		<div>
			<div class="nav">
				<ul class="list">
					<li>
						<router-link to="/about">关于我们</router-link>
					</li>
					<li>
						<router-link to="/lianxi">联系我们</router-link>
					</li>
				</ul>
			</div>
			<router-view></router-view>
		</div>
	</template>



	
