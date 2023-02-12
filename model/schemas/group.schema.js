/** packages */
const mongoose = require('mongoose');

const groupSchema = new Schema({
	course_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'coll_course',
		required: true,
	},

	course_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'coll_teacher',
		required: true,
	},
	course_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'coll_period',
		required: true,
	},

	number: {
		type: 'Number',
		required: true,
	},
});

module.exports = groupSchema;
