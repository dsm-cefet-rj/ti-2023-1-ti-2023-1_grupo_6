import React from "react";
import './style.css';
import Header from '../Header/index.js';
import { useNavigate } from 'react-router-dom';
import  { useContext } from 'react';
import { CarrinhoContext } from '../CarrinhoContext/CarrinhoContext.js';

const Pedidos = () => {
    const navigate = useNavigate()
    const [isScreenWideEnough, setIsScreenWideEnough] = React.useState(false);
    const { carrinho } = useContext(CarrinhoContext);

    React.useEffect(() => {
        const handleResize = () => {
        setIsScreenWideEnough(window.innerWidth >= 768); // define a condição de largura mínima para exibir o Navbar
        };

        handleResize(); // define a largura da tela na montagem inicial do componente
        window.addEventListener('resize', handleResize); // adiciona um listener para o evento de redimensionamento da tela
        return () => {
        window.removeEventListener('resize', handleResize); // remove o listener do evento de redimensionamento da tela
        };
    }, 
    []);

    return (
        <div className="lista-pedidos">
            <div>
            {isScreenWideEnough && <Header />}
            </div>
            <h2>Pedidos efetuados</h2>
        </div>
    );
};

export default Pedidos;
