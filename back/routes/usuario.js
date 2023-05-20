var express = require('express');
var router = express.Router();

let usuarios = [
    {
        name: "Rafael Chagas",
        cpf: 11111111111,
        bornDate: "0011-11-11",
        email: "rafael@email.com",
        password: "12345678",
        id: 1
    }
];

const verificaInformacao = (value) => {
    return value.email && value.name && value.cpf && value.bornDate && value.password;
}

const verificaSenha = (senha) => {
    if(senha.length < 8){
        return false;
    }
    return true;
}

//get user
router.route('/:email').get(function(req, res, next) {
  let usuario = usuarios.filter((user) => {
    return user.email == req.params.email;
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
  usuarios = usuarios.filter((user) => {
    return user.id != req.params.id;
  });
  res.setHeader('Content-Type', 'application/json');
  res.json(usuarios);
})
// update user
.put((req, res, next) => {
  let index = usuarios.map(u => u.id).indexOf(parseInt(req.params.id));
  usuarios.splice(index, 1, ([{...req.body, id: index+1}]));
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(usuarios);
})
;

router.route('/adicionarUsuario')
//add user
.post(function(req, res, next) {
  let proxId = 1 + usuarios.map(p => p.id).reduce((x, y) => Math.max(x,y));
  console.log(req.body);
  if(!verificaInformacao(req.body) || !verificaSenha(req.body.password)){
    res.statusCode = 400;
  res.setHeader('Content-Type', 'application/json');
  res.json([]);
  }else{
    usuarios.push({...req.body, id: proxId});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(usuarios);
  }
});


module.exports = router;
