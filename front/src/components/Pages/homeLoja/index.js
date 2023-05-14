import React from "react";
import "./style.css";
import HeaderLoja from "../HeaderLoja";
import useAuth from "../../../hooks/useAuth";
import { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { LojaContext } from '../../../contexts/LojasContext';
import { ProdutosContext } from "../../../contexts/ProdutosContext";
import { Link} from "react-router-dom";

export default function HomeLoja() {
  const { buscasLojaNome } = useContext(LojaContext);
  const { allLojas, allProdutos } = useContext(ProdutosContext);
  const { nome } = useParams();
  const loja = buscasLojaNome(nome);
  const n = loja.nome;
  const id = loja.id;
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const produtosLocalStorage = JSON.parse(localStorage.getItem('produtos') || '[]');
    setProdutos(produtosLocalStorage);
  }, []);
  console.log(produtos);

  return (
    <div className="homeLoja">
      <HeaderLoja lj={n} id={id} />
      <div className="infos-lojas-home">
        <h1>{loja.nome}</h1>
      </div>
      <div className="produtos-adicionados-na-loja">
        <h2>Produtos da loja</h2>
      </div>
      <div>
      {produtos.filter(p => loja.id === p.lojaId).map((p) => (
          <div key={p.id}>
            {p.nome}
            <img src={p.id? window.location.origin + `/assets/item${p.id}.png` : window.location.origin + '/assets/produtoDefault.jpeg'} alt="lojaImage"/>
          </div>
      ))}
      </div>
    </div>
  );
}
