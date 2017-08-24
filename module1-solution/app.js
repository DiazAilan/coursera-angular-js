'use strict';

(() => {
	angular.module('LunchCheck', [])

	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {

		$scope.foodString = "";

		$scope.checkFood = (stringList) => {
			const MAX_NUMBER = 3;
			const FOOD_AMOUNT = numberFromStringList(stringList);
			
			if(!$scope.foodString) {
				$scope.message = "Please enter data first";
				$scope.textAreaClass = "input-error";
			} else if(FOOD_AMOUNT > MAX_NUMBER) {
				$scope.message = "Too much!";
				$scope.textAreaClass = "input-confirmation";

			} else {
				$scope.message = "Enjoy!";
				$scope.textAreaClass = "input-confirmation";

			}
			$scope.messageDisplay = true;
			
		}

		function numberFromStringList(stringList) {
			const arrayFromStringList = stringList.split(',');
			return arrayFromStringList.length;
		}
		
	};

})();