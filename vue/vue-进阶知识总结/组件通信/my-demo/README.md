# my-demo

> A Vue.js project

## 组建间的信息传递

#### 父组件下向子组件传递
> 父组件通过绑定属性绑定数据

	<order-list :orderlists="datas"></order-list>
	data () {
	    return {
	      msg: 'Welcome to Your Vue.js App',
	      datas:[
	        {label:"demo1"},
	        {label:"demo2"},
	        {label:"demo3"},
	        {label:"demo4"}
	      ],
	      value:''
	    }
	},
> 子组件通过props接受数据定义数据类型和默认值

	props:{
		orderlists:{
			type:Array,
	        default:[{
	          label:'test',
	          value:0
	        }]
		}
	},

#### 子组件下向父组件传递
> 通过方法调用$emit()方法发送事件'on-change',事件可以自己定义

	methods:{
		changeVal(index){
			this.$emit('on-change',this.orderlists[index].label)
		}
	}
> 父级绑定$emit()定义的事件，方法里边用$event参数接收传过来的数据，以及对数据进行操作

	<order-list @on-change="change($event)"></order-list>
	 methods:{
	    change(val){
	      this.value=val
	    }
	  }
