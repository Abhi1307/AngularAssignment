(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('DishController', MessageGenerator);

MessageGenerator.$inject = ['$scope'];

function MessageGenerator($scope){
	$scope.dishes = "";
	$scope.message = "";
	$scope.CheckDishes = function(){
		var dishCount = DishCount($scope.dishes);
		if(dishCount == 0){
		 $scope.message = "Please enter data first";
		}else if(dishCount <= 3){
			$scope.message = "Enjoy!";
		} else {
			$scope.message = "Too much!";
		}
	};
};

function DishCount(dishes){
	if(dishes == ""){
		return 0;
	} else{
	return dishes.split(",").length;
	}
};

})();
