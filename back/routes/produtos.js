var express = require('express');
var router = express.Router();

let produtos = [
    {
        id: 1,
        nome: "racao de cachorro",
        price: 34.99,
        section: "1",
        idLoja: 1
    }
];

const verificaInformacao = (value) => {
    return value.nameProduct&& value.price && value.section;
}

//get user
router.route('/:idLoja')
.get(function(req, res, next) {
  let usuario = produtos.filter((prod) => {
    return prod.idLoja == req.params.idLoja;
  });
  if(usuario.length > 0){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(usuario);
  }else{
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.json([]);
  }
});

router.route('/:id')
//delete user
.delete(function(req, res, next) {
  res.statusCode = 200;
  produtos = produtos.filter((prod) => {
    return prod.id != req.params.id;
  });
  res.setHeader('Content-Type', 'application/json');
  res.json(produtos);
})
// update user
.put((req, res, next) => {
  let index = produtos.map(p => p.id).indexOf(parseInt(req.params.id));
  if(verificaInformacao(req.body)){
    produtos.splice(index, 1, ({...req.body, id: index+1}));
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(produtos);
  }else{
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.json([]);
  }
})
;

router.route('/adicionarProduto')
//add user
.post(function(req, res, next) {
  let proxId = 1 + produtos.map(p => p.id).reduce((x, y) => Math.max(x,y));
  console.log(req.body);
  if(!verificaInformacao(req.body)){
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.json([]);
  }else{
    produtos.push({...req.body, id: proxId});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(produtos);
  }
});


module.exports = router;
