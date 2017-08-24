'use strict';

(() => {
	angular.module('angularApp', [])

	.controller('mainCtrl', mainCtrl);

	mainCtrl.$inject = ['$scope', '$filter'];

	function mainCtrl($scope, $filter) {
		$scope.name = '';
		$scope.totalValue = 0;

		$scope.displayNumeric = () => {
			const totalNameValue = calculateNumericForString($scope.name);
			$scope.totalValue = totalNameValue;
		};

		$scope.upper = () => {
			const upCase = $filter('uppercase');
			$scope.name = upCase($scope.name);
		}

		function calculateNumericForString(string) {
			let totalStringValue = 0;
			let i = 0;
			for (i; i < string.length; i++) {
				totalStringValue += string.charCodeAt(i);
			}

			return totalStringValue;
		}

	};

})();