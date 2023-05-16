var express = require('express');
var router = express.Router();

let lojas = [
  {
      cnpj: "66735931",
      id: "1",
      nome: "Gato pra Cachorro Pet Shop",
      animais_atendidos: "Gato • Cachorro • Coelho • Hamster",
      contato: "(21) 9 999-9999",
      endereco: "Avenida Gato Fofo, 164",
      descricao: "loja!",
      url: "/loja-gato-pra-cachorro-pet-shop",
      produtos: [
          {
              nome: "de",
              preco: 31.22,
              id: "1",
              lojaNome: "Gato pra Cachorro Pet Shop",
          },
      ],
  },
  {
      cnpj: "23131931",
      id: "2",
      nome: "Cachorro Pet Shop",
      animais_atendidos: "Cachorro • Coelho • Hamster",
      contato: "(21) 9 999-9999",
      endereco: "Rua Gatinho Fofinho, 277",
      descricao: "loja!",
      url: "/loja-cachorro-pet-shop",
  },
  {
      id: "3",
      nome: "Gato Pet Shop",
      animais_atendidos: "Gato • Pássaro • Hamster",
      contato: "(21) 9 999-9999",
      endereco: "Rua Gabi , 1163",
      descricao: "loja!",
      url: "/loja-gato-pet-shop",
  },
  {
      id: "4",
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

router.route('/:id').delete(function(req, res, next) {
  res.statusCode = 200;
  const newArr = lojas.filter((loja) => {
    return loja.id != req.params.id;
  });
  console.log(req.params.id);
  res.setHeader('Content-Type', 'application/json');
  res.json(newArr);
});
// router.get('/', function(req, res, next) {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'application/json');
//   res.json([
//     {
//       name: 'HAHAHAHA BORGES',
//       productor: 'MAINSTREET'
//     }
//   ]);
// });

module.exports = router;
