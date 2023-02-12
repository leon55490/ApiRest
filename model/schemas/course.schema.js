/** packages */
const mongoose = require('mongoose');

const courseSchema = new Schema({
	code: {
		type: 'Number',
		required: true,
	},
	name: {
		type: 'Number',
		required: true,
	},
});

module.exports = courseSchema;
