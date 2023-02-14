/** packages */
const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');

/** app configuration */
const app = express();
const port = config.get('server-port');
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: true });

const ipFn = require('./middleware/getIpAddress');
app.use('*', ipFn);
app.use(jsonParser);
app.use(urlEncodedParser);

/** Methods */
app.get('/', (req, res, next) => {
	res.send('Welcome to academic rest api');
});

app.get('/student', (req, res, next) => {
	controller.getAll(req, res, next);
});

const studentRoutes = require('./routes/student.routes');
studentRoutes(app);

app.listen(port, () => {
	console.log('server is running on port');
});
