exports.get = {
	"/api/v1/:model": "api.model.read",
	"/api/v1/:model/:_id": "api.model.read"
}

exports.post = { "/api/v1/:model": "api.model.create" }

exports.put = { "/api/v1/:model/:_id": "api.model.update" }

exports.delete = { "/api/v1/:model/:_id": "api.model.delete" }