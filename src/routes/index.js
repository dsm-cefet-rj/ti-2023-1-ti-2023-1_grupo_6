import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Login from '../../src/components/Pages/Login/index.js';
import Home from '../../src/components/Pages/Home/index.js'
import Carrinho from '../../src/components/Pages/Carrinho/index.js'
import CompraFinalizada from '../../src/components/Pages/CompraFinalizada/index.js'
import UserRegistration from '../../src/components/Pages/UserRegistration/UserRegistration.js'
import Menu from '../../src/components/Pages/menu/index.js'
import OptionRegistration from '../../src/components/Pages/OptionRegistration/index.js';
import Lojas from '../../src/components/Pages/Lojas';
import Servicos from '../../src/components/Pages/Servicos';
import ConsumerProfile from '../../src/components/Pages/consumerProfile/index.js';
import ShopRegistration from '../../src/components/Pages/ShopRegistration/index.js';
import Birds from '../../src/components/Pages/Birds/index.js';
import Cats from '../../src/components/Pages/Cats/index.js';
import Hamsters from '../../src/components/Pages/Hamsters/index.js';
import Dogs from '../../src/components/Pages/Dogs/index.js';
import Rabbit from '../../src/components/Pages/Rabbit/index.js';
import useAuth from '../hooks/useAuth.js';
import CarrinhoContextProvider from '../components/Pages/CarrinhoContext/CarrinhoContext.js';

const Private = ({ Item }) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item/> : <Login/>; //se estiver logado, retorna o item que foi passado. Caso contrário, irá para a página de login.
};

const RoutesApp = () => {
    return (
        
        <BrowserRouter>
            <CarrinhoContextProvider>
            <Fragment>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="*" element={<Login/>}/>
                    <Route path="/home" element={<Private Item={Home}/>}/>
                    <Route path="/carrinho" element={<Private Item = {Carrinho}/>}/>
                    <Route path="/registrar/usuario" element={<UserRegistration/>}/>
                    <Route path="/opcao/registrar" element={<OptionRegistration/>}/>
                    <Route path="/menu" element={<Private Item = {Menu}/>}/>
                    <Route path="/home/lojas" element={<Private Item = {Lojas}/>}/>
                    <Route path="/home/lojas/servicos/:lojaId" element={<Private Item = {Servicos}/>}/>
                    <Route path="/perfil" element={<Private Item = {ConsumerProfile}/>}/>
                    <Route path="/registrarEstabelecimento" element={<Private Item = {ShopRegistration}/>}/>
                    <Route path="/passaros" element={<Private Item = {Birds}/>}/>
                    <Route path="/gatos" element={<Private Item = {Cats}/>}/>
                    <Route path="/cachorros" element={<Private Item = {Dogs}/>}/>
                    <Route path="/hamsters" element={<Private Item = {Hamsters}/>}/>
                    <Route path="/coelho" element={<Private Item = {Rabbit}/>}/>
                    <Route path="/compraEfetuada" element={<Private Item = {CompraFinalizada}/>}/>
                </Routes>  
            </Fragment>     
            </CarrinhoContextProvider>
        </BrowserRouter>
    
    );
};

export default RoutesApp;

