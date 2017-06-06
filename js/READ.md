# JS笔记

#### 将 input(file) 文件选中的文件上传到页面上

    <input id="file_upload" type="file" />
    <img id="preview" style="height:130px;width:117px;border-width:0px;"/>

    <script src="jquery.min.js"></script>
    <script>
      $(function () {
          $("#file_upload").change(function () {
              var $file = $(this);
              var fileObj = $file[0];
              var windowURL = window.URL || window.webkitURL;
              var dataURL;
              var $img = $("#preview");
              if (fileObj && fileObj.files && fileObj.files[0]) {
                  dataURL = windowURL.createObjectURL(fileObj.files[0]);
                  $img.attr('src', dataURL);
              } else {
                  dataURL = $file.val();
                  var imgObj = document.getElementById("preview");
                  // 两个坑:
                  // 1、在设置filter属性时，元素必须已经存在在DOM树中，
                  动态创建的Node，也需要在设置属性前加入到DOM中，先设置属性在加入，无效；
                  // 2、src属性需要像下面的方式添加，上面的两种方式添加，无效；
                  imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
                  imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;
              }
          });
      });
    </script> 

#### 未勾选input屏蔽按钮勾选可以点击按钮
    <input name="checkbox"  type="checkbox" value="0">
    <input name="checkbox"  type="checkbox" value="1">
    <button class="biaoji btn btn-warning">标记为已缴费</button>

    $(".btn-warning").attr("disabled","disabled")
    $("input").change(function(){
            var check=$("input[type='checkbox']").is(":checked")
            console.log(check)
            if(check==true){
                $(".btn-warning").attr("disabled",false)
            }else{
                $(".btn-warning").attr("disabled","disabled")
            }   
    }) 

#### 判断盒子里是否有标签

    if($("div.wei-name:has(span)").length){
    
    }

    




