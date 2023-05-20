var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var lojasRouter = require('./routes/lojas');
var usuariosRouter = require('./routes/usuario');
var produtosRouter = require('./routes/produtos');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/lojas', lojasRouter);
app.use('/usuario', usuariosRouter);
app.use('/produto', produtosRouter);


module.exports = app;
