"use strict";

var express = require("express");
var Router = express.Router();

module.exports = function(app) {
	var routes = requireDir( module, fn.DIR("routes") );

	console.log("\nLoading routes...");

	for( let file in routes ) {
		console.log(`\n\tProcessing ${file}.js`);
		let total = 0, failed = 0;

		for( let method in routes[file] ) {
			for( let path in routes[file][method] ) {
				total++;
				let request = routes[file][method][path];

				if( typeof request === "string" )
					request = request.replace(/([.])/g, "/");
				else if( typeof request !== "function" ){
					failed++;
					console.log(`\t\t${path} => Failed at parsing.`);
					continue;
				}

				try {
					let instance = typeof request === "string" ? require( fn.REQUEST(request) ) : request;
					let handler = (request, response) => instance(request, response);

					Router[method](path, handler);
				} catch(err) {
					failed++;
					//console.log(err);
					console.log(`\t\t${method.toUpperCase()} ${path} => Failed at loading request.`)
				}
			}
		}

		console.log(`\t\t${total - failed} routes loaded out of ${total}`)
	}

	app.use("/", Router);
}