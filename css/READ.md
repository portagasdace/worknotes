# CSS笔记

#### css声明方式

+ HTML选择器，即HTML标签，div，p，body......。
+ class选择器，在HTML标签中自定义的，css中定义其属性前边要加“.”。
+ id选择器，也在HTML标签中自定义的，但css中定义其属性前边要加“#”。

#### css盒模型

  想象一个盒子，它有：外边距（margin）、边框（border）、内边距（padding）、内容（content）四个属性；

#### css引入方式

+ 行内样式：写在style属性里
+ 内嵌式：嵌入式是将CSS样式集中写在网页的<head></head>标签对的<style></style>标签对中。
  <head>

  <style type="text/css">

  ...此处写CSS样式

  </style>

  </head>

+ 导入式：将一个独立的.css文件引入HTML文件中，导入式使用CSS规则引入外部CSS文件，<style>标记也是写在<head>标记中，使用的语法如下：

  <style type="text/css">

    @import"mystyle.css"; 此处要注意.css文件的路径

  </style>

+ 链接式：也是将一个.css文件引入到HTML文件中，但它与导入式不同的是链接式使用HTML规则引入外部CSS文件，它在网页的<head></head>标签对中使用<link>标记来引入外部样式表文件。

#### 垂直居中

    <div class="box"></div>
    <style type="text/css">
    .box{
      width: 500px;      
      height: 500px;
      margin: auto;  
      position: absolute;  
      top: 0; left: 0; bottom: 0; right: 0; 
    
      background-color: red;
    }
    </style>
    <style type="text/css">
    .box{
      width:100px;
      height:100px;
      position: absolute;  
      top: 50%; 
      left: 50%; 
      background-color: red;
      transform:translate(-50%,-50%)
    }
    </style>

#### 首航缩进

    text-indent: 2em;

#### 背景渐变

+ 从上到下  background: linear-gradient(0deg, #e0e0e0, #fff);

#### 字体渐变

    background: -webkit-linear-gradient(top,#003226,#51d8b6 50%, #003226);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: none !important;

#### input阴影

    box-shadow: inset 0 0 0.06rem #a7a7a7;
    border: 0.005rem solid #a7a7a7;

#### 更改placeholder默认字体大小和颜色

    <input type="text"  placeholder="输入用户名">
    <input type="text" class="text1" placeholder="输入密码">
    
    <style type="text/css">
        ::-webkit-input-placeholder{
            color: #000;
            font-size: 20px;
           line-height: 50px;
        }
        .text1::-webkit-input-placeholder{
            color: red;
            font-size: 20px;
            line-height: 50px;
        }
    </style>

#### 控制placeholder点击时候显示和隐藏
  
    placeholder=" 可对自身病情进行简单描述或填写其他疑问等" onfocus="this.placeholder=''" onblur="this.placeholder='可对自身病情进行简单描述或填写其他疑问等'
#### 取消 bootstrap input点击之会出现蓝色边框
    input{
        outline:none;
        box-shadow:none;
    }
    <!--要覆盖bootstrap里的样式  -->

#### 超出文本显示省略号

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:1;<!-- 控制行数 -->
    overflow: hidden;

#### ul 垂直居中div

    div class="box">
      <ul>
        <li>15</li>
        <li>13</li>
        <li>21</li>
        <li>45</li>
      </ul>
    </div> 

    <style type="text/css">
      .box{
        width: 100%;
        height: 80px;
        background-color: red;
      }
      ul{ display: table;
            margin-left: auto;
            margin-right: auto;
        }
        *{
          margin: 0px;
          padding: 0px;
        }
        li{
          list-style: none;
          float: left;
          margin-right: 20px;
        }
    </style>

#### 背景图片充满盒子

    <div class="box">
      
    </div>
    <style>
      .box{
        background-image: url("../img/pc.jpg");
        background-size:cover;
        background-repeat: no-repeat;
      }
    </style>

#### css hack分类

+ 属性前缀法(即类内部Hack)：IE6能识别下划线" _ " 和 " * "，IE7能识别星号" * "，但不能识别下划线"_"，IE6~IE10都认识"\9"，但firefox前述三个都不能认识。
+ 选择器前缀法(即选择器Hack)：IE6能识别*html .class，IE7能识别*+html .class{}或者*:first-child+html .class{}。
+ IE条件注释法(即HTML条件注释Hack)：针对所有IE(注：IE10+已经不再支持条件注释)： IE浏览器显示的内容，针对IE6及以下版本：。这类Hack不仅对CSS生效，对写在判断语句里面的所有代码都会生效。
