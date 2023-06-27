import './style.css';
import React from "react";
import HeaderLoja from "../HeaderLoja";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import { LojaContext } from '../../../contexts/LojasContext';
import { ProdutosContext } from "../../../contexts/ProdutosContext";
import { CarrinhoContext } from "../../../contexts/CarrinhoContext";
import axios from 'axios';

export default function HomeLoja() {
  const { buscasLoja } = useContext(LojaContext);
  const { allProdutos, removerProduto } = useContext(ProdutosContext);
  const { id } = useParams();
  const [produtos, setProdutos] = useState([]);
  const [loja, setLoja] = useState("");
  const [lojaInfo, setLojaInfo] = useState("");
  const { compraRealizada, resetarCompraRealizada } = useContext(CarrinhoContext);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3003/lojas/${id}`);
        setLoja(response.data);
        setLojaInfo(response.data.informacoes);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    console.log('lojaInfo', lojaInfo);
    if (lojaInfo) {
      console.log('lojaInfo', lojaInfo.nome);
    }
  }, [lojaInfo]);
  console.log("lojaInfo.__id")
  console.log(lojaInfo._id)


  useEffect(() => {
    axios.get(`http://localhost:3003/produtoInfo/${lojaInfo._id}`)
      .then((response) => {
        setProdutos(response.data);
        console.log("produtos")
        console.log(produtos)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [produtos]);

  // const handleRemoveClick = (id) => {
  //   const updatedProdutos = produtos.map((p) => {
  //     if (p.id === id) {
  //       const updatedQuantProdutos = p.quantProdutos - 1;
  //       if (updatedQuantProdutos > 0) {
  //         return {
  //           ...p,
  //           quantProdutos: updatedQuantProdutos
  //         };
  //       } else {
  //         removerProduto(id);
  //         return null; // Retorna null para indicar que o item deve ser removido
  //       }
  //     }
  //     return p;
  //   });
  //   const filteredProdutos = updatedProdutos.filter((p) => p !== null); // Filtra os itens nulos
  //   setProdutos(filteredProdutos);
  //   localStorage.setItem('produtos', JSON.stringify(filteredProdutos));
  // }


  // const handleAdicionaClick = (id) => {
  //   const updatedProdutos = produtos.map((p) => {
  //     if (p.id === id) {
  //       return {
  //         ...p,
  //         quantProdutos: Number(p.quantProdutos) + 1
  //       };
  //     }
  //     return p;
  //   });
  //   setProdutos(updatedProdutos);
  //   localStorage.setItem('produtos', JSON.stringify(updatedProdutos));
  // };

  return (
    <div className="homeLoja">
      <HeaderLoja />
      <div className="homeLoja-infos">
        <div className="infos-lojas-home">
          <h1>{lojaInfo.nome}</h1>
        </div>
        <div className="produtos-adicionados-na-loja">
          <h2>Produtos existentes na loja</h2>
        </div>
        <div className="produtos-home-loja">
          {produtos}
          <p>ksadjakljd</p>
          {produtos.filter(p => loja.id === p.lojaId).map((p) => (
            <div key={p.id} className="info-lojas-produtos produto-item">
              {p.nome}
              <div>
                Unidades disponíveis: {p.quantProdutos}
              </div>
              <div className="buttons-loja-item">
                {/* <input type="button" value="+" onClick={() => handleAdicionaClick(p.id)} className="incrementar-item-loja" />
                <input type="button" value="-" onClick={() => handleRemoveClick(p.id)} className="decrementar-item-loja" /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
}
