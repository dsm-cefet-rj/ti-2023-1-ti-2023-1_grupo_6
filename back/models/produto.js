const mongoose = require('mongoose')

// Define produto
const productSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    preco: { type: Number, required: true },
    categoria: { type: String, required: true },
    id_loja: { type: Number, required: true },
    quantidade: { type: Number, required: true },
    animal: { type: String, required: true},
});
const Product = mongoose.model('Product', productSchema);

module.exports = Product
