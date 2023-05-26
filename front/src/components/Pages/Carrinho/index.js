import './style.css';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/index.js';
import Menu from "../menu/index.js"
import React from 'react';
import { useContext } from 'react';
import { CarrinhoContext } from '../../../contexts/CarrinhoContext.js';
import useAuth from '../../../hooks/useAuth';
import { useState } from "react";

const Carrinho = () => {
    const navigate = useNavigate();
    const [isScreenWideEnough, setIsScreenWideEnough] = React.useState(false);
    const { items, marcarCompraRealizada } = useContext(CarrinhoContext);
    const { quantidadeTotalItens, incrementItem, decrementItem, valorTotalItens, limparCarrinho } = useContext(CarrinhoContext);
    const itensExibicao = items.filter(item => item.quantidade > 0);
    const { user } = useAuth();
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [CEP, setCEP] = useState("");

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

    const handleIncrementClick = (itemId) => {
        incrementItem(itemId);
    };

    const handleDecrementClick = (itemId) => {
        decrementItem(itemId);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNumber(event.target.value);
    };

    const handleCEPChange = (event) => {
        setCEP(event.target.value);
    };

    const handleFinalizarCompra = () => {
        const carrinhoExistente = localStorage.getItem(`carrinho_${user.email}`);

        if (carrinhoExistente) {
            const carrinhoAtual = JSON.parse(carrinhoExistente);
            carrinhoAtual.items.push(...items.map(item => ({ ...item, address }))); // Adicionar o endereço a cada item
            carrinhoAtual.valorTotal += valorTotalItens;
            localStorage.setItem(`carrinho_${user.email}`, JSON.stringify(carrinhoAtual));
        } else {
            const carrinho = {
                items: items.map(item => ({ ...item })), // Adicionar o endereço a cada item
                valorTotal: valorTotalItens,
                endereco: address,
                numero: number,
            };
            localStorage.setItem(`carrinho_${user.email}`, JSON.stringify(carrinho));
        }

        limparCarrinho();
        navigate(`/compraEfetuada`);
    };

    return (
        <div className="carrinho-background">
            <div>
                {isScreenWideEnough && <Header />}
            </div>
            <div className='carrinho'>
                <form className="form-carrinho">
                    <div className="produtos-carrinho">
                        <h2>Carrinho de compras</h2>
                        <ul className="ul-produtos">
                            {itensExibicao.map(item => (
                                <li key={item.id}>
                                    <div className="produto-container">
                                        <div className="produto-texto">
                                            <p>{item.nome}</p>
                                            <p><span className='cifrao'>R$</span>{item.valor}</p>
                                        </div>
                                        <input type="button" value="-" onClick={() => handleDecrementClick(item.id)} className="decrementar-item" />
                                        <div className="produto-botoes">
                                            <img src={item.img} alt="Imagem do produto" />
                                            <p className='unidade-produto'>{item.quantidade}</p>
                                        </div>
                                        <input type="button" value="+" onClick={() => handleIncrementClick(item.id)} className="incrementar-item" />
                                    </div>
                                </li>
                            ))}
                            {quantidadeTotalItens > 1 ? <p className='total-itens'>Total ({quantidadeTotalItens} itens): <span>{valorTotalItens}</span></p> : <p className='total-itens'>Total ({quantidadeTotalItens} item): <span className='cifrao-baixo'>R$</span>{valorTotalItens}</p>}
                        </ul>
                    </div>

                    <div className='endereco etapa'>
                        <h2 className='textoCarrinho'>Endereço de Entrega: </h2>
                        <input type="text" placeholder='Insira o seu endereço' className="input-address" value={address} onChange={handleAddressChange}
                            required />
                    </div>
                    <div className='pagamento etapa'>
                        <h2 className='textoCarrinho'>Forma de pagamento</h2>
                        <p className='exemplo'>O pagamento será feito na hora da entrega.</p>
                    </div>
                    <div className='botaoBox'>
                        <button className='botaoCancelar' onClick={() => { navigate("/home") }}>
                            Cancelar
                        </button>
                        <button type="submit" className='botaoConfirmar' onClick={() => {
                            handleFinalizarCompra();
                        }}>
                            Finalizar Compra
                        </button>
                    </div>
                </form>
            </div>
            <Menu />
        </div>
    );
}

export default Carrinho;