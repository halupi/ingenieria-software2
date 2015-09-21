var express = require("express");
var app = express();

require("./modules/system/globals");
require( fn.MODULE("system/database") );
require( fn.MODULE("system/models") );
require( fn.MODULE("system/router") )( app );

app.listen( fn.env.server.port );

console.log(`\nRunning server on port ${ fn.env.server.port }.`)