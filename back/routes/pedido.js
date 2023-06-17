var express = require('express');
var router = express.Router();

let pedidos = [
    {
        idUsuario: 1,
        idPedido: 1,
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

const {verificaProduto} = require('./produtos');

router.route("/:idUsuario")
.get((req, res, next)=>{
    const pedidosUsuario = pedidos.filter(c => c.idUsuario == parseInt(req.params.idUsuario));
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(pedidosUsuario);
    }
)
router.route("/adicionar")
.post((req, res, next)=>{
    try{
        let pedidoAtual = {...req.body};
        if(verificaProduto(pedidoAtual.produto))
        {
            const proxId = 1 + pedidos.map(p => p.idPedido).reduce((x, y) => Math.max(x,y));
            pedidoAtual = {id: proxId, ...pedidoAtual}
            pedidos.push(pedidoAtual);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(true);
        }else{
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.json(false);
        }
    }catch(err){
        console.log(err)
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.json(false);
    }
})

module.exports = router;