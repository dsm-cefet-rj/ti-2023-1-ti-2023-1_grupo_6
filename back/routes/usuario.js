var express = require('express');
var router = express.Router();
const Person = require('../models/usuario');


async function verificaLogin(object) {
    const email = object.email;
    const senha = object.senha;
    const person = await Person.findOne({email: email});
    if(email === person.email && senha === person.senha){
        return true;
    }
    return false;
}

//get user
router.get('/:email', async(req, res) => {
    const email = req.params.email

    try {
        const person = await Person.findOne({email: email})
        if (!person) {
            res.status(422).json({message: 'Usuário não encontrado!'})
            return
        }

        res.status(200).json(person)
    } catch (error) {
        res.status(500).json({ error: error })
    }
});

//delete user
router.delete('/:email', async(req, res) => {
    const email = req.params.email
    
    const person = await Person.findOne({email: email})
        if (!person) {
            res.status(422).json({message: 'Usuário não encontrado!'})
            return
        }
    try {
        
        await Person.deleteOne({email: email})
        res.status(200).json({message: 'Usuário deletado!'})

    } catch (error) {
        res.status(500).json({ error: error })
    }
});
// add user
router.post('/', async (req, res) =>{
    const {email, senha, nome, cpf, dataNascimento} = req.body
    const person ={
        email,
        senha,
        nome,
        cpf,
        dataNascimento
    }
    try {
        console.log('aqui');
        await Person.create(person)
        
        res.status(201).json({message: 'Usuário criado com sucesso!'})
        
    } catch (error) {
        res.status(500).json({ error: error })
    }

});

router.route('/login')
.post(async (req, res, next)=>{
    const verifica = await verificaLogin(req.body);
    if(verifica){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(verifica);
    }else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.json(verifica);
    }
})


module.exports = router;
