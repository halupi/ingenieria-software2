var CourseController = function($scope, Restangular, $state) {
	$scope.course = {};
	$scope.courses = [];

	$scope.fetch = function() {
		Restangular.one("api", "v1")
			.customGET("course")
			.then(function(response) {
				$scope.courses = response;
			}, function(error) {
				alert("error");
			});
	}

	$scope.save = function() {
		Restangular.one("api", "v1")
			.one("course")
			.customPOST( $scope.course )
			.then(function(response) {
				$state.go("course.list");
			}, function(error) {
				alert("ERROR")
			});
	}
}

angular.module("fciencias")
	.controller("CourseController", [
		"$scope", "Restangular", "$state", CourseController
	]);