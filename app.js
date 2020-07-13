var express = require('express');
var app = express();
var db = require('./db');
var UserController = require('./route/UserController');  // 추가
app.use('/users', UserController);  // 추가

module.exports = app;