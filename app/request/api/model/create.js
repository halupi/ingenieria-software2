module.exports = function(request, response) {
	var model = request.params.model;
	model = model.charAt(0).toUpperCase() + model.slice(1);

	var data = request.body;

	if( typeof Model[model] === "undefined" ) return response.status(400).json({ error: true, type: "model_not_found" });

	var instance = new Model[model](data);
	instance.save( err => {
		if( err )
			response.status(400).json({ error: true, type: "cant_create" });
		else
			response.status(200).json({ ok: true, _id: instance._id });
	});
}