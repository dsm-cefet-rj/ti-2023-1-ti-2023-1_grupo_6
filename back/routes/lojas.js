var lojas = [
    {
        id: 1,
        login: {
            cnpj: "1234567891415",
            senha: "12345678"
        },
        informacoes:{
            nome: "Gato pra Cachorro Pet Shop",
            animais_atendidos: "Gato • Cachorro • Coelho • Hamster",
            contato: "(21) 9 999-9999",
            endereco: "Avenida Gato Fofo, 164",
            descricao: "loja!",
            url: "/loja-gato-pra-cachorro-pet-shop"
        }
    },
    {
        id: 2,
        login: {
            cnpj: "1234567891213",
            senha: "12345678"
        },
        informacoes:{
            nome: "Cachorro Pet Shop",
            animais_atendidos: "Cachorro • Coelho • Hamster",
            contato: "(21) 9 999-9999",
            endereco: "Rua Gatinho Fofinho, 277",
            descricao: "loja!",
            url: "/loja-cachorro-pet-shop"
        }
    },
    {
        id: 3,
        login: {
            cnpj: "1234567891011",
            senha: "12345678"
        },
        informacoes: {
            nome: "Gato Pet Shop",
            animais_atendidos: "Gato • Pássaro • Hamster",
            contato: "(21) 9 999-9999",
            endereco: "Rua Gabi , 1163",
            descricao: "loja!",
            url: "/loja-gato-pet-shop"
        }
    },
    {
        id: 4,
        login: {
            cnpj: "1234567891617",
            senha: "12345678"
        },
        informacoes: {
            nome: "Pássaro Pet Shop",
            animais_atendidos: "Pássaro • Gato • Hamster",
            contato: "(21) 9 999-9999",
            endereco: "Rua Isa, 999",
            descricao: "loja!",
            url: "/loja-passaro-pet-shop"
        }
    }
];
const pegaUrl = (nome) => {
    return "/"+nome;
}

module.exports = {
    getLoginInfo: (value) => {
        const loja = lojas.filter((loja)=>{
            return loja.login.cnpj == value.cnpj;
        })
        if(loja[0].login.cnpj == value.cnpj && loja[0].login.senha == value.senha){
            return loja[0].id;
        }else{
            return 0;
        }
    },
    getLojasInfo: function(){
        const informacoes = lojas.map(loja=>loja.informacoes)
        return informacoes
    },
    getLojaInfo: function(id){
        let blabla = lojas.filter((loja) => {
            return loja.id == id;
        });
        return blabla[0].informacoes
    },
    deleteLoja: (id) => {
        lojas = lojas.filter((loja) => {
            return loja.id != id;
        });
        return true;
    },
    atualizarLoja: (id, body) => {
        let index = lojas.map(p => p.id).indexOf(parseInt(id));
        lojas[index].informacoes = {... body, url: pegaUrl(body.nome)};
        return true
    },
    criaLoja : (body) => {
        try {
            let proxId = 1 + lojas.map(l => l.id).reduce((x, y) => Math.max(x,y));
            const novaLoja = {
                id: proxId,
                login: {
                    cnpj: body.cnpj,
                    senha: body.senha
                },
                informacoes: {
                    nome: body.nome,
                    animais_atendidos: body.animais_atendidos,
                    contato: body.contato,
                    endereco: body.endereco,
                    descricao: body.descricao,
                    url: pegaUrl(body.nome)
                }
            }
            lojas.push(novaLoja)
            return true
        }catch{
            return false
        }
    }
}