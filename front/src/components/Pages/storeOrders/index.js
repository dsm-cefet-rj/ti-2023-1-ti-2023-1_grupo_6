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
    const { getAllCarrinhos } = useContext(CarrinhoContext);
    const produtos = allProdutos();
    const t = getAllCarrinhos();

    const itensFiltrados = t.flatMap(carrinho => {
        if (carrinho.items) {
            return carrinho.items.filter(item => item.lojaId === lojaId);
        }
        return [];
    });

    return (
        <div className="pedidos-usuario">
            <div>
                <HeaderLoja />
            </div>
            <h2>Pedidos recebidos:</h2>
            <ul className="ul-pedidos">
                {itensFiltrados.map((item) =>
                        <li key={item.id}>
                            <div>
                                <h3>Pedido: {item.nome} <br/> Total: R$ {item.valor} {item.loja}</h3>
                                <div className="item-pedido">
                                    <img src={item.img} alt="img-pedido"/>
                                </div>
                            </div>
                        </li>
                )}
            </ul> 
        </div>
    );
};

export default StoreOrders;