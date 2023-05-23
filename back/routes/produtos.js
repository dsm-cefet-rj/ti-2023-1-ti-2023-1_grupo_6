let produtos = [
    {
        id: 1,
        nome: "racao de cachorro",
        price: 34.99,
        section: "1",
        idLoja: 1,
        quantidade: 10
    },
    {
        id: 2,
        nome: "racao de gato",
        price: 24.99,
        section: "1",
        idLoja: 2,
        quantidade: 10
    },
    {
        id: 3,
        nome: "brinquedo de gato",
        price: 14.99,
        section: "1",
        idLoja: 1,
        quantidade: 8
    },
];

module.exports = {
    atualizaQuantidade: (qtd, id) =>{
        let prod = produtos.filter(p => p.id == id);
        const index = produtos.indexOf(prod[0]);
        if(qtd > prod[0].quantidade){
            return false;
        }else{
            prod[0].quantidade -= qtd;
            produtos[index] = prod[0];
            return true;
        }
    },
    getProduto: (id, qtd) => {
        let prod = produtos.filter(p => p.id == id);
        const index = produtos.indexOf(prod[0]);
        if(prod[0].quantidade >= qtd){
            prod[0].quantidade -= qtd;
            produtos[index] = prod[0];
            prod[0].quantidade = qtd;
            return prod[0];
        }else{
            return undefined;
        }
    },
    getByLoja: (idLoja) => {
        let produtosLoja = produtos.filter((prod) => {
            return prod.idLoja == idLoja;
          });
        return produtosLoja;
    },
    deletaProduto: (body) => {
        try{
            const idProduto = body.id;
            const idLoja = body.idLoja;
            const prodLoja = produtos.filter((prod) => {
                return prod.idLoja == idLoja;
              });
            const produto = prodLoja.filter((prod) => {
                return prod.id == idProduto;
            });
            if(produto.length > 0){
                const index = produtos.indexOf(produto[0]);
                produtos.splice(index, 1);
                return true;
            }else{
                return false;
            }
        }catch{
            return false;
        }
    },
    atualizaProduto: (body) => {
        try{
            const idProduto = body.id;
            const idLoja = body.idLoja;
            const prodLoja = produtos.filter((prod) => {
                return prod.idLoja == idLoja;
              });
            const produto = prodLoja.filter((prod) => {
                return prod.id == idProduto;
            });
            if(produto.length >0){
                const index = produtos.indexOf(produto[0]);
                const prod = {
                    id: produto[0].id,
                    nome: body.nome,
                    price: body.price,
                    section: body.section,
                    idLoja: produto[0].idLoja,
                    quantidade: body.quantidade
                }
                produtos[index] = prod;
                return true;
            }else{
                return false;
            }
        }catch{
            return false;
        }
    },
    addProduto: (body) => {
        try{
            const proxId = 1 + produtos.map(p => p.id).reduce((x, y) => Math.max(x,y));
            const prod = {
                id: proxId,
                nome: body.nome,
                price: body.price,
                section: body.section,
                idLoja: body.idLoja,
                quantidade: body.quantidade
            };
            produtos.push(prod);
            return true;
        }catch{
            return false;
        }
    }

}