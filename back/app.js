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

// Conexão MongoDB
const mongoose = require('mongoose');
const { stringify } = require('querystring');

const url = 'mongodb+srv://PETFAST:petfast123@cluster0.a4husxw.mongodb.net/';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });

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
