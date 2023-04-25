import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Login from '../components/Pages/Login/index.js';
import Home from '../components/Pages/Home/index.js'
import Carrinho from '../components/Pages/Carrinho/index.js'
import CompraFinalizada from '../components/Pages/CompraFinalizada/index.js'
import UserRegistration from '../components/Pages/UserRegistration/UserRegistration.js'
import Menu from '../components/Pages/menu/index.js'
import OptionRegistration from '../components/Pages/OptionRegistration/index.js';
import Lojas from '../components/Pages/Lojas';
import Servicos from '../components/Pages/Servicos';
import ConsumerProfile from '../components/Pages/consumerProfile/index.js';
import ShopRegistration from '../components/Pages/ShopRegistration/index.js';
import Birds from '../components/Pages/Birds/index.js';
import Cats from '../components/Pages/Cats/index.js';
import Hamsters from '../components/Pages/Hamsters/index.js';
import Dogs from '../components/Pages/Dogs/index.js';
import Rabbit from '../components/Pages/Rabbit/index.js';
import useAuth from '../hooks/useAuth.js';
import CarrinhoContextProvider from '../components/Pages/CarrinhoContext/CarrinhoContext.js';
import Pedidos from '../components/Pages/pedidos/index.js';
//import PedidosAndamento from '../components/Pages/pedidoEmAndamento/index.js';
import AddSection from '../components/Pages/AddSection/index.js'
import AddProducts from '../components/Pages/AddProducts/index.js'
import LoginEstabelecimento from '../components/Pages/LoginEstabelecimento/index.js';

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
                    <Route path="/LoginEstabelecimento" element={<LoginEstabelecimento/>}/>
                    <Route path="*" element={<Login/>}/>
                    <Route path="/home" element={<Private Item={Home}/>}/>
                    <Route path="/carrinho" element={<Private Item = {Carrinho}/>}/>
                    <Route path="/registrar/usuario" element={<UserRegistration/>}/>
                    <Route path="/opcao/registrar" element={<OptionRegistration/>}/>
                    <Route path="/menu" element={<Private Item = {Menu}/>}/>
                    <Route path="/home/lojas" element={<Private Item = {Lojas}/>}/>
                    <Route path="/home/lojas/servicos/:lojaId" element={<Private Item = {Servicos}/>}/>
                    <Route path="/perfil" element={<Private Item = {ConsumerProfile}/>}/>
                    <Route path="/registrar/estabelecimento" element={<ShopRegistration/>}/>
                    <Route path="/passaros" element={<Private Item = {Birds}/>}/>
                    <Route path="/gatos" element={<Private Item = {Cats}/>}/>
                    <Route path="/cachorros" element={<Private Item = {Dogs}/>}/>
                    <Route path="/hamsters" element={<Private Item = {Hamsters}/>}/>
                    <Route path="/coelho" element={<Private Item = {Rabbit}/>}/>
                    <Route path="/compraEfetuada" element={<Private Item = {CompraFinalizada}/>}/>
                    <Route exact path="/pedidos" element={<Private Item = {Pedidos}/>}/>
                    <Route path="/adicionar/secao" element={<AddSection/>}/>
                    <Route path="/adicionar/produto" element={<AddProducts/>}/>
                </Routes>  
            </Fragment>     
            </CarrinhoContextProvider>
        </BrowserRouter>
    
    );
};

export default RoutesApp;

