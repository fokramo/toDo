app.directive('addTask', function($http,service) {
 return {
   restrict: "E",
   templateUrl:'../htmls/addtodo.html',   
   scope:{
			data:'='
		},
        link:function(scope,el,at){
        var d = new Date();
        var date = d.getDay()+"-"+d.getMonth() +"-"+d.getFullYear() ;
        scope.add = function(){
            scope.task={
                description:scope.description,
                date:date,
                famileMember:scope.selected
            }
            service.addTodo(scope.task).then((res) => {
                     scope.description="";
                     window.location.reload();

                },function (error){
                console.log(error, 'can not get data.');
            });
         }
    }
 }
});