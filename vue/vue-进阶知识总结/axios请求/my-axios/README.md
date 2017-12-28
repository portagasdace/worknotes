# my-axios

> A Vue.js project

## axios请求

#### 安装
	npm install axios
#### 利用cdn引入引入js
	<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
#### 发送get请求
> 通过给定的ID来发送请求

	axios.get('/user?ID=12345')
	  .then(function(response){
	    console.log(response);
	  })
	  .catch(function(err){
	    console.log(err);
	  });
> 以上请求也可以通过这种方式来发送

	axios.get('/user',{
	  params:{
	    ID:12345
	  }
	})
	.then(function(response){
	  console.log(response);
	})
	.catch(function(err){
	  console.log(err);
	});
#### 发送post请求
	axios.post('/user',{
	  firstName:'Fred',
	  lastName:'Flintstone'
	})
	.then(function(res){
	  console.log(res);
	})
	.catch(function(err){
	  console.log(err);
	});
#### 一次性并发多个请求
	function getUserAccount(){
	  return axios.get('/user/12345');
	}
	function getUserPermissions(){
	  return axios.get('/user/12345/permissions');
	}
	axios.all([getUserAccount(),getUserPermissions()])
	  .then(axios.spread(function(acct,perms){
	    //当这两个请求都完成的时候会触发这个函数，两个参数分别代表返回的结果
	  }))
## axios的API
#### axios可以通过配置（config）来发送请求
> 1、 axios(config)

	//发送一个`POST`请求
	axios({
	    method:"POST",
	    url:'/user/12345',
	    data:{
	        firstName:"Fred",
	        lastName:"Flintstone"
	    }
	});
> 2、 axios(url[,config])

	//发送一个`GET`请求（默认的请求方式）
	axios('/user/12345');
#### 请求方式的别名，这里对所有已经支持的请求方式都提供了方便的别名
	axios.request(config);
	axios.get(url[,config]);
	axios.delete(url[,config]);
	axios.head(url[,config]);
	axios.post(url[,data[,config]]);
	axios.put(url[,data[,config]])
	axios.patch(url[,data[,config]])

> 注意：当我们在使用别名方法的时候，url,method,data这几个参数不需要在配置中声明
## mock.js数据接口模拟

官网：http://mockjs.com/

#### 安装
	npm install mockjs
#### 引入mock.js
	require('./mock.js')
> 在main.js里引用

#### 数据模拟
	const produceNewsData = function() {
		let articles = [];
		for (let i = 0; i <4; i++) {
			let newArticleObject = {
				label:["姓名","性别","作者","地址"],
				name: Mock.Random.cname(), //  Random.csentence( min, max )
				sex: Mock.Random.integer(0, 1), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
				author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
				addr: Mock.mock('@county(true)'), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
			}
			articles.push(newArticleObject)
		}
		return {
			articles: articles
		}
	}
> 数据生成规则可以在网上查

## github项目案例

mock和axios运用链接：https://www.cnblogs.com/jasonwang2y60/p/7302449.html
链接：https://github.com/Jasonwang911/vue_mockjs

	