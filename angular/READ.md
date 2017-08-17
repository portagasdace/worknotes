# Angular 笔记

## angular 入门

### mvc模型视图控制器

    <body ng-app="">
        <!-- 控制器 -->
        <div ng-controller="mystrl">
            <!-- h1标签视图 {{text}}模型-->
            <h1>{{text}}</h1>
        </div>
        <script src="script/angular.js"></script>
        <script>
             var myapp=angular.module("app",[]);
             myapp.controller("myctrl",function($scope){
                <
                $scope.text="hello angular";
              }) 
        </script>
    </body>

###### 用 ng-app指令管理下边的代码

    <body ng-app=""></body>
    <script src="script/angular.js"></script>

###### 用 ng-model指令双向绑定数据

    <input type="text" ng-model="text">
    <h1>{{text}}</h1>
    <script src="script/angular.js"></script>

###### 控制器

    <body ng-app="">
      <div ng-controller="mystrl">
          <h1>{{text}}</h1>
      </div>
      <script src="script/angular.js"></script>
      <script>
           var myapp=angular.module("app",[]);
           myapp.controller("myctrl",function($scope){
              $scope.text="hello angular";
            }) 
      </script>
    </body>

###### directive创建标签
    
    <body ng-app="mymodule">
      <hello></hello>
      <script src="script/angular.js"></script>
      <script>
        var mymodule=angular.module("mymodule",[])
        mymodule.directive("hello",function(){
          return {
            restrict:"E",
            template:"<div>hello angular</div>",
            replace:true
          }
        })
      </script>
    </body>     

###### 绑定多个数据

    <body ng-app="">
      <div ng-controller="mystrl">
          <h1>{{Hero.name}}</h1>
          <p>年龄：{{Hero.age}}</p>
          <p>性别：{{Hero.sex}}</p>
          <p>成绩：{{Hero.number}}</p>
      </div>
      <script src="script/angular.js"></script>
      <script>
           var myapp=angular.module("app",[]);
           myapp.controller("myctrl",function($scope){
              $scope.Hero={
                name:"路飞",
                age:23,
                sex:"男",
                number:100
              }
            }) 
      </script>
    </body>

###### 循环便利指令

    <ul ng-controller="myctrl">
      <li ng-repeat="hero in heros">{{hero}}</li>
    </ul>
    <script src="script/angular.js"></script>
    <script>
         var myapp=angular.module("app",[]);
         myapp.controller("myctrl",function($scope){
            $scope.heros=["钢铁侠","路飞","山治","娜美","索隆"]
          }) 
    </script>

###### 请求数据$http

    <div ng-controller="mytrl">
      <h1>{{data}}</h1>
    </div>
    <script src="script/angular.js"></script>
    <script>
      var myapp=angular.module("app",[]); 
      myapp.controller("mytrl",function($scope,$http){
        $http({
          method:"get",
          url:"data/data.txt"
        }).success(function(data){
          $scope.data=data;
        })
      })
    </script>

###### 事件ng-click

    <div ng-controller="mytrl">
      <button ng-click="add()">+</button>
      <span>{{number}}</span>
      <button ng-click="sub()">-</button>
    </div>
    <script src="script/angular.js"></script>
    <script>
      var myapp=angular.module("app",[]);
      myapp.controller("mytrl",function($scope){
        $scope.number=0
        $scope.add=function(){
          ++$scope.number
        }
        $scope.sub=function(){
          if($scope.number>0){
            --$scope.number
          }          
        }
      })