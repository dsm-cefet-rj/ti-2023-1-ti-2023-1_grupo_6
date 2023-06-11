var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var lojasRouter = require('./routes/lojasInfo');
var usuariosRouter = require('./routes/usuario');
var produtosRouter = require('./routes/produtoInfo');
var carrinhoRouter = require('./routes/carrinho');
var pedidosRouter = require('./routes/pedido');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/lojasInfo', lojasRouter);
app.use('/usuario', usuariosRouter);
app.use('/produtoInfo', produtosRouter);
app.use('/carrinho', carrinhoRouter);
app.use('/pedido', pedidosRouter);

module.exports = app;
