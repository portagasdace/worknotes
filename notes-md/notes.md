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

