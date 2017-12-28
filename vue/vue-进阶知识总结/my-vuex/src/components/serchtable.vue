<template>
	<div>
		<el-container>
		 	<el-header>
			 	<div class="headinner">
			 		<el-menu
		  				:default-active="activeIndex2"
		  				class="el-menu-demo"
		  				mode="horizontal"
		  				@select="handleSelect"
		  				background-color="#545c64"
		  				text-color="#fff"
		  				active-text-color="#ffd04b">
						<el-menu-item index="1">处理中心</el-menu-item>
						<el-submenu index="2">
		    				<template slot="title">我的工作台</template>
		    				<el-menu-item index="2-1">选项1</el-menu-item>
		    				<el-menu-item index="2-2">选项2</el-menu-item>
		    				<el-menu-item index="2-3">选项3</el-menu-item>
	  					</el-submenu>
	  					<el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
					</el-menu>
			 	</div>
		 	</el-header>
		 	<el-container>
		    	<el-aside width="200px">
		    		<el-row>
		    			<el-col :span="12">
						    <el-menu
						      default-active="2"
						      class="el-menu-vertical-demo"
						      @open="handleOpen"
						      @close="handleClose"
						      background-color="#545c64"
						      text-color="#fff"
						      active-text-color="#ffd04b">
						      <el-submenu index="1" class="list">
						      	<template slot="title">
						          <i class="el-icon-location"></i>
						          <span>导航一</span>
						        </template>
						        <el-menu-item-group>
						          <template slot="title">分组一</template>
						          <el-menu-item index="1-1">选项1</el-menu-item>
						          <el-menu-item index="1-2">选项2</el-menu-item>
						        </el-menu-item-group>
						        <el-menu-item-group title="分组2">
						          <el-menu-item index="1-3">选项3</el-menu-item>
						        </el-menu-item-group>
						        <el-submenu index="1-4">
						          <template slot="title">选项4</template>
						          <el-menu-item index="1-4-1">选项1</el-menu-item>
						        </el-submenu>
						      </el-submenu>
						      <el-menu-item index="2" class="list">
						        <i class="el-icon-menu"></i>
						        <span slot="title">导航二</span>
						      </el-menu-item>
						      <el-menu-item index="3" class="list">
						        <i class="el-icon-setting"></i>
						        <span slot="title">导航三</span>
						      </el-menu-item>
						    </el-menu>
						</el-col>
					</el-row>
		    	</el-aside>
		    	<el-container>
		     		<el-main>
		     			<el-carousel indicator-position="outside">
						    <el-carousel-item v-for="(item,index) in imgMap" :key="index">
						      <img :src="item.src" alt="">
						    </el-carousel-item>
						</el-carousel>		     			
						<h1>{{msg1}}</h1>
						<el-button type="primary" @click="fun">主要按钮</el-button>
		     		</el-main>
		     		<el-footer>Footer</el-footer>
		    	</el-container>
		 	</el-container>
		</el-container>
	</div>
</template>
<script>
	export default({
		data(){
			return{
				msg:0,
				activeIndex: '1',
        		activeIndex2: '1',
        		imgMap:[
        			{src:require("../assets/1.jpg")},
        			{src:require("../assets/2.jpg")},
        			{src:require("../assets/3.jpg")},
        			{src:require("../assets/4.jpg")}
        		]
			}
		},
		computed:{
			msg1(){
				return this.msg
			}
		},
		methods:{
			fun(){
				this.$store.commit('increment')
			},
			handleSelect(key, keyPath) {
		        console.log(key, keyPath);
		    },
		    handleOpen(key, keyPath) {
		        console.log(key, keyPath);
		    },
		      handleClose(key, keyPath) {
		        console.log(key, keyPath);
		    }
		}
	})
</script>
<style scoped>
	header{
		background-color: rgb(84, 92, 100);
	}
	.main{
		background:#F2F6FC;
	}
	.headinner{
		width:550px;
		margin:0 auto;
	}
	footer{
		background:#409EFF;
	}
	.el-carousel{
		height: 550px;
	}
	.el-carousel__item{
		height: 550px;
	}
	.el-carousel__item img{
		width: 100%;
		height: 100%;
	}
	a{
		text-decoration:none;
	}
	.list{
		width:200px;
	}
	.el-col-12{
		width: 100%;
	}
.el-aside{
	background-color: rgb(84, 92, 100);
}
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
