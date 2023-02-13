/** packages */
const mongoose = require('mongoose');
const validator = require('mongoose-unique-validator');

const studentSchema = new mongoose.Schema({
	code: {
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
	career: {
		type: 'String',
		required: true,
	},
});

studentSchema.plugin(validator);
module.exports = studentSchema;
