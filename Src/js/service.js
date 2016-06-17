app.service('po_Service',['$http', function($http){
	this.getItemData= function(){
        var request=$http({     
                    method: 'GET',  
                    url: "dummy.json",
                    headers: {  'Authorization': 'Basic dHJ1Y2UtcHJpY2luZzpUcnVjZVByaWNpbmdAMTIz','Content-Type':'application/json' },     
                });
        return request.then(handleSuccess).catch(handleFailure);
    }
    this.getVendorName= function(){
            var request=$http({
                        method: 'GET',
                        url: 'http://128.199.125.124:5000/vendors_all_json',
                        headers:{ 'Authorization': 'Basic dHJ1Y2UtcHJpY2luZzpUcnVjZVByaWNpbmdAMTIz','Content-Type':'application/json'}
                    });
            return request.then(handleSuccess).catch(handleFailure);
    }
    this.addItem= function(data){
        var dataSend=data;        
            var request=$http({  
                        method: 'POST',  
                        url: "http://128.199.125.124:5000/purchase_order_generate/",
                        headers: {  'Authorization': 'Basic dHJ1Y2UtcHJpY2luZzpUcnVjZVByaWNpbmdAMTIz', 'Content-Type': 'application/json' },   
                        data: dataSend  
                    });
                    return request.then(handleSuccess).catch(handleFailure);
    }
    function handleSuccess(response){
            data={
                'response':response,
                'error_occured':false
            };
            console.log(data);
            return (data);
            };

    function handleFailure(response){
            console.log(response.status);
            data={
                    'response':response,
                    'error_occured':true
            } ; 
            console.log(data);
            return(data);
            };

    


}]);
        