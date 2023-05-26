import "./style.css";
import Header from "../Header/index.js";
import Nav from "../navbar/index.js";
import { useContext } from "react";
import { CarrinhoContext } from "../../../contexts/CarrinhoContext";
import React from "react";
import Menu from "../menu/index.js";
import { ProdutosContext } from "../../../contexts/ProdutosContext";

const Dogs = () => {
  const { adicionarProdutoCarrinho } = useContext(CarrinhoContext);
  const [isScreenWideEnough, setIsScreenWideEnough] = React.useState(false);
  const [produtos, setProdutos] = React.useState([]);
  const handleAdicionarProduto = (produto) => {
    adicionarProdutoCarrinho(produto);
  };
  const { allProdutos } = useContext(ProdutosContext)


  React.useEffect(() => {
    const handleResize = () => {
      setIsScreenWideEnough(window.innerWidth >= 768); // define a condição de largura mínima para exibir o Navbar
    };

    handleResize(); // define a largura da tela na montagem inicial do componente
    window.addEventListener("resize", handleResize); // adiciona um listener para o evento de redimensionamento da tela
    return () => {
      window.removeEventListener("resize", handleResize); // remove o listener do evento de redimensionamento da tela
    };
  }, []);

  return (
    <div className="produtos-categoria-dogs">
      <div>{isScreenWideEnough && <Header />}</div>
      <section className="produtos-dogs">
        <h1>Produtos para Cachorro</h1>
        <ul className="ul-produtos-dogs">
          {allProdutos()
            .filter((p) => p.animal && p.animal.includes("Cachorro") || p.animal && p.animal.includes("cachorro"))
            .map((p) => (
              <li key={p.id}>
                <div class="produtoss">
                  <div className="img-produtos-dogs">
                    <img src={p.img}></img>
                  </div>
                  <div className="paragrafo-vendas-dogs">
                    <p>{p.nome}</p>
                    <p className="preco">
                      <span className="cifrao">R$</span>
                      {p.valor}
                    </p>
                    <input
                      type="submit"
                      value="Comprar"
                      onClick={() => handleAdicionarProduto(p)}
                      className="button-comprar-categoria-dogs"
                    />
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </section>
      <Menu />
    </div>
  );
};

export default Dogs;
