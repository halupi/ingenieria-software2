exports.get = {
	"/": fn.renderView("layout/basic"),
	"/view/:partial": "view.partial"
}