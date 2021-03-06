var CourseController = function($scope, Restangular, $state) {
	$scope.course = {
		logistical: { 
			academic_activity: "Taller",
			modality: "Presencial",
			number_sessions: 0,
			number_hours: 0,
			vigency: {} 
		},
		academic: {}
	}

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

	$scope.totalHours = function() {
		return $scope.course.logistical.number_sessions * $scope.course.logistical.number_hours;
	}
}

angular.module("fciencias")
	.controller("CourseController", [
		"$scope", "Restangular", "$state", CourseController
	]);