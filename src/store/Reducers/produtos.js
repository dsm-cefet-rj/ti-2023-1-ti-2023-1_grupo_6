import {
    createSlice
} from '@reduxjs/toolkit';
import catnip from "../../../src/assets/catnip-gatos.png";
import brinquedo from "../../../src/assets/brinquedo-cat.png";
import shampoo from "../../../src/assets/shampoo-cachorro.png";
import racao from "../../../src/assets/racao-cachorro.png";
import suplemento from "../../../src/assets/suplemento-gato.png";
import roupacirurgica from "../../../src/assets/roupacirurgica-gato.png";
import arranhadorgato from "../../../src/assets/arranhador-gato.png";
import antiparasitario from "../../../src/assets/antiparasitario-gato.png";
import comidacoelho1 from "../../../src/assets/comida-coelho.png";
import comidacoelho2 from "../../../src/assets/comida2-coelho.png";
import comidapassaro1 from "../../../src/assets/comida2-passaro.png";
import comidapassaro2 from "../../../src/assets/comida3-passaro.png";
import comidapassaro3 from "../../../src/assets/comida4-passaro.png";
import camacachorro from "../../../src/assets/cama-cachorro.png";
import casagato from "../../../src/assets/casa-gato.png";
import coleiracachorro from "../../../src/assets/coleira-cachorro.png";
import gaiolacoelho from "../../../src/assets/gaiola-coelho.png";
import gaiolapassaro from "../../../src/assets/gaiola-passaro.png";
import prodcoelho from "../../../src/assets/prod-coelho.png";
import roupapassaro from "../../../src/assets/roupa-passaro.png";





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
    animal: 'passaro',
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
}, ];

const produtossSlice = createSlice({
    name: 'produtos',
    initialState,
});


export default produtossSlice.reducer;