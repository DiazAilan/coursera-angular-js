'use strict';

(() => {
	angular.module('angularApp', [])

	.controller('mainCtrl', mainCtrl)

	.filter('length', LengthFilterFactory)
	.filter('evens', EvensFilterFactory)
	.filter('inverted', InvertedFilterFactory)

	mainCtrl.$inject = ['$scope',
						'$filter',
						'lengthFilter',
						'evensFilter',
						'invertedFilter'];

	function mainCtrl($scope, $filter, lengthFilter, evensFilter, invertedFilter) {
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

	function LengthFilterFactory() {
		return (input) => {
			return input.length;
		}
	}

	function EvensFilterFactory() {
		return (input) => {
			let changedInput = "";
			let i = 0;
			for(i; i < input.length; i+=2) {
				changedInput += input.substring(i,i+1);
			}
			return changedInput;
		}
	}

	function InvertedFilterFactory() {
		return (input) => {
			let changedInput = input.split("").reverse().join("");
			return changedInput;
		}
	}

})();