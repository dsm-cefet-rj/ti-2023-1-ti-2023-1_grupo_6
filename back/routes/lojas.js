var express = require('express');
var router = express.Router();

let lojas = [
  {
      cnpj: "66735931",
      id: 1,
      nome: "Gato pra Cachorro Pet Shop",
      animais_atendidos: "Gato • Cachorro • Coelho • Hamster",
      contato: "(21) 9 999-9999",
      endereco: "Avenida Gato Fofo, 164",
      descricao: "loja!",
      url: "/loja-gato-pra-cachorro-pet-shop",
  },
  {
      cnpj: "23131931",
      id: 2,
      nome: "Cachorro Pet Shop",
      animais_atendidos: "Cachorro • Coelho • Hamster",
      contato: "(21) 9 999-9999",
      endereco: "Rua Gatinho Fofinho, 277",
      descricao: "loja!",
      url: "/loja-cachorro-pet-shop",
  },
  {
      id: 3,
      nome: "Gato Pet Shop",
      animais_atendidos: "Gato • Pássaro • Hamster",
      contato: "(21) 9 999-9999",
      endereco: "Rua Gabi , 1163",
      descricao: "loja!",
      url: "/loja-gato-pet-shop",
  },
  {
      id: 4,
      nome: "Pássaro Pet Shop",
      animais_atendidos: "Pássaro • Gato • Hamster",
      contato: "(21) 9 999-9999",
      endereco: "Rua Isa, 999",
      descricao: "loja!",
      url: "/loja-passaro-pet-shop",
  },
];

/* GET users listing. */
router.route('/').get(function(req, res, next) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(lojas);
});

router.route('/:id')
.delete(function(req, res, next) {
  res.statusCode = 200;
  lojas = lojas.filter((loja) => {
    return loja.id != req.params.id;
  });
  res.setHeader('Content-Type', 'application/json');
  res.json(lojas);
})
.put((req, res, next) => {
  let index = lojas.map(p => p.id).indexOf(parseInt(req.params.id));
  console.log(index, parseInt(req.params.id));
  lojas.splice(index, 1, ([{...req.body, id: index+1}]));
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(lojas);
})
;

router.route('/adicionarLoja')
.post(function(req, res, next) {
  let proxId = 1 + lojas.map(p => p.id).reduce((x, y) => Math.max(x,y));
  console.log(req.body);
  lojas.push([{...req.body, id: proxId}]);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(lojas);
});


module.exports = router;
