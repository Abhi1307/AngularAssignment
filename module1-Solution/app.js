(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('DishController', MessageGenerator);

MessageGenerator.$inject = ['$scope'];

function MessageGenerator($scope){
	$scope.dishes = "";
	$scope.message = "";
	$scope.color = "";
	$scope.bSize = "0px";
	$scope.CheckDishes = function(){
		var dishCount = DishCount($scope.dishes);
		$scope.color = "green";
		$scope.bSize = "1px";
		if(dishCount == 0){
			$scope.color = "red";
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
		var dish = dishes.split(",");
		var numOfDishes = 0;
		for (var i = 0; i < dish.length; i++) {
			if(dish[i] != "" && dish[i] !=" "){
				numOfDishes++;
			}
		}
		return numOfDishes;
		}
};

})();
