var app = angular.module('MyApp', [])

app.filter('date_filter',function(){
	return function(date){
		var input_date=new Date(date);
		var ist_date=new Date(input_date.getTime()+330*60000);			
		return ist_date;	
	}
});
app.controller('MyController',function(){

});


        