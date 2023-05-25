import React from "react";
import HeaderLoja from "../HeaderLoja";
import useAuth from "../../../hooks/useAuth";
import { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { LojaContext } from '../../../contexts/LojasContext';
import { ProdutosContext } from "../../../contexts/ProdutosContext";
import { Link} from "react-router-dom";
import './style.css';

export default function HomeLoja() {
  const { buscasLoja } = useContext(LojaContext);
  const { allProdutos, removerProduto } = useContext(ProdutosContext);
  const { id } = useParams();
  const [produtos, setProdutos] = useState([]);
  const loja = buscasLoja(id);
  
  useEffect(() => {
    const produtosLocalStorage = JSON.parse(localStorage.getItem('produtos') || '[]');
    setProdutos(produtosLocalStorage);
  }, []);

  const handleRemoveClick = (id) => {
    removerProduto(id);
    const updatedProdutos = produtos.filter((p) => p.id !== id);
    setProdutos(updatedProdutos);
    localStorage.setItem('produtos', JSON.stringify(updatedProdutos));
  };
  

  return (
    <div className="homeLoja">
      <HeaderLoja/>
      <div className="homeLoja-infos">
        <div className="infos-lojas-home">
          <h1>{loja.nome}</h1>
        </div>
        <div className="produtos-adicionados-na-loja">
          <h2>Produtos existentes na loja</h2>
        </div>
        <div className="produtos-home-loja">
        {produtos.filter(p => loja.id === p.lojaId).map((p) => (
          <div key={p.id} className="info-lojas-produtos produto-item">
              <input type="button" value="-" onClick={() => handleRemoveClick(p.id)} className="decrementar-item-loja"/>
              {p.nome}
            </div>
        ))}
        </div> 
      </div>
    </div>
  );
}
