var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

module.exports = function(app) {
	app.use( bodyParser.json() );
	app.use( methodOverride() );
	
	app.use( express.static(fn.DIR("../public")) );
}