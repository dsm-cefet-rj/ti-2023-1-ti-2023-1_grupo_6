var express = require('express');
var router = express.Router();
const Shop = require('../models/estabelecimento');

// add loja
router.post('/', async (req, res) => {
    const { cnpj, senha, nome, animaisAtendidos, contato, endereco, descricao } = req.body
    const shop = {
        cnpj,
        senha,
        informacoes:
        {
            nome,
            animaisAtendidos,
            endereco,
            contato,
            descricao
        }
    }
    try {
        await Shop.create(shop)
        res.status(201).json({ message: 'Estabelecimento criado com sucesso!' })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error })
    }
});

//delete user
router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const shop = await Shop.findOne({ _id: id })

    if (!shop) {
        res.status(422).json({ message: 'Usuário não encontrado!' })
        return
    }
    try {
        await Shop.deleteOne({ _id: id })
        res.status(200).json({ message: 'Usuário deletado!' })
    }
    catch (error) {
        res.status(500).json({ error: error })
    }
});

//get user
router.get('/:cnpj', async (req, res) => {
    const c = req.params.cnpj
    try {
        const shop = await Shop.findOne({ cnpj: c })
        if (!shop) {
            res.status(422).json({ message: 'Usuário não encontrado!' })
            return
        }
        res.status(200).json(shop)
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error })
    }
});


module.exports = router;