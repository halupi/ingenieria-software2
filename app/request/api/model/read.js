module.exports = function(request, response) {
	var model = request.params.model;
	var _id = request.params._id;

	model = model.charAt(0).toUpperCase() + model.slice(1);

	if( typeof Model[model] === "undefined" ) return response.status(400).json({ error: true, type: "model_not_found" });

	var q = typeof _id !== "undefined" ? Model[model].findOne({ _id }) : Model[model].find();

	q.exec((err, documents) => {
		if( err )
			response.status(400).json({ error: true, type: "cant_read" });
		else
			response.status(200).json(documents);
	});
}