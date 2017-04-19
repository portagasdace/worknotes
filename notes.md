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

<input type="checkbox" value="足球">
<label for="">最求</label>
<button>点击获取</button>
<script src="../js/jquery.min.js"></script>
<script>
    $("button").click(function(){
        var check=$("input").is(":checked")
        console.log(check)
        if(check==true){
            var text=$("input").next().text()
            console.log(text)
        }
    })  
</script>

#### 暂无笔记