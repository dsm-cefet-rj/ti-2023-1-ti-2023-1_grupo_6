const Shop = require('../models/estabelecimento');

    // add loja
    router.post('/estabelecimento', async (req, res) =>{
       const{cnpj, senha, nome, animais_atendidos, contato, endereco, descricao, url} = req.body
       const shop ={
            cnpj,
            senha,
            nome,
            animais_atendidos,
            contato,
            endereco,
            descricao,
            url
       } 
       try {
        
        await Shop.create(shop)
        
        res.status(201).json({message: 'Estabelecimento criado com sucesso!'})

       } catch (error) {
            res.status(500).json({ error: error })
       }
        
    });

//delete user
router.delete('/:id', async(req, res) => {
    const id = req.params.id
    
    const shop = await Shop.findOne({_id: id})
        if (!shop) {
            res.status(422).json({message: 'Usuário não encontrado!'})
            return
        }
    try {
        
        await Shop.deleteOne({_id: id})
        res.status(200).json({message: 'Usuário deletado!'})

    } catch (error) {
        res.status(500).json({ error: error })
    }
});

//get user
router.get('/:id', async(req, res) => {
    const id = req.params.id

    try {
        const shop = await Shop.findOne({_id: id})
        if (!shop) {
            res.status(422).json({message: 'Usuário não encontrado!'})
            return
        }

        res.status(200).json(shop)
    } catch (error) {
        res.status(500).json({ error: error })
    }
});
