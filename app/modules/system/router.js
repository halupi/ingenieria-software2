"use strict";

var express = require("express");
var Router = express.Router();

module.exports = function(app) {
	var routes = requireDir( module, fn.DIR("routes") );

	console.log("\nLoading routes...");

	for( let file in routes ) {
		console.log(`\tProcessing ${file}.js`);
		let total = 0, failed = 0;

		for( let method in routes[file] ) {
			for( let path in routes[file][method] ) {
				total++;
				let request = routes[file][method][path];

				if( typeof request === "string" )
					request = request.replace(/([.])/g, "/");
				else {
					failed++;
					console.log(`\t\t${path} => Failed at parsing.`);
					continue;
				}

				try {
					let instance = require( fn.REQUEST(request) );
					let handler = (request, response) => instance(request, response);

					Router[method](path, handler);
				} catch(err) {
					failed++;
					console.log(`\t\t${path} => Failed at loading request.`)
				}
			}
		}

		console.log(`\t\t${total - failed} routes loaded out of ${total}`)
	}

	app.use("/", Router);
}