module.exports = (app) => {
	console.log('Loading routes of student');
	app.get('/student', (req, res, next) => {
		controller.getAll(req, res, next);
	});

	app.get('/student/bycode/:code', (req, res, next) => {
		controller.getByCode(req, res, next);
	});

	app.put('/student', (req, res, next) => {
		controller.updateStudent(req, res, next);
	});

	const controller = require('../controller/logic/student.controller');

	app.post('/student', (req, res, next) => {
		controller.createStudent(req, res, next);
	});

	app.delete('/student', (req, res, next) => {
		controller.deleteStudent(req, res, next);
	});
};
