import { createSlice } from '@reduxjs/toolkit';
import catnip from "../../../src/assets/catnip-gatos.jpg";
import brinquedo from "../../../src/assets/brinquedo-cat.jpg";
import shampoo from "../../../src/assets/shampoo-cachorro.jpg";
import racao from "../../../src/assets/racao-cachorro.jpg";


const initialState = [{
    nome: 'Shampoo para cachorro',
    valor: '49,99',
    promocao: '35,99',
    categoria: 'Promoções',
    img: shampoo
}, {
    nome: 'Brinquedo para gato',
    valor: '17,59',
    promocao: 'Não há promoção disponível para este produto.',
    categoria: 'Diversão',
    img: brinquedo
}, {
    nome: 'Ração Gormeut',
    valor: '23,99',
    promocao: 'Não há promoção disponível para este produto.',
    categoria: 'Rações para Cachorros',
    img: racao
}, {
    nome: 'Catnip',
    valor: '10,99',
    promocao: 'Não há promoção disponível para este produto.',
    categoria: 'Atrativos',
    img:catnip
}];

const produtossSlice = createSlice({
    name: 'produtos',
    initialState,
});


export default produtossSlice.reducer;