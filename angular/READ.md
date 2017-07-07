# Angular 笔记

## angular 入门

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
