const mongoose = require('mongoose')

// Define usuário

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    nome: { type: String, required: true },
    dataNascimento: { type: Date, required: true },
    cpf: { type: String, required: true, unique: true },
    senha:{ type: String, required: true },
});

const Person = mongoose.model('Person', userSchema);

module.exports = Person
