import React, { createContext, useState } from 'react';
import catnip from "../assets/catnip-gatos.png";
import brinquedo from "../assets/brinquedo-cat.png";
import shampoo from "../assets/shampoo-cachorro.png";
import racao from "../assets/racao-cachorro.png";
import suplemento from "../assets/suplemento-gato.png";
import roupacirurgica from "../assets/roupacirurgica-gato.png";
import antiparasitario from "../assets/antiparasitario-gato.png";
import comidacoelho1 from "../assets/comida-coelho.png";
import comidacoelho2 from "../assets/comida2-coelho.png";
import comidapassaro1 from "../assets/comida2-passaro.png";
import comidapassaro2 from "../assets/comida3-passaro.png";
import comidapassaro3 from "../assets/comida4-passaro.png";
import camacachorro from "../assets/cama-cachorro.png";
import casagato from "../assets/casa-gato.png";
import coleiracachorro from "../assets/coleira-cachorro.png";
import gaiolacoelho from "../assets/gaiola-coelho.png";
import gaiolapassaro from "../assets/gaiola-passaro.png";
import prodcoelho from "../assets/prod-coelho.png";
import roupapassaro from "../assets/roupa-passaro.png";

const initialState = [{
    nome: 'Shampoo para cachorro',
    id: 1,
    animal: 'cachorro',
    valor: '49,99',
    promocao: '35,99',
    categoria: 'Promoções',
    img: shampoo
}, {
    nome: 'Brinquedo para gato',
    id: 2,
    animal: 'gato',
    valor: '17,59',
    promocao: 'Não há promoção disponível para este produto.',
    categoria: 'Diversão',
    img: brinquedo
}, {
    nome: 'Ração Gormeut',
    id: 3,
    animal: 'cachorro',
    valor: '23,99',
    promocao: 'Não há promoção disponível para este produto.',
    categoria: 'Alimentacao',
    img: racao
}, {
    nome: 'Catnip',
    id: 4,
    animal: 'gato',
    valor: '10,99',
    promocao: 'Não há promoção disponível para este produto.',
    categoria: 'Atrativos',
    img: catnip
}, {
    nome: 'Roupa Cirúrgica para gatos',
    id: 5,
    animal: 'gato',
    valor: '35,27',
    promocao: 'Não há promoção disponível para este produto.',
    categoria: 'Saúde',
    img: roupacirurgica
}, {
    nome: 'Suplemento - Para fortalecer seu gato',
    id: 6,
    animal: 'gato',
    valor: '79,49',
    promocao: 'Não há promoção disponível para este produto.',
    categoria: 'Saúde',
    img: suplemento
}, {
    nome: 'Antiparasitário',
    id: 7,
    animal: 'gato',
    valor: '40,00',
    promocao: 'Não há promoção disponível para este produto.',
    categoria: 'Saúde',
    img: antiparasitario
}, {
    nome: 'Comida para coelho',
    id: 8,
    animal: 'coelho',
    valor: '24,50',
    promocao: 'Não há promoção disponível para este produto.',
    categoria: 'Alimentacao',
    img: comidacoelho1
}, {
    nome: 'Comida para coelho',
    id: 9,
    animal: 'coelho',
    valor: '13,50',
    promocao: 'Não há promoção disponível para este produto.',
    categoria: 'Alimentacao',
    img: comidacoelho2
}, {
    nome: 'Comida para Passaro',
    id: 10,
    animal: 'passaro',
    valor: '10,99',
    promocao: 'Não há promoção disponível para este produto.',
    categoria: 'Alimentacao',
    img: comidapassaro1
}, {
    nome: 'Comida para Passaro',
    id: 11,
    animal: 'passaro',
    valor: '73,20',
    promocao: 'Não há promoção disponível para este produto.',
    categoria: 'Alimentacao',
    img: comidapassaro2
}, {
    nome: 'Comida para Passaro',
    id: 12,
    animal: 'passaro',
    valor: '64,00',
    promocao: 'Não há promoção disponível para este produto.',
    categoria: 'Alimentacao',
    img: comidapassaro3
}, {
    nome: 'Comida para Passaro',
    id: 13,
    animal: 'passaro',
    valor: '12,00',
    promocao: 'Não há promoção disponível para este produto.',
    categoria: 'Alimentacao',
    img: comidapassaro2
}, {
    nome: 'Cama para Cachorro',
    id: 14,
    animal: 'cachorro',
    valor: '87,00',
    promocao: 'Não há promoção disponível para este produto.',
    categoria: 'Conforto',
    img: camacachorro
}, {
    nome: 'Casa para Gato',
    id: 15,
    animal: 'gato',
    valor: '122,00',
    promocao: 'Não há promoção disponível para este produto.',
    categoria: 'Conforto',
    img: casagato
}, {
    nome: 'Coleira cachorro - Tamanho M',
    id: 16,
    animal: 'cachorro',
    valor: '42,00',
    promocao: 'Não há promoção disponível para este produto.',
    categoria: 'Atrativos',
    img: coleiracachorro
}, {
    nome: 'Gaiola para Coelho',
    id: 17,
    animal: 'coelho',
    valor: '120,00',
    promocao: 'Não há promoção disponível para este produto.',
    categoria: 'Conforto',
    img: gaiolacoelho
}, {
    nome: 'Gaiola para Passaro',
    id: 18,
    animal: 'passaro',
    valor: '100,00',
    promocao: 'Não há promoção disponível para este produto.',
    categoria: 'Conforto',
    img: gaiolapassaro
}, {
    nome: 'Produto para coelho',
    id: 19,
    animal: 'coelho',
    valor: '60,00',
    promocao: 'Não há promoção disponível para este produto.',
    categoria: 'Saúde',
    img: prodcoelho
}, {
    nome: 'Roupa para Passaro - Tamanho PP',
    id: 20,
    animal: 'passaro',
    valor: '100,00',
    promocao: 'Não há promoção disponível para este produto.',
    categoria: 'Atrativos',
    img: roupapassaro
}, ];

export const ProdutoContext = createContext();

export const ProdutoProvider = ({ children }) => {
    const [produtos, setProdutos] = useState(initialState);

    const allProdutos = () => {
        return produtos;
    };

    return (
        <ProdutoContext.Provider value={{ allProdutos }}>
            {children}
        </ProdutoContext.Provider>
    );
}
