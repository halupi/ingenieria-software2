module.exports = function(request, response) {
	var partial = request.params.partial;
	partial = partial.replace(/([.])/g, "/");

	response.render( partial );
}