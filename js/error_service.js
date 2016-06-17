app.service('error_service',['$timeout', function ($timeout) {
	this.get_request= function(response){
                    itemData = response.data.payload;
                    if(response.status/100!=success_value1 && response.status/100!=success_value2 && response.status!=null){
                        $scope.show_error=true;
                        $scope.error=response.data;
                        document.getElementById("err").innerHTML = "<h3>unable to get data try again by reloading</h3>";  

                    }
                };

    this.post_request= function(data){
                    console.log(data);
                    if(data.status/100!=2 && data.status!=null && data.status/100!=3){
                        $scope.show_error=true;
                        $scope.error=data.data;
                        document.getElementById("err").innerHTML = "Your Data was not submitted, Please try again";
                        $timeout(function(){$scope.show_error=false;
                            console.log("timeout");
                        },5000);
                        
                    }
                    else{
                        $scope.inserted_po.push(add_po);
                        $scope.show_error=false;
                    }
                };
}]);


/*
app.service('error_service',['$timeout', function ($timeout) {
	this.get_request= function(response){
                    $scope.itemData = response.data.payload;
                    if(response.status/100!=success_value1 && response.status/100!=success_value2 && response.status!=null){
                        $scope.show_error=true;
                        $scope.error=response.data;
                        document.getElementById("err").innerHTML = "<h3>unable to get data try again by reloading</h3>";  

                    }
                };

    this.post_request= function(data){
                    console.log(data);
                    if(data.status/100!=2 && data.status!=null && data.status/100!=3){
                        $scope.show_error=true;
                        $scope.error=data.data;
                        document.getElementById("err").innerHTML = "Your Data was not submitted, Please try again";
                        $timeout(function(){$scope.show_error=false;
                            console.log("timeout");
                        },5000);
                        
                    }
                    else{
                        $scope.inserted_po.push(add_po);
                        $scope.show_error=false;
                    }
                };
}]);*/