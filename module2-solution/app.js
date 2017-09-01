'use strict';

(() => {
	angular.module('ShoppingListCheckOff', [])

	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

	function ToBuyController(ShoppingListCheckOffService) {
		this.list = ShoppingListCheckOffService.getToBuyList();
		this.buyItem = (item, index) => {
			ShoppingListCheckOffService.buyItem(item, index)
		};
	};

	function AlreadyBoughtController(ShoppingListCheckOffService) {
		this.list = ShoppingListCheckOffService.getBoughtList();
	};

	function ShoppingListCheckOffService() {

		const toBuyList = [
			{
				name: "cookies",
				quantity: 10
			},{
				name: "sandwiches",
				quantity: 6
			},{
				name: "milks",
				quantity: 3
			},{
				name: "sodas",
				quantity: 7
			},{
				name: "teas",
				quantity: 4
			},
		];
		const boughtList = [];

		this.getToBuyList = () => {
			return toBuyList;
		}

		this.getBoughtList = () => {
			return boughtList;
		}

		this.buyItem = (item, index) => {
			toBuyList.splice(index, 1);
			boughtList.push(item);
		}

		return this;
	};

})();