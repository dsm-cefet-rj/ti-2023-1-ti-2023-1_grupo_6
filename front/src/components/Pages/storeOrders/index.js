import React from "react";
import ReactDOM from 'react-dom';
import './style.css';
import { CarrinhoContext } from '../../../contexts/CarrinhoContext.js';
import { useNavigate } from 'react-router-dom';
import PedidosAndamento from "../pedidoEmAndamento";
import useAuth from "../../../hooks/useAuth";
import { LojaContext } from '../../../contexts/LojasContext';
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from 'react';
import { ProdutosContext } from '../../../contexts/ProdutosContext';
import HeaderLoja from "../HeaderLoja";

const renderProdutos = (props) =>{
    ReactDOM.render(<PedidosAndamento produtos={props}/>, document.getElementById('root'));
}

const StoreOrders = () => {
    const { user } = useAuth();
    //const { carrinhoUser } = useContext(CarrinhoContext);
    const carrinhoUser = JSON.parse(localStorage.getItem(`carrinho_${user.email}`));
    const { id } = useParams();
    const { buscasLoja } = useContext(LojaContext);
    const loja = buscasLoja(id);
    const lojaId = loja.id;
    const { allProdutos } = useContext(ProdutosContext);
    const produtos = allProdutos();
    console.log(produtos);
    console.log(lojaId);

          // Filtrar os itens do carrinho com base no lojaId
            const itemsDaLoja = produtos.filter(item => item.lojaId === lojaId);
            console.log(itemsDaLoja);

    

    return (
        <div className="pedidos-usuario">
            <div>
                <HeaderLoja />
            </div>
            <h2>Pedidos recebidos:</h2>
            <ul className="ul-pedidos">
                {itemsDaLoja.map(item => (
                        <li key={item.id}>
                            <div>
                                <h3>Pedido: {item.nome} <br/> Total: R$ {item.valor} {item.loja}</h3>
                                <div className="item-pedido">
                                    <img src={item.img} alt="img-pedido"/>
                                </div>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default StoreOrders;