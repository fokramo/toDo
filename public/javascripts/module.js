var app = angular.module('myApp', ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "../htmls/todotable.html"
    })
    .when("/addTodo", {
        template : " <add-task data='famileData'></add-task>"
    })
});