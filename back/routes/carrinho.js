var express = require('express');
var router = express.Router();
const Carrinho = require('../models/carrinho');
let carrinho = [
    {
        idUsuario: 1,
        produto: [
            {
                id: 1,
                nome: "racao de cachorro",
                price: 34.99,
                section: "1",
                idLoja: 1,
                quantidade: 2
            }
        ]
    }
];

const {getProduto} = require('./produtos');

router.get("/:id_usuario", async(req,res)=>{
    const id_usuario = req.params.id

    try {
        const carrinhos = await Carrinho.findOne({_id: id_usuario})
        if (!carrinhos) {
            res.status(422).json({message: 'Usuário não encontrado!'})
            return
        }
        res.status(200).json(carrinhos)
    } catch (error) {
        res.status(500).json({ error: error })
    }
});

router.route("/adicionar")
  .post(async (req, res) => {
    try {
      const id_produto = req.body.id_produto;
      const quantidade = req.body.quantidade;
      const id_usuario = req.body.id_usuario;
      let carrinhoUsuario = await Carrinho.find({ idUsuario: id_usuario });
      if (carrinhoUsuario.length === 0) {
        const produtoUsuario = await getProduto(id_produto, quantidade);
        carrinhoUsuario = new Carrinho({
          idUsuario: id_usuario,
          produto: [produtoUsuario]
        });
        await carrinhoUsuario.save();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(carrinhoUsuario.produto);
      } else {
        let produto = carrinhoUsuario[0].produto.filter(p => p.id == id_produto);
        if (produto.length > 0) {
          const indexProduto = carrinhoUsuario[0].produto.indexOf(produto[0]);
          const qtd = produto[0].quantidade + quantidade;
          produto = await getProduto(id_produto, qtd);
          carrinhoUsuario[0].produto[indexProduto].quantidade = produto.quantidade;
          await carrinhoUsuario[0].save();
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(carrinhoUsuario[0].produto);
        } else {
          const produtoUsuario = await getProduto(id_produto, quantidade);
          carrinhoUsuario[0].produto.push(produtoUsuario);
          await carrinhoUsuario[0].save();
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(carrinhoUsuario[0].produto);
        }
      }
    } catch (error) {
      console.log(error);
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.json(false);
    }
  });

  router.route("/")
  .delete(async (req, res, next) => {
      try {
          const id_produto = req.body.idProduto;
          const id_usuario = req.body.id_usuario;
          let carrinhoUsuario = await Carrinho.find({ id_usuario: id_usuario });
          let produto = carrinhoUsuario[0].produto.filter(p => p.id == id_produto);
          const indexCarrinho = carrinho.indexOf(carrinhoUsuario[0]);
          const indexProduto = carrinhoUsuario[0].produto.indexOf(produto[0]);
          const qtd = produto[0].quantidade - 1;
          if (qtd > 0) {
              console.log(1);
              produto = await getProduto(id_produto, qtd);
              carrinhoUsuario[0].produto[indexProduto].quantidade = produto.quantidade;
              await carrinhoUsuario[0].save();
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(carrinhoUsuario[0].produto);
          } else {
              console.log(2);
              carrinhoUsuario[0].produto.splice(indexProduto, 1);
              await carrinhoUsuario[0].save();
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(carrinhoUsuario[0].produto);
          }
      } catch (error) {
          console.log(error);
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.json(false);
      }
  });

module.exports = router;
