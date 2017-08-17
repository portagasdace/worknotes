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

#### jquery方法

+ .css()改变css样式
+ .attr()改变属性或获取属性值

###### 操作节点

+ .index()获取节点索引
+ .addClass()添加节点
+ .removeClass()添加节点
+ .siblings()获取同级节点
+ .parent()获取父级节点
+ .find()获取子节点


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
<!-- 显示可选的 speed 参数规定隐藏/显示的速度，可以取以下值："slow"、"fast" 或毫秒。可选的 callback 参数是隐藏或显示完成后所执行的函数名称。 -->
+ .hide()隐藏
+ .toggle()隐藏隐藏
+ .sildeUp()上卷
+ .sildeDown()下拉
+ .sildeToggle()下拉上卷
+ .fadeIn()渐入
+ .fadeOut()渐出
+ .fadeToggle()渐入渐出
+ .fadeTo(speed,opacity,callback)渐出
<!-- fadeTo() 方法中必需的 opacity 参数将淡入淡出效果设置为给定的不透明度（值介于 0 与 1 之间）。 -->
+ .animate({params},speed,callback);
<!-- params 参数定义形成动画的 CSS 属性 -->
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
