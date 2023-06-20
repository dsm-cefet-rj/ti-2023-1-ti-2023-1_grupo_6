const mongoose = require('mongoose')

// Define carrinho
const carrinhoSchema = new mongoose.Schema({
    id_usuario: { type: Number, required: true },
    id_produto: { type: Number, required: true},
    nome_item: { type: String, required: true },
    preco: { type: Number, required: true },
    secao: { type: String, required: false },
    id_loja: { type: Number, required: true },
    quantidade: { type: Number, required: true },
});
const Carrinho = mongoose.model('Carrinho', carrinhoSchema);

module.exports = Carrinho
