# CSS笔记

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

