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

const renderProdutos = (props) => {
    ReactDOM.render(
        <PedidosAndamento produtos={props} />,
        document.getElementById("root")
    );
};

const StoreOrders = () => {
    const { user } = useAuth();
    //const { carrinhoUser } = useContext(CarrinhoContext);
    const { id } = useParams();
    const { buscasLoja } = useContext(LojaContext);
    const loja = buscasLoja(id);
    const lojaId = loja.id;
    const { allProdutos } = useContext(ProdutosContext);
    const { getAllCarrinhos } = useContext(CarrinhoContext);
    const produtos = allProdutos();
    const t = getAllCarrinhos();
    const [enviado, setEnviado] = useState(false);
    const [itensEnviados, setItensEnviados] = useState([]);
    const { email } = user; // Acesso ao email do usuário

    const itensFiltrados = t.flatMap(carrinho => {
        if (carrinho.carrinho.items) {
            return carrinho.carrinho.items.filter(item => item.lojaId === lojaId)
                .map(item => ({
                id: item.id, // Adicione a propriedade 'id'
                nome: item.nome, // Adicione a propriedade 'nome'
                valor: item.valor, // Adicione a propriedade 'valor'
                loja: item.loja, // Adicione a propriedade 'loja'
                email: carrinho.email // Acesse o email do carrinho
            }));
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
                            <h3>
                                Pedido: {item.nome} <br />
                                Total: R$ {item.valor} {item.loja} <br />
                                Comprado por:  <span className="email-item">{item.email}</span>
                            </h3>
                            <button className="btn-confirmar-pedido">
                                Enviar Pedido
                            </button>
                            <div className="item-pedido">
                                </div>
                            </div>
                        </li>
                )}
            </ul> 
        </div>
    );
};

export default StoreOrders;