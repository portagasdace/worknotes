# JQuery笔记

#### jquery引入

    <head>
    <script src="jquery.js"></script>
    </head>

#### jquery语法
      
基础语法是：$(selector).action()
美元符号定义 jQuery
选择符（selector）“查询”和“查找” HTML 元素
jQuery 的 action() 执行对元素的操作
示例
- $(this).hide() - 隐藏当前元素
- $("p").hide() - 隐藏所有段落
- $(".test").hide() - 隐藏所有 class="test" 的所有元素
- $("#test").hide() - 隐藏所有 id="test" 的元素

提示：jQuery 使用的语法是 XPath 与 CSS 选择器语法的组合。在本教程接下来的章节，您将学习到更多有关选择器的语法。

#### jquery事件

+ mouseenter(function)鼠标移入事件
+ .ready(function)文档加载完成时
+ mouseleave(function)鼠标移出事件
+ click(function)点击事件
+ dbclick(function)双击事件
+ .mouseover(function)鼠标悬停事件
+ .focus(function)获取焦点事件

#### jquery动画

+ .show(speed,callback)

显示可选的 speed 参数规定隐藏/显示的速度，可以取以下值："slow"、"fast" 或毫秒。可选的 callback 参数是隐藏或显示完成后所执行的函数名称。

+ .hide()隐藏
+ .toggle()隐藏隐藏
+ .sildeUp()上卷
+ .sildeDown()下拉
+ .sildeToggle()下拉上卷
+ .fadeIn()渐入
+ .fadeOut()渐出
+ .fadeToggle()渐入渐出
+ .fadeTo(speed,opacity,callback)渐出

fadeTo() 方法中必需的 opacity 参数将淡入淡出效果设置为给定的不透明度（值介于 0 与 1 之间）。

+ .animate({params},speed,callback);

params 参数定义形成动画的 CSS 属性

    - jQuery animate() - 操作多个属性(使用 paddingLeft 而不是 padding-left等)

        $("button").click(function(){
            $("div").animate({
                left:'250px',
                opacity:'0.5',
                height:'150px',
                width:'150px'
            });
        });

    - jQuery animate() - 使用相对值(需要在值的前面加上 += 或 -=)

        $("button").click(function(){
            $("div").animate({
                left:'250px',
                height:'+=150px',
                width:'+=150px'
            });
        });
    - jQuery animate() - 使用预定义的值(把属性的动画值设置为 "show"、"hide" 或 "toggle")

        $("button").click(function(){
            $("div").animate({
                height:'toggle'
            });
        });
    - jQuery animate() - 使用队列功能(jQuery 会创建包含这些方法调用的“内部”队列。然后逐一运行这些 animate 调用。)

        $("button").click(function(){
            var div=$("div");
            div.animate({height:'300px',opacity:'0.4'},"slow");
            div.animate({width:'300px',opacity:'0.8'},"slow");
            div.animate({height:'100px',opacity:'0.4'},"slow");
            div.animate({width:'100px',opacity:'0.8'},"slow");
        });
+ .stop()停止动画或效果，在它们完成之前

$(selector).stop(stopAll,goToEnd);

可选的 stopAll 参数规定是否应该清除动画队列。默认是 false，即仅停止活动的动画，允许任何排入队列的动画向后执行。
可选的 goToEnd 参数规定是否立即完成当前动画。默认是 false。

#### jQuery HTML

###### 获取

+ .text()获取文本内容
+ .html()返回所选元素的内容（包括 HTML 标记）
+ .val()表单字段的值

###### 设置

+ .text(function(i,origValue){}), .html(), .val()

括号里面可以使值也可以是函数

+ 设置属性 - attr()

 -  $("button").click(function(){
        $("#w3s").attr("href","http://www.w3school.com.cn/jquery");
    });

 -  设置多个属性

    $("button").click(function(){
        $("#w3s").attr({
            "href" : "http://www.w3school.com.cn/jquery",
            "title" : "W3School jQuery Tutorial"
      });
    });

 -  attr()里的回调函数

    $("button").click(function(){
        $("#w3s").attr("href", function(i,origValue){
            return origValue + "/jquery";
        });
    });

###### 添加

+ append() - 在被选元素的结尾插入内容
+ prepend() - 在被选元素的开头插入内容
+ after() - 在被选元素之后插入内容
+ before() - 在被选元素之前插入内容
+ 追加元素

    - 
    function appendText()
        {
        var txt1="<p>Text.</p>";               // 以 HTML 创建新元素
        var txt2=$("<p></p>").text("Text.");   // 以 jQuery 创建新元素
        var txt3=document.createElement("p");  // 以 DOM 创建新元素
        txt3.innerHTML="Text.";
        $("p").append(txt1,txt2,txt3);         // 追加新元素
        }

###### 删除

+ remove() - 删除被选元素（及其子元素）也可以过滤被删除的元素
+ empty() - 从被选元素中删除子元素

###### jQuery 操作 CSS

+ .addClass()向被选元素添加一个或多个类
+ .removeClass()从被选元素删除一个或多个类
+ .toggleClass()对被选元素进行添加/删除类的切换操作
+ .css() - 设置或返回样式属性

    -                                                                                                                                                      $("p").css({"background-color":"yellow","font-size":"200%"});

###### jQuery尺寸
+ width()宽度 
+ height()高度
+ innerWidth()宽度（包括内边距）
+ innerHeight()高度（包括内边距）
+ outerWidth()宽度（包括内边距和边框）
+ outerHeight()高度（包括内边距和边框）
+ $(window).width()浏览器窗口宽度
+ $(window).height()浏览器窗口高度
+ $(documen).width()html文档宽度
+ $(documen).height()html文档高度

#### jQuery遍历

###### jQuery向上祖先

+ parent()直接找到父级
+ parents()所有父级元素一级一级往上找
+ parentsUntil()方法返回介于两个给定元素之间的所有祖先元素。

    - $("span").parentsUntil("div");

###### jQuery向下遍历后代

+ children()方法返回被选元素的所有直接子元素。

    - 可以使用可选参数来过滤对子元素的搜索

        $(document).ready(function(){
          $("div").children("p.classname");
        });

+ find()方法返回被选元素的后代元素，一路向下直到最后一个后代,*代表所有。

###### 遍历同胞

+   siblings()方法返回被选元素的所有同胞元素。
+   next() 方法返回被选元素的下一个同胞元素(只返回一个)。
+   nextAll()方法返回被选元素往下同胞元素。
+   nextUntil()方法返回介于两个给定参数之间的所有跟随的同胞元素。

prev(), prevAll() 以及 prevUntil() 方法的工作方式与上面的方法类似，返回的是前面的同胞元素（在 DOM 树中沿着同胞元素向后遍历，而不是向前）。

+   prev()
+   prevAll()
+   prevUntil()

###### JQuery过滤

+ first()方法返回被选元素的首个元素
+ last()方法返回被选元素的最后一个元素
+ eq()方法返回被选元素中带有指定索引号的元素。
+ filter() 方法允许您规定一个标准。不匹配这个标准的元素会被从集合中删除，匹配的元素会被返回。
+ not()方法与filter() 方法做用相反

#### JQuery Ajax 

###### load()发法

+ load(URL,data,callback)URL 参数规定您希望加载的 URL,data 参数规定与请求一同发送的查询字符串键/值对集合,callback 参数是 load() 方法完成后所执行的函数名称

#### JQuery Ajax get()和post()发法

+ GET - 从指定的资源请求数据($.get(URL,data,callback))
+ POST - 向指定的资源提交要处理的数据($.post(URL,data,callback))

GET 基本上用于从服务器获得（取回）数据。注释：GET 方法可能返回缓存数据。
POST 也可用于从服务器获取数据。不过，POST 方法不会缓存数据，并且常用于连同请求一起发送数据。