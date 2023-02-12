/** packages */
const mongoose = require('mongoose');

const studentGroupSchema = new Schema({
	student_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'coll_student',
		required: true,
	},

	group_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'coll_group',
		required: true,
	},
});

module.exports = studentGroupSchema;
