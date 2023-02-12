//? Packages
const mongoose = require('mongoose');
const config = require('config');

const mongodbInfo = config.get('db-connections.mongdodb');

// user: acad_rest_api_user
// password: mKuWdj7JCeeO9z5j
const connStr =
	'mongodb+srv://${mongodbInfo.user}:${mongodbInfo.password}@${mongodbInfo.host}/${mongodbInfo.dbname}?retryWrites=true&w=majority';

module.exports = () => {
	mongoose.connect(connStr);

	mongoose.connect.on('connected', () => {
		console.log('mongodb server connected!');
	});

	mongoose.connect.on('disconnected', () => {
		console.log('mongodb server disconnected!');
	});

	mongoose.connect.on('error', () => {
		console.log('mongodb server connection error!');
	});

	mongoose.connection.on('SIGINT', () => {
		mongoose.connection.close(() => {
			console.log('mongodb server shutting down!');
		});
	});
};
