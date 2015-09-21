"use strict";

var models = requireDir( module, fn.DIR("models") );

console.log("\nLoading models...");

for( let name in models ) {
	let index = name.charAt(0).toUpperCase() + name.slice(1);
	Model[index] = mongoose.model( models[name].model, models[name].schema );
	console.log("\t", index, "=>", "OK");
}

console.log("Models loaded successfully.");