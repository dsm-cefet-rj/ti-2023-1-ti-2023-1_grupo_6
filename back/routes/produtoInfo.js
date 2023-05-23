var express = require('express');
var router = express.Router();

const {getByLoja, deletaProduto, atualizaProduto, addProduto} = require('./produtos')

//get user
router.route('/:idLoja')
.get(function(req, res, next) {
  const produtos = getByLoja(req.params.idLoja); 
  if(produtos.length > 0){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(produtos);
  }else{
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.json([]);
  }
});

router.route('/')
//delete user
.delete(function(req, res, next) {
  if(deletaProduto(req.body)){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(true);
  }else{
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.json(false);
  }
  
})
// update user
.put((req, res, next) => {
  if(atualizaProduto(req.body)){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(true);
  }else{
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.json(false);
  }
})
;

router.route('/adicionarProduto')
//add user
.post(function(req, res, next) {
  if(addProduto(req.body)){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(true);
  }else{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(false);
  }
});


module.exports = router;
