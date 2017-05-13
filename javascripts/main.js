var app = angular.module("AnimalApp", []);

app.controller("ListCtrl", ($scope) => {
	$scope.animalList = [{animal: "cats"}, {animal: "giraffes"}, {animal: "screaming goats"}, {animal: "tarsier"}];
	$scope.showListView = true;
	$scope.showAnimals = () => {
		$scope.showListView = false;
	};
});
