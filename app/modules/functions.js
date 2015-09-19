exports.DOCUMENT_ROOT = `${ __dirname }/..`;

exports.MODULE = file => `${ exports.DOCUMENT_ROOT }/modules/${ file }`;

exports.SCHEMA = file => `${ exports.DOCUMENT_ROOT }/schemas/${ file }`;

exports.DIR = dir => `${ exports.DOCUMENT_ROOT }/${ dir }`;