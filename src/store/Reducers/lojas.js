import { createSlice } from '@reduxjs/toolkit';
import petshop1 from "../../assets/petshop1.png";
import petshop2 from "../../assets/petshop2.png";
import petshop3 from "../../assets/petshop3.png";

const initialState = [{
    nome:'Gato pra Cachorro Pet Shop',
    animais_atendidos: "Gato • Cachorro • Coelho • Hamster",
    contato: "(21) 9 999-9999", 
    avaliacao: "5,0 ⭐⭐⭐⭐⭐",
    endereco: "Avenida Gato Fofo, 164",
    img: <img src={petshop1} alt="dog"/>,
    image:<img src={petshop1} alt="pet1" width="350" height="300px"/>,
    id: '12',
    descricao: 'loja!',
    url: "/loja-a"
},
{
    nome: "Cachorro Pet Shop", 
    animais_atendidos: "Cachorro • Coelho • Hamster", 
    contato: "(21) 9 999-9999",  avaliacao: "3,0 ⭐⭐⭐", 
    endereco: "Rua Gatinho Fofinho, 277",
    img: <img src={petshop2} alt="dog"/>,
    image:<img src={petshop2} alt="pet1" width="350" height="300px"/>,
    descricao: 'loja!',
    url: "/loja-b"
},
{
    nome: "Gato Pet Shop",
    animais_atendidos: "Gato • Pássaro • Hamster", contato: "(21) 9 999-9999",
    avaliacao: "3,0 ⭐⭐⭐",
    endereco: "Rua Gabi , 1163",
    img: <img src={petshop3} alt="dog"/>,
    image:<img src={petshop1} alt="pet1" width="350" height="300px"/>,
    descricao: 'loja!',
    url: "/loja-c"
}, {
    nome: "Pássaro Pet Shop", 
    animais_atendidos: "Pássaro • Gato • Hamster",
    contato: "(21) 9 999-9999",
    avaliacao: "4,0 ⭐⭐⭐⭐",
    endereco: "Rua Isa, 999",
    img: <img src={petshop1} alt="dog"/>,
    image:<img src={petshop1} alt="pet1" width="350" height="300px"/>,
    descricao: 'loja!',
    url: "/loja-d"
}];

const lojasSlice = createSlice({
    name: 'lojas',
    initialState,
});


export default lojasSlice.reducer;