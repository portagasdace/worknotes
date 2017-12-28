// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
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
const produceNewsData1 = function() {
	let articles = [];
	for (let i = 0; i <4; i++) {
		let newArticleObject = {
			label:["姓名","性别","作者","地址"],
			name: Mock.Random.cname(), //  Random.csentence( min, max )
			sex: Mock.Random.integer(0, 1), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
			author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
			addr: Mock.mock('@county(true)'),
		}
		articles.push(newArticleObject)
	}

	return {
		articles: articles
	}
}
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'post', produceNewsData);
Mock.mock('/demo/index', 'post', produceNewsData1);