import "./style.css";
import React from "react";
import Header from "../Header/index.js";
import Nav from "../navbar/index.js";
import { useContext } from "react";
import { CarrinhoContext } from "../../../contexts/CarrinhoContext";
import Menu from "../menu/index.js";
import { PContext } from "../../../contexts/p";

const Birds = () => {
  const [produtos, setProdutos] = React.useState([]); // [produtos, setProdutos
  const { allProdutos } = useContext(PContext);
  const { adicionarProdutoCarrinho } = useContext(CarrinhoContext);

  const handleAdicionarProduto = (produto) => {
    adicionarProdutoCarrinho(produto);
  };

  return (
    <div className="produtos-categoria-birds">
      <Header />
      <section className="produtos-birds">
        <h1>Produtos para Pássaro</h1>
        <ul className="ul-produtos-birds">
          {allProdutos()
            .filter((p) => p.animal === "passaro")
            .map((p) => (
              <li key={p.id}>
                <div>
                  <div className="img-produtos-birds">
                    <img src={p.img}></img>
                  </div>
                  <div className="paragrafo-vendas-birds">
                    <p>{p.nome}</p>
                    <p className="preco">
                      <span className="cifrao">R$</span>
                      {p.valor}
                    </p>
                    <input
                      type="submit"
                      value="Comprar"
                      onClick={() => handleAdicionarProduto(p)}
                      className="button-comprar-categoria-birds"
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

export default Birds;
