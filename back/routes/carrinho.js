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
                quantidade: 10
            },
            {
                id: 3,
                nome: "brinquedo de gato",
                price: 14.99,
                section: "1",
                idLoja: 1,
                quantidade: 8
            }
        ]
    }
];

const {atualizaQuantidade, getProduto} = require('./produtos');

router.route("/:id")
.get((req, res, next)=>{
    const produtosUsuario = carrinho.filter(c => c.idUsuario == parseInt(req.params.id));
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(produtosUsuario[0].produto);
    }
)

router.route("/adicionar")
.post((req, res, next)=>{
    try{
        const idProduto = req.body.id;
        const idUsuario = req.body.idUsuario;
        const carrinhoUsuario = carrinho.filter(c => c.idUsuario == parseInt(idUsuario));
        let qtd = req.body.qtd;
        if(carrinhoUsuario.length > 0){
            const index = carrinho.indexOf(carrinhoUsuario[0]);
            const indexProduto = carrinhoUsuario[0].produto.indexOf(prod[0]);
            let prod = carrinhoUsuario[0].produto.filter(p => p.id == idProduto);
            if(!prod){
                carrinho[index].produto.push(getProduto(idProduto, qtd));
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(true);
            }else{
                atualizaQuantidade(-prod[0].quantidade);
                const produtoAtualizado = getProduto(idProduto, qtd);
                carrinho[index].produto[indexProduto] = produtoAtualizado;
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(true);
            }
        }else{
            const proxId = 1 + carrinho.map(c => c.id).reduce((x, y) => Math.max(x,y));
            let carrinhoNovoUsuario = {
                id: proxId,
                produtos: ([{...getProduto(idProduto, qtd)}])
            }
            carrinho.push(carrinhoNovoUsuario);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(true);
        }
    }catch{
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.json(false);
    }
})

router.route("/")
.delete((req, res, next)=>{
    try{
        const idProduto = parseInt(req.body.id);
        const idUsuario = parseInt(req.body.idUsuario);
        const aux = carrinho.filter(c => c.idUsuario == idUsuario);
        const indexCarrinho = carrinho.indexOf(aux[0]);
        let produtosUsuario = aux[0].produto;
        const produto = produtosUsuario.filter((prod) => {
            return prod.id == idProduto;
        });
        if(produto.length > 0){
            const index = produtosUsuario.indexOf(produto[0]);
            produtosUsuario.splice(index, 1);
            carrinho[indexCarrinho].produto = produtosUsuario;
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(true);
        }else{
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.json(false);
        }
    }catch{
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.json(false);
    }
})

router.route("/")
.put((req, res, next)=>{
    try{
        const idProduto = parseInt(req.body.id);
        const idUsuario = parseInt(req.body.idUsuario);
        let qtd = parseInt(req.body.quantidade);
        const aux = carrinho.filter(c => c.idUsuario == idUsuario);
        const indexCarrinho = carrinho.indexOf(aux[0]);
        let produtosUsuario = aux[0].produto;
        const produto = produtosUsuario.filter((prod) => {
            return prod.id == idProduto;
        });
        const indexProduto = produtosUsuario.indexOf(produto[0]);
        if(qtd == 0){
            atualizaQuantidade(produto[0].quantidade);
            if(produto.length > 0){
                produtosUsuario.splice(index, 1);
                carrinho[indexCarrinho].produto = produtosUsuario;
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(produtosUsuario);
            }else{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(produtosUsuario);
            }
        }else{
            qtd -= produto[0].quantidade;
            const produtoAtualizado = atualizaQuantidade(qtd);
            produtosUsuario[indexProduto] = produtoAtualizado;
            carrinho[indexCarrinho].produto = produtosUsuario;
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(produtosUsuario);
        }
    }catch{
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.json(false);
    }
})

module.exports = router;