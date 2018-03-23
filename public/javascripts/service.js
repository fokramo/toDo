function service($http){
	function getAllList(){
		return  $http({
              method: 'get', 
              url: '/todo'
    })
			}	
	function getAllFamile(){
        return $http({
            method: 'get', 
            url: '/todos'
        })
    }
	function removeElement(id){
		return $http({
            method: 'delete', 
            url: '/todo/'+ id ,
            data: id,
         })
			}
	function addTodo(data){
         return  $http({
                method: 'post', 
                url: '/todo',
                data: data,
            })
	  }
			return {
				getAllList:getAllList,
				getAllFamile:getAllFamile,
				removeElement:removeElement,
				addTodo:addTodo
			}
	}

app.factory("service",service);