# 实习笔记
#### UI框架网址
UI框架 : http://element.eleme.io
#### 限制文本输入
   
    <input type="text" onkeyup="value=value.replace(/[^\d.]/g,'')"><!-- 只能输入数字和小数 -->
    <input type="text" onkeyup="value=value.replace(/[^\d]/g,'')"><!-- 只能输入数字 -->

#### 获取选中selected 的值

    <select name="" id="select">
        <option value="">火影</option>
        <option value="">死神</option>
        <option value="">海贼</option>
    </select>
    <script src="../js/jquery.min.js"></script>
    <script>
        $(document).ready(function(){
            $("#select").change(function(){
                selectchange();
            })
            function selectchange(){
                var text=$("select").find("option:selected").text();
                console.log(text)
            }
        })
    </script>

#### 获取checkbox被勾选的值 

    <input type="checkbox" name="check" value="足球">
    <input type="checkbox" name="check" value="1">
    <input type="checkbox" name="check" value="3">
    <input type="checkbox" name="check" value="4">
    <button>点击获取</button>
    <script src="../js/jquery.min.js"></script>
    <script>
    $("button").click(function(){
        var arr=[] 
        $('input[name="check"]:checked').each(function(){
            arr.push($(this).val())
             
        })
        console.log(arr)
    })

#### 页面小图标显示

    <link rel="stylesheet" href="style/Font-Awesome-master/css/font-awesome.min.css">

    <body>
        <ul>
            <li><i class="fa fa-wrench fa-fw"></i></li>
            <li><i class="fa fa-wrench fa-fw"></i></li>
            <li><i class="fa fa-wrench fa-fw"></i></li>
        </ul>
    </body>

#### 匿名函数

+ (function(){})表示一个匿名函数。function(arg){...}定义了一个参数为arg的匿名函数，然后使用(function(arg){...})(param)来调用这个匿名函数。其中param是传入这个匿名函数的参数。

+ 需要注意与$(function(){})的区别：$(function(){}) 是 $(document).ready(function(){}) 的简写，用来在DOM加载完成之后执行一系列预先定义好的函数。

#### checkbox 全选

    <input type="text">海贼
    <input type="text">火影
    <input type="text">死神
    <input type="text">妖尾
    <input type="text" id="chkSelected" onclick="GetCheck(this)"><button>全选</button>
    
    <script src="jquery.js"></script>
    <script>
        function GetCheck(check){
            var item=$("input")
            for(var i=0;i<item.length;i++){
                if(item.type="checkbox"){
                    item[i].checked=check.checked
                }
            }
        }
    </script>

#### less

+ 用less之前先要配置好gulp和gulpfile.js文件
+ less支持多行和单行注释
+ less用@定义变量，可分全局变量和局部变量

##### less混合混入（mixin）

    .box{
      width:100px;
      height:100px;          
    }
    .Bigbox{
        .box;
    }
    <!-- 可以穿参数 待参数的不会编译成css-->
    .box(@val){
        width:@val;
        height:@val;
    }
    .Bigbox{
        .box(200px);
    }
     <!-- 给参数设至默认值-->
    .box(@val:300px){
        width:@val;
        height:@val;
    }
    .Bigbox{
        .box;
    }
    <!-- 可将参数默认值覆盖-->
    .Bigbox{
        .box(600px);
    }

##### 浏览器内核及兼容问题

+ Trident内核
    IE浏览器、猎豹浏览器、360浏览器等
+ Gecko内核
    Mozilla FireFox(火狐浏览器)
+ Presto内核
    Opera 欧鹏浏览器
+ Webkit内核
    Chrome谷歌浏览器、苹果的Safari浏览器

##### 常用在css3设置浏览器兼容
    
    .radios(@val:10px){
        -webkit-border-radius:@val;
        -moz-border-radius:@val;
        border-radius:@val;
    }
    .span{
        .radius;
    }

##### less嵌套

    ul{
        list-style:none;
        li{
            width:100px;
            height:30px;
            line-height:30px;
            text-align:center;
            float:left;
            a{
                text-decoration: none;
            }
            &:hover{
                background-color:green;
            }
        }
    }

##### 元素分类

+ 行内元素
    - 不独立成行,可以设置宽高
+ 块级元素
    - 独立成行,不可以设置宽高
+ 行内块元素
    - 不独立成行,可以设置宽高

##### 定位

+ 如果没有position属性，top，left，bottom，right属性不起作用
    - position: absolute;不占位；脱离文档流 -->
    - position: absolute;如果父级元素有position: relative那么参照这个元素，否则参照body
    - position: relative;相对定位，占位，定位参照原来的位置 -->
    - position: fixed;固定定位，参照浏览器窗口，不占位 -->

