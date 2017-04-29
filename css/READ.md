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

#### 取消 bootstrap input点击之会出现蓝色边框
    input{
        outline:none;
        box-shadow:none;
    }
    <!--要覆盖bootstrap里的样式  -->

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

