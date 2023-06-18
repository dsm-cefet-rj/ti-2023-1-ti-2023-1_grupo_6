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

// Define usuário

const userSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password:{ type: String, required: true },
    cpf: { type: String, required: true, unique: true },
    nascimento: { type: Date, required: true },
    id: { type: Number, required: true, unique: true },
});
const User = mongoose.model('User', userSchema);
  
// Define carrinho
const carrinhoSchema = new mongoose.Schema({
    nome_item: { type: String, required: true },
    preco: { type: Number, required: true },
    id_usuario: { type: Number, required: true },
    id_loja: { type: Number, required: true },
    secao: { type: String, required: false },
    id_produto: { type: Number, required: true},
    quantidade: { type: Number, required: true },
});
const Carrinho = mongoose.model('Carrinho', carrinhoSchema);
// Define pedido
const orderSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    id_loja: { type: Number, required: true },
    id_usuario: { type: Number, required: true },
    nome_produto: { type: String, required: true },
    id_produto: { type: Number, required: true},
    preco: { type: Number, required: true },
    secao: { type: String, required: false },
    quantidade: { type: Number, required: true },
});
const Order = mongoose.model('Order', orderSchema);

// Define estabelecimento
const shopSchema = new mongoose.Schema({
    cnpj: { type: Number, required: true, unique: true },
    nome: { type: String, required: true, unique: true },
    animaisAtendidos: { type: Number, required: false },
    endereco: {type: String, required: true },
    contato: { type: Number, required: true },
    password: { type: String, required: true },
    url: { type: String, required: true },
    id: { type: Number, required: true, unique: true },
    descricao: { type: String, required: false },
});
const Shop = mongoose.model('Shop', shopSchema);

// Define produto
const productSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    nome: { type: String, required: true },
    preco: { type: Number, required: true },
    secao: { type: String, required: true },
    quantidade: { type: Number, required: true },
    id_loja: { type: Number, required: true },
});
const Product = mongoose.model('Product', productSchema);

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
