import React from "react";
import ReactDOM from 'react-dom';
import './style.css';
import { CarrinhoContext } from '../../../contexts/CarrinhoContext.js';
import PedidosAndamento from "../pedidoEmAndamento";
import { LojaContext } from '../../../contexts/LojasContext';
import { useParams } from "react-router-dom";
import { useContext } from 'react';
import HeaderLoja from "../HeaderLoja";

const renderProdutos = (props) => {
    ReactDOM.render(
        <PedidosAndamento produtos={props} />,
        document.getElementById("root")
    );
};

const StoreOrders = () => {
    const { id } = useParams();
    const { buscasLoja } = useContext(LojaContext);
    const loja = buscasLoja(id);
    const lojaId = loja.id;
    const { getAllCarrinhos } = useContext(CarrinhoContext);
    const t = getAllCarrinhos();

    const itensFiltrados = t.flatMap(carrinho => {
        if (carrinho.carrinho.items) {
            return carrinho.carrinho.items.filter(item => item.lojaId === lojaId)
                .map(item => ({
                    id: item.id, // Adicione a propriedade 'id'
                    nome: item.nome, // Adicione a propriedade 'nome'
                    valor: item.valor, // Adicione a propriedade 'valor'
                    loja: item.loja, // Adicione a propriedade 'loja'
                    email: carrinho.email, // Acesse o email do usuario que comprou o item
                    endereco: item.endereco, /// Acesse o endereco do usuario que comprou o item
                }));
        }
        return [];
    });

    console.log(itensFiltrados);

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
                                Comprado por:  <span className="email-item">{item.email}</span> <br />
                                Endereço de envio: <span className="endereco-item">{item.endereco}</span>
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