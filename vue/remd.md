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

### 模板指令

+ 重要的指令包括
    - v-text 渲染数据
    - v-if 控制显示
    - v-on 绑定事件
    - v-for 循环渲染 等

#### v-html,v-text 数据渲染

    <h1 v-html="a"></h1>
    <h1 v-text="a"></h1>
    
    new Vue({
        data:{
            a:"Hello Vue"    
        }    
    })

#### v-if,v-show 控制模块隐藏

    <p v-if="isShow"></p>
    <p v-show="isShow"></p>
    
    new Vue{
        data:{
            isShow:true
        }
    }

#### v-for 渲染循环列表

    <ul>
        <li v-for="item in items">
            <p v-text=item.label></p>
        </li>
    </ul>
    
    data:{
        items:[
            {
                label:"苹果"
            },
            {
                label:"鸭梨"
            },
            {
                label:"香蕉"
            },
        ]      
    }
    

#### v-on 事件绑定

    <button v-on:click="doThis"></button>
    <button @click="doThis"></button>
    
    methods:{
        doThis:function(someThing){
            console.log("Hello vue")
        }
    }

#### v-bind 属性绑定

    <img v-bind:src="imagesrc">
    <div :class="{red:isRed}"></div><!-- isRed值为true才显示class的值为red isRed为布尔值-->
    <div :class="[classA,classB]"></div><!-- 以字符串形式显示赋什么值就显示什么 -->
    <div :class="[classA,{classB:isClassB,classC:isCalssC}]"></div>

#### Vue 引用的模块

##### 主要模块

    import Vue from 'vue';

##### 设置路由用的模块

    import VueRouter from 'vue-router';
    
    Vue.use(VueRouter);<!-- 运用这个模块 -->

    const router = new VueRouter({
        routes:[
            {path:'/',name: 'Home',component:Home},
            {path:'/login',name: 'Login',component:Login},
            {path:'/movie',name: 'Movie',component:Movie},
            {path:'/videos',name: 'Videos',component:Videos}
        ]
    })
    
    new Vue({
        el:'#app',
        components:{App},
        router
    })



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

#### vue过滤器

##### 自定义过滤器放在vue实例前

    <div id="app">
        <p>{{message | sum}}</p>
    <div>
    <script src="js/vue.js"></script>
    <script>
    
        //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
    
        Vue.filter("sum", function(value) {  
            return value + 4;
        });
    
        var vue=new Vue({
        el:"#app",
        data:{
            message:2
        }
    })
    
    </script>

##### 过滤器函数

    <div id="app">
        <!-- 过滤器函数始终以表达式的值作为第一个参数。括号里边带引号的参数视为字符串，而不带引号的参数按表达式计算。 -->
        <p>{{message | cal(10,20)}}</p>
    <div>
    <script src="js/vue.js"></script>
    <script>
    
        Vue.filter("cal", function (value, begin, xing) {  
            return value + begin + xing;
        });
    
        var vue=new Vue({
        el:"#app",
        data:{
            message:2
        }
    })
    
    </script>

##### 串联过滤器

    <div id="app">
        <!-- 添加两个过滤器,注意不要冲突 -->
       <p>{{message | sum | currency }}</p>
    <div>
    <script src="js/vue.js"></script>
    <script>
        <!-- 先执行第一个过滤器在执行第二个过滤器 -->
        Vue.filter("sum", function(value) { 
            return value + 4;
        });
    
        Vue.filter("currency", function(value) {   
            return value -6;
        });
    
        var vue=new Vue({
        el:"#app",
        data:{
            message:2
        }
    })
    
    </script>

##### 自定义过滤器放在vue实例内

    <div id="app">
        <p>{{message | sum}}</p>
        <p>{{message | cal(10,20)}}</p>
        <p>{{message | sum | currency }}</p>
    <div>
    <script src="js/vue.js"></script>
    <script>
        var vue=new Vue({
        el:"#app",
        data:{
            message:2
        },
        filters:{
            sum: function (value) {
                return value + 4;
            },
            cal: function (value, begin, xing) {
                return value + begin + xing;
            },
            currency:function(value){
                return value -6;
            }
        }
    </script>

