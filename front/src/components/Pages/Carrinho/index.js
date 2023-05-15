import './style.css';
import whiteIcon from '../../../assets/whiteIcon.png';
import del from '../../../assets/del.png'
import { useNavigate } from 'react-router-dom';
import Header from '../Header/index.js';
import Menu from "../menu/index.js"
import React from 'react';
import  { useContext } from 'react';
import { CarrinhoContext } from '../../../contexts/CarrinhoContext.js';
import useAuth from '../../../hooks/useAuth';
import { useState } from 'react';
import CompraFinalizada from '../CompraFinalizada';
import { Link} from "react-router-dom";

const Carrinho = () => {
    const navigate = useNavigate();
    const [isScreenWideEnough, setIsScreenWideEnough] = React.useState(false);
    const { items } = useContext(CarrinhoContext);
    const { adicionarProdutoCarrinho, quantidadeTotalItens, incrementItem, decrementItem, valorTotalItens, limparCarrinho } = useContext(CarrinhoContext);
    const itensExibicao = items.filter(item => item.quantidade > 0);
    const { user } = useAuth();



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
    
    const handleFinalizarCompra = () => {
        // Verificar se já há um carrinho salvo no localStorage para o usuário atual
        const carrinhoExistente = localStorage.getItem(`carrinho_${user.email}`);
    
        // Se já houver um carrinho existente, adicionar o novo pedido ao carrinho existente
        if (carrinhoExistente) {
            const carrinhoAtual = JSON.parse(carrinhoExistente);
            carrinhoAtual.items.push(...items);
            carrinhoAtual.valorTotal += valorTotalItens;
            localStorage.setItem(`carrinho_${user.email}`, JSON.stringify(carrinhoAtual));
        } 
        // Caso contrário, criar um novo carrinho com o pedido atual
        else {
            const carrinho = {
                items: items,
                valorTotal: valorTotalItens
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
                                        <input type="button" value="-" onClick={() => handleDecrementClick(item.id)} className="decrementar-item"/>
                                        <div className="produto-botoes">
                                        <img src={item.img} alt="Imagem do produto" />
                                        <p className='unidade-produto'>{item.quantidade}</p>
                                        </div>
                                        <input type="button" value="+" onClick={() => handleIncrementClick(item.id)} className="incrementar-item"/>
                                    </div>
                                </li>
                            ))}
                        {quantidadeTotalItens > 1 ? <p className='total-itens'>Total ({quantidadeTotalItens} itens): <span>{valorTotalItens}</span></p> :<p className='total-itens'>Total ({quantidadeTotalItens} item): <span className='cifrao-baixo'>R$</span>{valorTotalItens}</p>}
                        </ul>
                    </div>

                    <div className='endereco etapa'> 
                    <h2 className='textoCarrinho'>Endereço</h2>
                    <input type="text" placeholder='Insira o seu endereço' className="input-address" required/>
                    </div>

                    <div className='pagamento etapa'> 
                    <h2 className='textoCarrinho'>Forma de pagamento</h2>
                    <p className='exemplo'>O pagamento será feito na hora da entrega.</p>
                    </div>
                    <div className='botaoBox'>
                    <button className='botaoCancelar' onClick={()=>{navigate("/home")}}>
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
            <Menu/> 
        </div>  
        );
    }

export default Carrinho;