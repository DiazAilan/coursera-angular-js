'use strict';

(() => {
	angular.module('NarrowItDownApp', [])

	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', foundItems)

	NarrowItDownController.$inject = ['MenuSearchService'];
	MenuSearchService.$inject = ['$http']

	function NarrowItDownController(MenuSearchService) {
		let lastSearch = "";
		this.getItems = (term) => {
			if (lastSearch === term) {
				return "No search is needed";
			} else {
				this.loading = true;
				MenuSearchService.getMatchedMenuItems(term).then((response) => {
					this.found = response;
					this.loading = false;
					lastSearch = term;
				});
			}
		}

		this.removeFoundItem = (event) => {
			this.found.splice(event.index, 1)
		}
	}

	function MenuSearchService($http) {

		const URL = 'https://davids-restaurant.herokuapp.com/menu_items.json'

		this.getMatchedMenuItems = (searchTerm) => {

			const response = $http.get(URL).then((result) => {
				const foundItems = result.data.menu_items.filter((item) => {
					return item.description.includes(searchTerm)
				});
				return foundItems;
			})

			return response;
		}
	}

	function foundItems() {
		return {
		    scope: {
		      items: '<',
		      onRemove: '&'
		    },
		    templateUrl: 'foundItems.html'
	  	};
	}

})();