var express = require('express');
var router = express.Router();

let usuarios = [
    {
        id: 1,
        login: {
            email: "rafael@email.com",
            senha: "12345678",
        },
        informacoes: {
            email: "rafael@email.com",
            nome: "Rafael Chagas",
            cpf: 11111111111,
            dataNascimento: "0011-11-11"
        }
    }
];

const verificaLogin = (body) => {
    console.log(body);
    const user = usuarios.filter((usuario) => {
        return usuario.login.email == body.email;
    })
    if (user[0].login.email == body.email && user[0].login.senha == body.senha) {
        return user[0].id;
    } else {
        return 0;
    }
}

const verificaInformacao = (value) => {
    return value.email && value.nome && value.cpf && value.dataNascimento;
}

const verificaSenha = (senha) => {
    if (senha.length < 8) {
        return false;
    }
    return true;
}

//get user
router.route('/:id')
    .get(function (req, res, next) {
        let user = usuarios.filter((user) => {
            return user.id === parseInt(req.params.id);
        });
        if (user.length > 0) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(user[0]);
        } else {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.json([]);
        }
    });

router.route('/:id')
    //delete user
    .delete(function (req, res, next) {
        try {
            let index;
            usuarios.filter((user) => {
                if (user.id == parseInt(req.params.id)) {
                    index = usuarios.indexOf(user);
                }
            });
            usuarios.splice(index, 1);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(true);
        } catch {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.json(false);
        }
    })
    // update user
    .put((req, res, next) => {
        try {
            if (verificaInformacao(req.body)) {
                let index = usuarios.map(u => u.id).indexOf(parseInt(req.params.id));
                usuarios[index].informacoes = { ...req.body };
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(true);
            } else {
                res.json(false);
            }
        } catch {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.json(false);
        }
    })
    ;

router.route('/adicionarUsuario')
    //add user
    .post(function (req, res, next) {
        let proxId = 1 + usuarios.map(p => p.id).reduce((x, y) => Math.max(x, y));
        console.log(req.body);
        if (!verificaInformacao(req.body) || !verificaSenha(req.body.senha)) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.json(false);
        } else {
            let user = {
                login: {
                    email: req.body.email,
                    senha: req.body.senha
                },
                informacoes: {
                    email: req.body.email,
                    nome: req.body.nome,
                    cpf: req.body.cpf,
                    dataNascimento: req.body.dataNascimento
                }
            }
            usuarios.push({ ...user, id: proxId });
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(true);
        }
    });

router.route('/login')
    .post((req, res, next) => {
        const id = verificaLogin(req.body);
        if (id) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(id);
        } else {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.json(id);
        }
    })


module.exports = router;
