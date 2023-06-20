const mongoose = require('mongoose')

// Define estabelecimento
const shopInfoSchema = new mongoose.Schema({
    nome: { type: String, required: true, unique: true },
    animaisAtendidos: { type: Number, required: false },
    endereco: {type: String, required: true },
    contato: { type: Number, required: true },
    url: { type: String, required: true },
    descricao: { type: String, required: false },
});

const shopSchema = new mongoose.Schema({    
    cnpj: { type: Number, required: true, unique: true },
    password: { type: String, required: true },
    informacoes: shopInfoSchema,
});
const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop
