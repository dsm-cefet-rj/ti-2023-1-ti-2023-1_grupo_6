const mongoose = require('mongoose')

// Define pedido
const orderInfoSchema = new mongoose.Schema({
    id_produto: { type: Number, required: true},
    nome_produto: { type: String, required: true },
    preco: { type: Number, required: true },
    categoria: { type: String, required: false },
    id_loja: { type: Number, required: true },
    quantidade: { type: Number, required: true },
});

const orderSchema = new mongoose.Schema({
    id_usuario: { type: Number, required: true },
    produto: orderInfoSchema,
});
const Order = mongoose.model('Order', orderSchema);

module.exports = Order
