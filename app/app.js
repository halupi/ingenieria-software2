var express = require("express");
var app = express();

require("./modules/system/globals");
require( fn.MODULE("system/models") );

app.listen(8080);