import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
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

export const LojaContext = createContext();

export const LojaProvider = ({ children }) => {
    const [lojas, setLojas] = useState(() => {
        const localData = localStorage.getItem("lojas");
        return localData ? JSON.parse(localData) : initialState;
    });
    
    useEffect(() => {
        localStorage.setItem("lojas", JSON.stringify(lojas));
    }, [lojas]);
    
    const adicionarLojas = (loja) => {
        const novaLoja = { id: uuidv4(), ...loja };
        setLojas([...lojas, novaLoja]);
        localStorage.setItem("lojas", JSON.stringify([...lojas, novaLoja]));
    };

    const removerLoja = (id) => {
        setLojas(lojas.filter((loja) => loja.id !== id));
    };

    const buscasLoja = (id) => {
        const localData = JSON.parse(localStorage.getItem("lojas"));
        const lojaProcuradaId = localData.find((loja) => loja.id === id);
        return lojaProcuradaId;
    };

    const buscasLojaCNPJ = (cnpj) => {
        const localData = JSON.parse(localStorage.getItem("lojas"));
        const lojaProcuradaId = localData.find((loja) => loja.cnpj === cnpj);
        return lojaProcuradaId;
    };

    const buscasLojaNome= (nome) => {
        const localData = JSON.parse(localStorage.getItem("lojas"));
        const lojaProcuradaId = localData.find((loja) => loja.nome  === nome);
        return lojaProcuradaId;
    };

    const allLojas = () => {
        return lojas;
    };

    return (
        <LojaContext.Provider value={{ allLojas, adicionarLojas, removerLoja, buscasLoja, buscasLojaCNPJ, buscasLojaNome }}>
            {children}
        </LojaContext.Provider>
    );
}
