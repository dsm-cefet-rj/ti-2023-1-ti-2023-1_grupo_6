var express = require('express');
var router = express.Router();
const Order = require('../models/pedido');

router.get("/:idUsuario", async(req, res) => {
    const id_usuario = req.params.id_usuario

    try {
        const orders = await Order.findOne({id_usuario: id_usuario})
        if (!shop) {
            res.status(422).json({message: 'Usuário não encontrado!'})
            return
    }
    res.status(200).json(orders)
    }
    catch (error) {
        res.status(500).json({ error: error })
    }
});

router.post("/criar_pedido", async(req, res) => {
    const{id_usuario, quantidade, id_loja, categoria, preco, nome_produto, id_produto} = req.body
    const orders ={
        id_usuario,
        produto:{
            id_produto,
            nome_produto,
            preco,
            categoria,
            id_loja,
            quantidade
        }
    }
    try {
        await Order.create(orders)
        res.status(201).json({message: 'Pedido iniciado com sucesso!'})
    } 
    catch (error) {
        res.status(500).json({ error: error })
    }
});

module.exports = router;
