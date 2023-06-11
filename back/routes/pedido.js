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
        
    }catch(err){
        console.log(err)
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.json(false);
    }
})

module.exports = router;