var express = require('express');
var router = express.Router();
const Product = require('../models/produto');

//get produto
router.get('/:id_loja', async (req, res) => {
  const id_loja = req.params.id_loja
  try {
    const products = await Product.find({ id_loja: id_loja })
    if (!shop) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }
    res.status(200).json(products)
  }
  catch (error) {
    res.status(500).json({ error: error })
  }
});

//delete product
router.delete('/id_produto:', async (req, res) => {
  const id_produto = req.params.id_produto
  const products = await Product.findOne({ _id: id_produto })

  if (!products) {
    res.status(422).json({ message: 'Produto não encontrado!' })
    return
  }
  try {
    await Product.deleteOne({ _id: id_produto })
    res.status(200).json({ message: 'Usuário deletado!' })
  }
  catch (error) {
    res.status(500).json({ error: error })
  }
});

//add produto
router.post('/adicionarProduto', async (req, res) => {
  const { nome, preco, categoria, id_loja, quantidade, animal } = req.body
  const products = {
    nome,
    preco,
    categoria,
    id_loja,
    quantidade,
    animal
  }
  try {
    await Product.create(products)
    res.status(201).json({ message: 'Produto criado com sucesso!' })

  } catch (error) {
    res.status(500).json({ error: error })
  }
});


module.exports = router;
