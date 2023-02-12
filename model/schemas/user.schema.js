/** packages */
const mongoose = require('mongoose');
const validator = require('mongoose-unique-validator');

const userSchema = new Schema({
	name: {
		type: 'Number',
		required: true,
	},
	lastname: {
		type: 'Number',
		required: true,
	},
	username: {
		type: 'Number',
		required: true,
		unique: true,
	},
	password: {
		type: 'String',
		required: true,
	},
	role: {
		type: 'Number',
		required: true,
	},
});

userSchema.plugin(validator);
module.exports = userSchema;
