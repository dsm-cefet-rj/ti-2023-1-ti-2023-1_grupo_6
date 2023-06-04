var express = require('express');
var router = express.Router();

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

router.route("/:id")
.get((req, res, next)=>{
    const produtosUsuario = carrinho.filter(c => c.idUsuario == parseInt(req.params.id));
    if(produtosUsuario.length > 0){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(produtosUsuario[0].produto);
    }else{
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.json([]);
    }
    }
)
router.route("/adicionar")
.post((req, res, next)=>{
    try{
        const idProduto = req.body.idProduto;
        const quantidade = req.body.quantidade;
        const idUsuario = req.body.idUsuario;
        let carrinhoUsuario = carrinho.filter(c=> c.idUsuario === idUsuario);
        if(carrinhoUsuario.length == 0){
            const produtoUsuario = getProduto(idProduto, quantidade);
            carrinhoUsuario = {
                idUsuario: idUsuario,
                produto: [produtoUsuario]
            };
            carrinho.push(carrinhoUsuario);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(carrinhoUsuario[0].produto);
        }else{
            let produto = carrinhoUsuario[0].produto.filter(p => p.id == idProduto);
            if(produto.length > 0){
                const indexCarrinho = carrinho.indexOf(carrinhoUsuario[0])
                const indexProduto = carrinhoUsuario[0].produto.indexOf(produto[0]);
                const qtd = produto[0].quantidade + quantidade;
                produto = getProduto(idProduto, qtd);
                carrinho[indexCarrinho].produto[indexProduto].quantidade = produto.quantidade;
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(carrinhoUsuario[0].produto);
            }else{
                const produtoUsuario = getProduto(idProduto, quantidade);
                carrinhoUsuario[0].produto.push(produtoUsuario);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(carrinhoUsuario[0].produto);
            }
        }
    }catch(err){
        console.log(err)
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.json(false);
    }
})

router.route("/")
.delete((req, res, next)=>{
    try{
        const idProduto = req.body.idProduto;
        const idUsuario = req.body.idUsuario;
        let carrinhoUsuario = carrinho.filter(c=> c.idUsuario === idUsuario);
        let produto = carrinhoUsuario[0].produto.filter(p => p.id == idProduto);
        const indexCarrinho = carrinho.indexOf(carrinhoUsuario[0])
        const indexProduto = carrinhoUsuario[0].produto.indexOf(produto[0]);
        const qtd = produto[0].quantidade -1;
        if(qtd > 0){
            console.log(1)
            produto = getProduto(idProduto, qtd);
            carrinho[indexCarrinho].produto[indexProduto].quantidade = produto.quantidade;
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(carrinhoUsuario[0].produto);
        }else{
            console.log(2)
            carrinho[indexCarrinho].produto.splice(indexProduto, 1);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(carrinhoUsuario[0].produto);
        }
    }catch{
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.json(false);
    }
})

module.exports = router;