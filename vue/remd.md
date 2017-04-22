## 起步

### 如何学好新技能

- What(是什么)

    + Vue是javascript框架
    + 上官网 -> 起步（Getting Stated）
    + Vue 作者：尤雨溪
    + 单页面应用 SPA（Single Page Application）
    
    以前的页面交互模型都是通过服务器直出的形式直接渲染到客户端

    - 客户端发送一个请求
    - 浏览器锁死：等待服务端的响应
    - 渲染服服务端响应的数据内容
- Why(为什么)
- How(怎么样)

### 单页面应用 SPA（Single Page Application）

以前的页面交互模型都是通过服务器直出的形式直接渲染到客户端

- 客户端发送一个请求
- 浏览器锁死：等待服务端的响应
- 渲染服服务端响应的数据内容

### Vue 环境搭建

+ $ npm install -g vue-cli(可以用淘宝镜像会更快)
+ $ vue init webpack my-project(创建项目)
    - 安装依赖，走你
+ $ cd my-project
+ $ npm install
+ $ npm run dev

### Vue.js 组件

    new Vue({
        <!-- 数据 -->
        data:{
            a:1
            b:[]
        },
        <!-- 方法 -->
        methods:{
            dosomeing:function(){
                this.a++
            }
        },
        <!-- 监听 -->
        watch:{
            "a":function(val,oldval){
                console.log(val,oldval)
            }
        }
    })

+ new 一个 Vue 对象的时候可以设置他的属性，其中最重要的包括三个，分别是 data,methods,watch
    - data代表 Vue 对象的数据，methods 代表 Vue 对象的方法，watch 设置了对象监听的方法。
+ Vue 对象里的设置通过 html 指令进行关联。