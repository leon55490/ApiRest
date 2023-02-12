/** packages */
const mongoose = require('mongoose');
const validator = require('mongoose-unique-validator');

const teacherSchema = new Schema({
	document: {
		type: 'Number',
		required: true,
		unique: true,
	},
	name: {
		type: 'Number',
		required: true,
	},
	lastname: {
		type: 'Number',
		required: true,
	},
	email: {
		type: 'Number',
		required: true,
		unique: true,
	},
	phone: {
		type: 'String',
		required: true,
	},
	office: {
		type: 'String',
		required: true,
	},
	department: {
		type: 'String',
		required: true,
	},
});

teacherSchema.plugin(validator);
module.exports = teacherSchema;
