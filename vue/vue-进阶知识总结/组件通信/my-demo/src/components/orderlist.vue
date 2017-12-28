<template>
	<div>
		<h1>{{msg}}</h1>
		<ul>
			<li v-for="(item,index) in orderlists" @click="changeVal(index)">{{item.label}}</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				msg:'组件间的信息传递',
				index:0
			}
		},
		props:{
			orderlists:{
				type:Array,
		        default:[{
		          label:'test',
		          value:0
		        }]
			}
		},
		methods:{
			changeVal(index){
				this.$emit('on-change',this.orderlists[index].label)
			}
		}
	}
</script>
<style scoped>
	ul {
	  list-style-type: none;
	  padding: 0;
	}
	li {
		cursor:pointer;
	 	display: inline-block;
	 	margin: 0 10px;
	 	list-style: none;
	}
</style>