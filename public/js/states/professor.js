var states = {
	"index": {
		url: "/",
		templateUrl: "/view/index.index"
	},

	"course": {
		abstract: true,
		url: "/course",
		template: "<div ui-view></div>"
	},

	"course.create": {
		url: "/create",
		templateUrl: "/view/course.create",
		controller: "CourseController",
		resolve: {
			controller: function($ocLazyLoad) { return $ocLazyLoad.load("/js/controllers/CourseController.js") }
		}
	},

	"course.list": {
		url: "/list",
		templateUrl: "/view/course.list",
		controller: "CourseController",
		resolve: {
			controller: function($ocLazyLoad) { return $ocLazyLoad.load("/js/controllers/CourseController.js") }
		}
	}
}