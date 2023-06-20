var express = require('express');
var router = express.Router();
const Person = require('../models/usuario');

//get user
router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const person = await Person.findOne({ _id: id })
        if (!person) {
            res.status(422).json({ message: 'Usuário não encontrado!' })
            return
        }

        res.status(200).json(person)
    } catch (error) {
        res.status(500).json({ error: error })
    }
});

//delete user
router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const person = await Person.findOne({ _id: id })
    if (!person) {
        res.status(422).json({ message: 'Usuário não encontrado!' })
        return
    }
    try {

        await Person.deleteOne({ _id: id })
        res.status(200).json({ message: 'Usuário deletado!' })

    } catch (error) {
        res.status(500).json({ error: error })
    }
});
// add user
router.post('/usuario', async (req, res) => {
    const { email, senha, nome, cpf, dataNascimento } = req.body
    const person = {
        email,
        senha,
        nome,
        cpf,
        dataNascimento
    }
    try {

        await Person.create(person)

        res.status(201).json({ message: 'Usuário criado com sucesso!' })

    } catch (error) {
        res.status(500).json({ error: error })
    }

});

router.route('/login')
    .post((req, res, next) => {
        const id = verificaLogin(req.body);
        if (id) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(id);
        } else {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.json(id);
        }
    })


module.exports = router;