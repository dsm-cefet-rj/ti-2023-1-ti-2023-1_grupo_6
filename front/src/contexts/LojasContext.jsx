import React, { createContext, useState } from 'react';
import petshop1 from "../assets/petshop1.png";
import petshop2 from "../assets/petshop2.png";
import petshop3 from "../assets/petshop3.png";

const initialState = [
    {
        nome: "Gato pra Cachorro Pet Shop",
        animais_atendidos: "Gato • Cachorro • Coelho • Hamster",
        contato: "(21) 9 999-9999",
        endereco: "Avenida Gato Fofo, 164",
        img: <img src={petshop1} alt="dog" />,
        image: <img src={petshop1} alt="pet1" width="350" height="300px" />,
        id: "1",
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
        id: "2",
        nome: "Cachorro Pet Shop",
        animais_atendidos: "Cachorro • Coelho • Hamster",
        contato: "(21) 9 999-9999",
        endereco: "Rua Gatinho Fofinho, 277",
        img: <img src={petshop2} alt="dog" />,
        image: <img src={petshop2} alt="pet1" width="350" height="300px" />,
        descricao: "loja!",
        url: "/loja-cachorro-pet-shop",
    },
    {
        id: "3",
        nome: "Gato Pet Shop",
        animais_atendidos: "Gato • Pássaro • Hamster",
        contato: "(21) 9 999-9999",
        endereco: "Rua Gabi , 1163",
        img: <img src={petshop3} alt="dog" />,
        image: <img src={petshop3} alt="pet1" width="350" height="300px" />,
        descricao: "loja!",
        url: "/loja-gato-pet-shop",
    },
    {
        id: "4",
        nome: "Pássaro Pet Shop",
        animais_atendidos: "Pássaro • Gato • Hamster",
        contato: "(21) 9 999-9999",
        endereco: "Rua Isa, 999",
        img: <img src={petshop1} alt="dog" />,
        image: <img src={petshop1} alt="pet1" width="350" height="300px" />,
        descricao: "loja!",
        url: "/loja-passaro-pet-shop",
    },
];

export const LojaContext = createContext();

export const LojaProvider = ({ children }) => {
    const [lojas, setLojas] = useState(initialState);

    const adiconarLoja = (loja) => {
        setLojas([...lojas, loja]);
    };

    const removerLoja = (id) => {
        setLojas(lojas.filter((loja) => loja.id !== id));
    };

    const buscasLoja = (id) => {
        return lojas.find((loja) => loja.id === id);
    };

    const allLojas = () => {
        return lojas;
    };

    return (
        <LojaContext.Provider value={{ allLojas, adiconarLoja, removerLoja, buscasLoja }}>
            {children}
        </LojaContext.Provider>
    );
}
