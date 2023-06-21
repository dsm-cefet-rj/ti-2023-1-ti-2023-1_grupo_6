var express = require('express');
const cors = require('cors');
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

const url = 'mongodb+srv://admin:admin@petfast.bhwro9t.mongodb.net/PetFast-API?retryWrites=true&w=majority';
const connect = mongoose.connect(url);

connect.then((db) => {
    app.listen(3003, ()=>{
        console.log("servidor rodando em http://localhost:3003")
    })
}, (err) => { console.log(err); });

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// function auth(req, res, next) {
//     console.log(req.headers);
//     var authHeader = req.headers.authorization;
//     if (!authHeader) {
//         var err = new Error('You are not authenticated!');
//         res.setHeader('WWW-Authenticate', 'Basic');
//         err.status = 401;
//         next(err);
//         return;
//     }
//     var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
//     var user = auth[0];
//     var pass = auth[1];
//     if (user == 'admin' && pass == 'password'){
//         next();
//     } else{
//         var err = new Error('You are not authenticated!');
//         res.setHeader('WWW-Authenticate', 'Basic');
//         err.status = 401;
//         next(err);
//     }
// }

// app.use(auth());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/lojasInfo', lojasRouter);
app.use('/usuario', usuariosRouter);
app.use('/produtoInfo', produtosRouter);
app.use('/carrinho', carrinhoRouter);
app.use('/pedido', pedidosRouter);

module.exports = app;
