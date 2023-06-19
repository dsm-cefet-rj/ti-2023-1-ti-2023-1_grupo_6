const mongoose = require('mongoose')

// Define usuário
const userInfoSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    nome: { type: String, required: true },
    dataNascimento: { type: Date, required: true },
    cpf: { type: String, required: true, unique: true },
});

const userSchema = new mongoose.Schema({
    senha:{ type: String, required: true },
    informacoes: userInfoSchema,
});

const Person = mongoose.model('Person', userSchema);

module.exports = Person
