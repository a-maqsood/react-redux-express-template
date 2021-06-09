var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var apiRoutes = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.use(express.static(path.join(__dirname, '../frontend/public')));

app.use('/api', apiRoutes);

app.all('*', (req, res) => {
  res.sendfile(path.resolve(__dirname, '../frontend/build/index.html'))
})

module.exports = app;
