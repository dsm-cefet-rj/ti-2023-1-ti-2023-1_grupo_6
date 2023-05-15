import React from "react";
import ReactDOM from 'react-dom';
import './style.css';
import Header from '../Header/index.js';
import { useLocation } from 'react-router-dom';
import  { useContext } from 'react';
import { CarrinhoContext } from '../../../contexts/CarrinhoContext.js';
import { useNavigate } from 'react-router-dom';
import PedidosAndamento from "../pedidoEmAndamento";
import useAuth from "../../../hooks/useAuth";

const renderProdutos = (props) =>{
    ReactDOM.render(<PedidosAndamento produtos={props}/>, document.getElementById('root'));
}

const Pedidos = () => {
    const [isScreenWideEnough, setIsScreenWideEnough] = React.useState(false);
    const { user } = useAuth();
    const carrinhoUser = JSON.parse(localStorage.getItem(`carrinho_${user.email}`));
    
    React.useEffect(() => {
        const handleResize = () => {
        setIsScreenWideEnough(window.innerWidth >= 768); // define a condição de largura mínima para exibir o Navbar
        };

        handleResize(); // define a largura da tela na montagem inicial do componente
        window.addEventListener('resize', handleResize); // adiciona um listener para o evento de redimensionamento da tela
        return () => {
        window.removeEventListener('resize', handleResize); // remove o listener do evento de redimensionamento da tela
        };
    }, []);

    return (
        <div class="pedidos-usuario">
            <div>
            {isScreenWideEnough && <Header />}
            </div>
            <h2>Seus pedidos:</h2>
            <ul class="ul-pedidos">
                {carrinhoUser.items.map(item => (
                    <li key={item.id}>
                        <div>
                            <h3>Pedido: {item.nome} <br/> Total: R$ {item.valor} </h3>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pedidos;