app.controller('AppCtrl',($scope, $http,service)=> {

    service.getAllList().then((res)=> {
        $scope.data=res.data;
      },function (error){
        console.log(error, 'can not get data.');
    });;
    service.getAllFamile().then( (res)=> {
            $scope.famileData=res.data;
        },function (error){
            console.log(error, 'can not get data.');
    });;
    $scope.remove=(id,i)=>{
         $scope.data.splice(i,1);
         service.removeElement(id).then((res) => {
            },function (error){
            console.log(error, 'can not get data.');
        });;
    };
   
   
 }) 

 
