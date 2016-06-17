var app = angular.module('myApp', ['angular-loading-bar']);
 app.controller('myCtrl2',['$scope','po_Service','$timeout', function($scope, po_Service, $timeout) {
    
    $scope.show_po=false;
    $scope.po={};
    success_value1=2;
    success_value2=3;
    error_value1=4;
    error_value2=5;
    $scope.isProcessing=true;

    $scope.show_error=false;
    
    $scope.date={
                prevDate: new Date()
            };
            $scope.date.prevDate.setDate($scope.date.prevDate.getDate()-1);
                month = $scope.date.prevDate.getMonth();
                month++;
                day = $scope.date.prevDate.getDate();

            po_Service.getItemData().then(function(response){       //item data get request
                    $scope.itemData = response.response.data.payload;
                    if(response.error_occured==true){
                        $scope.show_error=true;
                        document.getElementById("err").innerHTML = "<h3>Data not received, Please try again</h3>";
                    }
                    
                });
                $scope.source_location= ["Sangamner", "Dadar","Nashik", "Kurla", "Sakinaka", "Vashi"];
                $scope.destination_location= ["Sakinaka", "Dighe", "Vashi","Banglore"];
                $scope.po.source_location="Sakinaka";
                
                po_Service.getVendorName().then(function(response){     //vendor names get request
                    $scope.vendor_data=response.response.data.payload;
                    if(response.error_occured==true){
                        $scope.show_error=true;
                        document.getElementById("err").innerHTML = "<h3>Data not received, Please try again</h3>";
                    }
                    
                });

            
                  
            $scope.inserted_po=[];
            $scope.addItem = function(insertedItem,date) {
                selectedMonth= date.getMonth();
                selectedMonth++;
                selectedDay= date.getDate();
                selectedYear= date.getFullYear();
                payload = [{
                    'itemName':insertedItem.itemName.name,
                    'itemUnit':insertedItem.itemName.unit_name,
                    'price': insertedItem.price,
                    'quantity_required':insertedItem.quantity_required,
                    'Date': selectedMonth+"/"+selectedDay+"/"+selectedYear,
                    'source_location': insertedItem.source_location,
                    'destination_location': insertedItem.destination_location,
                    'vendor_name': insertedItem.vendor,
                 }];
                 add_po = {
                    'itemName':insertedItem.itemName.name,
                    'itemUnit':insertedItem.itemName.unit_name,                 //to be displayed in table after clicking on save button
                    'price': insertedItem.price,
                    'quantity_required':insertedItem.quantity_required,
                    'date': selectedMonth+"/"+selectedDay+"/"+selectedYear,
                    'source_location': insertedItem.source_location,
                    'destination_location': insertedItem.destination_location,
                    'vendor_name': insertedItem.vendor,
                 };
                 
                 $scope.po={};
                 var dataSend = {'result': payload};
                 po_Service.addItem(dataSend)       //posting data post request
                .then( function(response){
                    console.log(response);
                    if(response.error_occured==true){
                        $scope.show_error=true;
                        $scope.error=data.data;
                        document.getElementById("err").innerHTML = "<h3>Your Data was not submitted, Please try again</h3>";
                        $timeout(function(){$scope.show_error=false;
                            console.log("timeout");
                        },5000);
                        
                    }
                    else{
                        $scope.inserted_po.push(add_po);
                        $scope.show_error=false;
                    }
                });

            }


            
        }]);
