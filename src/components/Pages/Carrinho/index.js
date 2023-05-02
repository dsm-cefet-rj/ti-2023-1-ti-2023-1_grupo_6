import './style.css';
import whiteIcon from '../../../assets/whiteIcon.png';
import del from '../../../assets/del.png'
import { useNavigate } from 'react-router-dom';
import Header from '../Header/index.js';
import Menu from "../menu/index.js"
import React from 'react';
import  { useContext } from 'react';
import { CarrinhoContext } from '../CarrinhoContext/CarrinhoContext.js';

const Carrinho = () => {
    const navigate = useNavigate();
    const [isScreenWideEnough, setIsScreenWideEnough] = React.useState(false);
    const { carrinho } = useContext(CarrinhoContext);
    const { adicionarProdutoCarrinho, removerProdutoCarrinho, limparCarrinho } = useContext(CarrinhoContext);

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

    const handleAdicionarProduto = (produto) => {
        adicionarProdutoCarrinho(produto);
    };

    const handleRemoverProduto = (produtoId) => {
        removerProdutoCarrinho(produtoId);
    };

    const handleLimparCarrinho = () => {
        limparCarrinho();
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
                        {carrinho.produtos.map((produto) => (
                            <li key={produto.id}>
                                <div className="produto-container">
                                        <div className="produto-texto">
                                            <p>{produto.nome}</p>
                                            <p><span className='cifrao'>R$</span>{produto.valor}</p>
                                        </div>
                                        <input type="button" value="-" onClick={() => handleRemoverProduto(produto.id)} className="decrementar-item"/>
                                        <div className="produto-botoes">
                                            <img src={produto.img} alt="Imagem do produto" />
                                        <p className='unidade-produto'>{produto.quantidade}</p>
                                        </div>
                                        <input type="button" value="+" onClick={() => handleAdicionarProduto(produto)} className="incrementar-item"/>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        {carrinho.quantidade > 1 ? <p className='total-itens'>Total ({carrinho.quantidade} itens): <span>{carrinho.total}</span></p> :<p className='total-itens'>Total ({carrinho.quantidade} item): <span className='cifrao-baixo'>R$</span>{carrinho.total}</p>}
                    </div>

                    <div className='endereco etapa'> 
                        <h2 className='textoCarrinho'>Endereço</h2>
                        <input type="text" placeholder='Insira o seu endereço' className="input-address" required title="Por favor, preencha o endereço"/>
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
                                navigate(`/compraEfetuada`, { state: carrinho });
                                handleLimparCarrinho();
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