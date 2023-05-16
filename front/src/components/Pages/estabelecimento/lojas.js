import React from "react";
import "./style2.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CarrinhoContext } from "../../../contexts/CarrinhoContext.js";
import "./style.css";
import Header from "../Header/index.js";
import Menu from "../menu/index.js";
import mostrarConfirmacao from "../../../utils/confirmacao-compra";
import { LojaContext } from "../../../contexts/LojasContext";
import { ProdutosContext } from "../../../contexts/ProdutosContext";
import useAuth from "../../../hooks/useAuth";

const Lojas = () => {
    const navigate = useNavigate();
    const { buscasLoja } = useContext(LojaContext);
    const { id } = useParams();
    const { adicionarProdutoCarrinho } = useContext(CarrinhoContext);
    const [isScreenWideEnough, setIsScreenWideEnough] = React.useState(false);
    const [exibirIframe, setExibirIframe] = useState(false);
    const [nome, setNome] = useState("");
    const [animais_atendidos, setAnimais_atendidos] = useState("");
    const [animaisAtendidos, setAnimaisAtendidos] = useState("");
    const [contato, setContato] = useState("");
    const [endereco, setEndereco] = useState("");
    const { allProdutos } = useContext(ProdutosContext);
    const { user } = useAuth();
    
    React.useEffect(() => {
        const handleResize = () => {
          setIsScreenWideEnough(window.innerWidth >= 768); // define a condição de largura mínima para exibir o menu
        };

        const {
        nome,
        animais_atendidos,
        animaisAtendidos,
        contato,
        endereco,
        } = buscasLoja(id);

        setNome(nome);
        setAnimaisAtendidos(animaisAtendidos);
        setAnimais_atendidos(animais_atendidos);
        setContato(contato);
        setEndereco(endereco);
    }, []);

    
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
        localStorage.setItem(`carrinho_${user.cpf}`, JSON.stringify(produto));
        console.log(localStorage.getItem(`carrinho_${user.cpf}`));
        setExibirIframe(true);
    };

    return (
    <div>
            <div className='services-lojas'>
            {isScreenWideEnough && <Header />}
            <div className='loja'>
            <h1>{nome}</h1>
            <p>{animaisAtendidos}{animais_atendidos}, {endereco}, {contato}</p>
            <section className="animais-compras-loja1">
                <h3>Adicionados Recentemente</h3>
                <ul className="ul-loja">
                    {allProdutos().filter(produto => id === produto.lojaId).map((produto) => (
                        <li key={produto.nome}>
                        <img src={produto.img} alt={produto.nome} />
                            <div className="paragrafo-vendas">
                                <p>{produto.nome}</p>
                                <p className='preco'><span className='cifrao'>R$</span>{produto.valor.replace('.',',')}</p>
                            </div>
                            <input type="submit" value="Comprar" onClick={() => {handleAdicionarProduto(produto); mostrarConfirmacao();
                            }} className='button-comprar-servicos'/>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="animais-compras-loja1">
                <h3>Saúde</h3>
                <ul className="ul-loja">
                    {getProdutosByCategoria('Saúde', allProdutos()).map((produto) => (
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
                    {getProdutosByCategoria('Promoções', allProdutos()).map((produto) => (
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
                    {getProdutosByCategoria('Diversão', allProdutos()).map((produto) => (
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
                    {getProdutosByCategoria('Alimentacao', allProdutos()).map((produto) => (
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
                    {getProdutosByCategoria('Conforto', allProdutos()).map((produto) => (
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
                    {getProdutosByCategoria('Atrativos', allProdutos()).map((produto) => (
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
};
export default Lojas;
