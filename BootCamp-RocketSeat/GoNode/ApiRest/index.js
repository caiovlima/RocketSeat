require('dotenv').config();

const app = require('express')();
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const bodyParser = require('body-parser');
const Raven = require('./app/services/sentry.js');

const dbConfig = require('./config/database');

mongoose.connect(dbConfig.url);

requireDir(dbConfig.modelsPath);
app.use(bodyParser.json());

//raven request - before routes
app.use(Raven.requestHandler());

//routes
app.use('/api', require('./app/routes'));

//raven detect error - after routes
app.use(Raven.errorHandler());

app.listen(3000);

