angular.module("fciencias")
	.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider, $rootScope) {
		$urlRouterProvider.otherwise("/");

		if( typeof states !== "undefined" )
			for( var state in states )
				$stateProvider.state(state, states[state]);
	}]);