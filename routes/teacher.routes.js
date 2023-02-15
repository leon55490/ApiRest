module.exports = (app) => {
	console.log('Loading routes of teacher');
	app.get('/teacher', (req, res, next) => {
		controller.getAll(req, res, next);
	});

	app.get('/teacher/bydocument/:document', (req, res, next) => {
		controller.getByDocument(req, res, next);
	});

	app.put('/teacher', (req, res, next) => {
		controller.updateteacher(req, res, next);
	});

	const controller = require('../controller/logic/teacher.controller');

	app.post('/teacher', (req, res, next) => {
		controller.createTeacher(req, res, next);
	});

	app.delete('/teacher', (req, res, next) => {
		controller.deleteteacher(req, res, next);
	});
};
