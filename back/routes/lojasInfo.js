var express = require('express');
var router = express.Router();
const {getLojasInfo, deleteLoja, atualizarLoja, getLojaInfo, criaLoja, getLoginInfo} = require('./lojas')

/* GET users listing. */
router.route('/')
.get(function(req, res, next) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(getLojasInfo());
});

router.route('/:id')
.get(function(req, res, next) {
  try{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(getLojaInfo(req.params.id));
  }catch{
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.json([]);
  }
});

router.route('/:id')
.delete(function(req, res, next) {
  try{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(deleteLoja(req.params.id));
  }catch{
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.json(false);
  }
})
.put((req, res, next) => {
  try{
    atualizarLoja(parseInt(req.params.id), req.body);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(getLojaInfo(parseInt(req.params.id)));
  }catch{
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.json([]);
  }
})
;

router.route('/adicionarLoja')
.post(function(req, res, next) {
  try{
    criaLoja(req.body);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(true);
  }catch{
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.json(false);
  }
});

router.route('/login')
.post((req, res, next)=>{
    const id = getLoginInfo(req.body);
    if(id){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(id);
    }else{
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.json(id);
    }
})


module.exports = router;
