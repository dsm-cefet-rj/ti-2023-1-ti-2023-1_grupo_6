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
import loja from '../store/Reducers/lojas.js';
import AdicionarLoja from '../components/Pages/Estabelecimento/AdicionarEstabelecimento.js';
import LojaDetalhes from '../components/Pages/Estabelecimento/Lojas.js';
import { useSelector } from 'react-redux';

const Private = ({ Item }) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item/> : <Login/>; //se estiver logado, retorna o item que foi passado. Caso contrário, irá para a página de login.
};

const RoutesApp = () => {
    const initialState = useSelector((state) => state.lojas);
    return (

        
        <BrowserRouter>
            <CarrinhoContextProvider>
            <Fragment>
                <Routes>
                    <Route path="/registrarEstabelecimento" element={<ShopRegistration/>}/>
                    <Route path="/" element={<Login/>}/>
                    <Route path="*" element={<Login/>}/>
                    <Route path="/home" element={<Private Item={Home}/>}/>
                    <Route path="/carrinho" element={<Private Item = {Carrinho}/>}/>
                    <Route path="/registrar/usuario" element={<UserRegistration/>}/>
                    <Route path="/opcao/registrar" element={<OptionRegistration/>}/>
                    <Route path="/menu" element={<Private Item = {Menu}/>}/>
                    <Route path="/home/lojas" element={<Private Item = {Lojas}/>}/>
                    <Route path="/" element={<LojaDetalhes />} />
                {initialState.map((loja) => (
                    <Route
                    key={loja.id}
                    path={`/lojas${loja.url}`}
                    element={<LojaDetalhes
                        nome={loja.nome}
                        animais_atendidos={loja.animais_atendidos}
                        contato={loja.contato}
                        avaliacao={loja.avaliacao}
                        endereco={loja.endereco}
                        img={loja.img}
                        image={loja.image}
                        descricao={loja.descricao}
                    />}
                    />
                ))}
                    <Route path="/adicionarLoja" element={<AdicionarLoja />}/>
                    <Route path="/perfil" element={<Private Item = {ConsumerProfile}/>}/>
                    <Route path="/passaros" element={<Private Item = {Birds}/>}/>
                    <Route path="/gatos" element={<Private Item = {Cats}/>}/>
                    <Route path="/cachorros" element={<Private Item = {Dogs}/>}/>
                    <Route path="/hamsters" element={<Private Item = {Hamsters}/>}/>
                    <Route path="/coelho" element={<Private Item = {Rabbit}/>}/>
                    <Route path="/compraEfetuada" element={<Private Item = {CompraFinalizada}/>}/>
                    <Route path="/" element={<LojaDetalhes />} />
                {initialState.map((loja) => (
                    <Route
                    key={loja.id}
                    path={`/lojas${loja.url}`}
                    element={<LojaDetalhes
                        nome={loja.nome}
                        animais_atendidos={loja.animais_atendidos}
                        contato={loja.contato}
                        avaliacao={loja.avaliacao}
                        endereco={loja.endereco}
                        img={loja.img}
                        image={loja.image}
                        descricao={loja.descricao}
                    />}
                    />
                ))}
                </Routes>  
            </Fragment>     
            </CarrinhoContextProvider>
        </BrowserRouter>
    
    );
};

export default RoutesApp;

