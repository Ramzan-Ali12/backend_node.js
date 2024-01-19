const express = require('express');
require('../middleware/logger')();
const { dbError } = require('../middleware/error');

const { pms } = require('../routes');

const app = express.Router();

app.use(express.urlencoded({ extended: true}));
app.use(express.json({ limit: '100mb' }));
app.use(express.static('public'));

app.use('/api/', pms);

app.use(dbError);

module.exports = app;
