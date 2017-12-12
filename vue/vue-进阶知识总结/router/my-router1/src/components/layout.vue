<template>
	<div>
		<div class="head">
			<div class="logo">
				<img src="../img/logo.jpg" alt="">
			</div>
			<div class="nav">
				<ul class="list">
					<li v-for="item in lists" >
						<router-link :to="{path:item.path}">{{item.label}}</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div class="content">
			<center-content></center-content>
		</div>
		<div class="footer">
			<div class="footer-inner">
				
			</div>
		</div>
	</div>
</template>
<script>
	import CenterContent from "./content"
	export default{
		components:{
			CenterContent
		},
		data(){
			return{
				lists:[
					{
						label:'首页',
						path:'/'
					},
					{
						label:'关于我们',
						path:'/about'
					},
					{
						label:'团队介绍',
						path:'/team'
					},
					{
						label:'热门课程',
						path:'/courses'
					},
					{
						label:'联系我们',
						path:'/lianxi'
					}
				]
			}
		}
	}
</script>
<style>
	*{
		margin:0;
		padding:0;
	}
	.head{
		width:100%;
		overflow: hidden;
	}
	.logo{
		width:1000px;
		margin:0 auto;
		height:65px;
		padding:10px 0;
	}
	.logo img{
		width:100%;
		height:100%;
	}
	.nav{
		background:#000;
		width:100%;
		margin:0 auto;
		height:80px;
	}
	.list{
		width: 1000px;
		margin:0 auto;
	}
	.list li a{
		display:block;
		text-decoration:none;
		color:#fff;
	}
	.list li{
		width:200px;
		float: left;
		height:80px;
		line-height:80px;
		font-size:20px;
		color:#fff;
		list-style:none;
		text-align:center;
		cursor:pointer;
	}
	.active{
		background:#e3bc05;
	}
	.content{
		width:100%;
		overflow: hidden;
	}
	.footer{
		width:100%;
		overflow: hidden;
		background:#000;
		position:relative;
		bottom:0;
	}
	.footer-inner{
		width:1000px;
		margin:0 auto;
		height:80px;	
	}
</style>