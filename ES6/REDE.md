# ES6语法

#### 定义变量

    let num =10
    const num1 =10;

#### 块级作用域

    if(true){
      let num = 10;
    }
    console.log(num);
    for(let i = 0;i<10;i++){
    }
    console.log(i);

#### 获取索引

    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
    <script>
        var li=document.querySelectorAll("li")
        for (let i=0;i<li.length;i++){
            li[i].onclick=function(){
                alert(i)
            }
        }
    </script>

#### 数组解构赋值

    let [num1,num2,num3]=[10,"hahha",true]

#### 数组解构赋值互换
    
    <!-- 分号一定要有 -->
    let [num1,num2]=[10,"hahha"];
    [num1,num2]=[num2,num1];

#### 对象解构赋值

    let {name,age}={name:"小名",age:30};

#### 函数返回数组解构赋值

    function fun(){
        var arr=["路飞","娜美"]
        return arr
    }
    let [a,b]=fun();
    // var a=fun()[0]
    // var b=fun()[1]
    console.log(a)
    console.log(b)

#### 函数返回对象解构赋值

    function fun(){
        var arr=["路飞","娜美"]
        return arr
    }
    let [a,b]=fun();
    // var a=fun()[0]
    // var b=fun()[1]
    console.log(a)
    console.log(b)
