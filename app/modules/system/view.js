module.exports = function(app) {
	app.set( "views", fn.DIR("views") );
	app.set( "view engine", "jade" );
} 