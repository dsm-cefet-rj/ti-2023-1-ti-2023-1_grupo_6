import React from 'react';
import './style2.css';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
    import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CarrinhoContext } from '../CarrinhoContext/CarrinhoContext.js';
import './style.css'
import Header from "../Header/index.js";
import Menu from "../menu/index.js";
import mostrarConfirmacao from '../../../utils/confirmacao-compra';
const Lojas = ({

    nome,
    animais_atendidos,
    contato,
    avaliacao,
    endereco,
    img,
    descricao
}) => {

    const location = useLocation();
    const {
        loja
    } = location.state || {};
    const produtos = useSelector((state) => state.produtos) ?? [];
    const [isScreenWideEnough, setIsScreenWideEnough] = React.useState(false);
    const navigate = useNavigate();
    const [carrinho, setCarrinho] = useState([]);
    const {
        adicionarProdutoCarrinho
    } = useContext(CarrinhoContext);
    const [exibirIframe, setExibirIframe] = useState(false);

    React.useEffect(() => {
            const handleResize = () => {
                setIsScreenWideEnough(window.innerWidth >= 768); // define a condição de largura mínima para exibir o menu
            };

            handleResize(); // define a largura da tela na montagem inicial do componente
            window.addEventListener('resize', handleResize); // adiciona um listener para o evento de redimensionamento da tela
            return () => {
                window.removeEventListener('resize', handleResize); // remove o listener do evento de redimensionamento da tela
            };
        },
        []);

    const getProdutosByCategoria = (categoria, produtos) => {
        return produtos.filter((produto) => produto.categoria === categoria);
    };

    const handleAdicionarProduto = (produto) => {
        adicionarProdutoCarrinho(produto);
        setExibirIframe(true);
    };

    return (

        <div>
            <div className='services-lojas'>
            {isScreenWideEnough && <Header />}
            <div className='loja'>
            <h1>{nome}</h1>
            <p>{animais_atendidos}, {endereco}, {contato}</p>
            <p>{descricao}</p>
            <p>{avaliacao}</p>
            <section className="animais-compras-loja1">
                <h3>Saúde</h3>
                <ul className="ul-loja">
                    {getProdutosByCategoria('Saúde', produtos).map((produto) => (
                        <li key={produto.nome}>
                        <img src={produto.img} alt={produto.nome} />
                            <div className="paragrafo-vendas">
                                <p>{produto.nome}</p>
                                <p className='preco'><span className='cifrao'>R$</span>{produto.valor}</p>
                            </div>
                            <input type="submit" value="Comprar" onClick={() => {handleAdicionarProduto(produto); mostrarConfirmacao();
                            }} className='button-comprar-servicos'/>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="animais-promocoes-loja1">
                <h3>Promoções</h3>
                <ul className="ul-loja">
                    {getProdutosByCategoria('Promoções', produtos).map((produto) => (
                        <li key={produto.nome}>
                        <img src={produto.img} alt={produto.nome} />
                            <div className="paragrafo-vendas">
                                <p>{produto.nome}</p>
                                <p className='preco'>
                                <span className='cifrao'>R$</span>{produto.promocao}
                                {produto.valor !== produto.promocao &&
                                    <span className='preco-antigo'>R${produto.valor}</span>}
                                </p>
                                <input type="submit" value="Comprar" onClick={() => {handleAdicionarProduto(produto); mostrarConfirmacao();
                            }} className='button-comprar-servicos'/>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="animais-servicos-loja1">
                <h3>Diversão</h3>
                <ul className="ul-loja">
                    {getProdutosByCategoria('Diversão', produtos).map((produto) => (
                        <li key={produto.nome}>
                        <img src={produto.img} alt={produto.nome} />
                            <div className="paragrafo-vendas">
                                <p>{produto.nome}</p>
                                <p className='preco'><span className='cifrao'>R$</span>{produto.valor}</p>
                            </div>
                            <input type="submit" value="Comprar" onClick={() => {handleAdicionarProduto(produto); mostrarConfirmacao();
                            }} className='button-comprar-servicos'/>
                        </li>
                    ))}
                    </ul>
            </section>
            <section className="animais-compras-loja1">
                <h3>Alimentação</h3>
                <ul className="ul-loja">
                    {getProdutosByCategoria('Alimentacao', produtos).map((produto) => (
                        <li key={produto.nome}>
                        <img src={produto.img} alt={produto.nome} />
                            <div className="paragrafo-vendas">
                                <p>{produto.nome}</p>
                                <p className='preco'><span className='cifrao'>R$</span>{produto.valor}</p>
                            </div>
                            <input type="submit" value="Comprar" onClick={() => {handleAdicionarProduto(produto); mostrarConfirmacao();
                            }} className='button-comprar-servicos'/>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="animais-compras-loja1">
                <h3>Conforto</h3>
                <ul className="ul-loja">
                    {getProdutosByCategoria('Conforto', produtos).map((produto) => (
                        <li key={produto.nome}>
                        <img src={produto.img} alt={produto.nome} />
                            <div className="paragrafo-vendas">
                                <p>{produto.nome}</p>
                                <p className='preco'><span className='cifrao'>R$</span>{produto.valor}</p>
                            </div>
                            <input type="submit" value="Comprar" onClick={() => {handleAdicionarProduto(produto); mostrarConfirmacao();
                            }} className='button-comprar-servicos'/>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="animais-compras-loja1">
                <h3>Atrativos</h3>
                <ul className="ul-loja">
                    {getProdutosByCategoria('Atrativos', produtos).map((produto) => (
                        <li key={produto.nome}>
                        <img src={produto.img} alt={produto.nome} />
                            <div className="paragrafo-vendas">
                                <p>{produto.nome}</p>
                                <p className='preco'><span className='cifrao'>R$</span>{produto.valor}</p>
                            </div>
                            <input type="submit" value="Comprar" onClick={() => {handleAdicionarProduto(produto); mostrarConfirmacao();
                            }} className='button-comprar-servicos'/>
                        </li>
                    ))}
                    </ul>
            </section>
            </div>
            </div>
            <Menu />
            </div>
    );
}
export default Lojas;