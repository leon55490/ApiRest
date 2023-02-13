/** packages */
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
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
