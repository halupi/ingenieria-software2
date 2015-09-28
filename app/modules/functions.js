exports.DOCUMENT_ROOT = `${ __dirname }/..`;

exports.MODULE = file => `${ exports.DOCUMENT_ROOT }/modules/${ file }`;

exports.SCHEMA = file => `${ exports.DOCUMENT_ROOT }/schemas/${ file }`;

exports.REQUEST = file => `${ exports.DOCUMENT_ROOT }/request/${ file }`;

exports.DIR = dir => `${ exports.DOCUMENT_ROOT }/${ dir }`;

exports.renderView = view => (request, response) => response.render(view);

exports.env = {
	server: { port: 8081 }, 
	mongo: { host: "localhost", port: 27017, name: "fciencias" } 
}