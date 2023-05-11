import React from "react";
import "./style2.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from 'react-redux';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CarrinhoContext } from "../../../contexts/CarrinhoContext.js";
import "./style.css";
import Header from "../Header/index.js";
import Menu from "../menu/index.js";
import mostrarConfirmacao from "../../../utils/confirmacao-compra";
import { LojaContext } from "../../../contexts/LojasContext";
const Lojas = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { adicionarProdutoCarrinho } = useContext(CarrinhoContext);
  const { buscasLoja } = useContext(LojaContext);
  const [isScreenWideEnough, setIsScreenWideEnough] = React.useState(false);
  const [carrinho, setCarrinho] = useState([]);
  const [exibirIframe, setExibirIframe] = useState(false);
  const [nome, setNome] = useState("");
  const [animais_atendidos, setAnimais_atendidos] = useState("");
  const [contato, setContato] = useState("");
  const [avaliacao, setAvaliacao] = useState("");
  const [endereco, setEndereco] = useState("");
  const [img, setImg] = useState(null);
  const [image, setImage] = useState(null);
  const [descricao, setDescricao] = useState("");
  const [produtosArray, setProdutosArray] = useState([]);
  const produtos = useSelector((state) => state.produtos) ?? [];
  React.useEffect(() => {
    // const handleResize = () => {
    //   setIsScreenWideEnough(window.innerWidth >= 768); // define a condição de largura mínima para exibir o menu
    // };

    const {
      nome,
      animais_atendidos,
      contato,
      avaliacao,
      endereco,
      img,
      image,
      descricao,
      produtosArray,
    } = buscasLoja(id);

    setNome(nome);
    setAnimais_atendidos(animais_atendidos);
    setContato(contato);
    setAvaliacao(avaliacao);
    setEndereco(endereco);
    setImg(img);
    setImage(image);
    setDescricao(descricao);
    setProdutosArray(produtos);

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
    setExibirIframe(true);
  };

  return (
    <div>
            <div className='services-lojas'>
            {isScreenWideEnough && <Header />}
            <div className='loja'>
            <h1>{nome}</h1>
            <p>{animais_atendidos}, {endereco}, {contato}</p>
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
};
export default Lojas;
