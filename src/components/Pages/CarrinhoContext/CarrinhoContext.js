import React, { createContext, useState } from 'react';

export const CarrinhoContext = createContext();

let quantProdutos = 0;
const CarrinhoContextProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState({produtos: [], quantidade: 0});
    
    const adicionarProdutoCarrinho = (produto) => {
      const novoCarrinho = {...carrinho, produtos: [...carrinho.produtos]};
      
      const index = novoCarrinho.produtos.findIndex((p) => p.id === produto.id);
    
      if(index !== -1) {
        novoCarrinho.produtos[index].quantidade += 1;
      } else {
        novoCarrinho.produtos.push({...produto, quantidade: 1});
      }
    
      const totalProdutos = novoCarrinho.produtos.reduce((total, p) => total + p.quantidade, 0);
      novoCarrinho.quantidade = totalProdutos;
      setCarrinho(novoCarrinho);
    };
    

    const removerProdutoCarrinho = (id) => {
      const novoCarrinho = { ...carrinho, produtos: [...carrinho.produtos] };
    
      const index = novoCarrinho.produtos.findIndex((p) => p.id === id);
    
      if (index !== -1) {
        novoCarrinho.produtos[index].quantidade -= 1;
        if (novoCarrinho.produtos[index].quantidade === 0) {
          novoCarrinho.produtos.splice(index, 1);
        }
      }
      const totalProdutos = novoCarrinho.produtos.reduce(
        (total, p) => total + p.quantidade,
        0
      );
      novoCarrinho.quantidade = totalProdutos;
    
      setCarrinho(novoCarrinho);
    };
    
    

  const limparCarrinho = () => {
    setCarrinho({ produtos: [], quantidade: 0 });
  };

  return (
    <CarrinhoContext.Provider
      value={{ carrinho, adicionarProdutoCarrinho, limparCarrinho, removerProdutoCarrinho, quantProdutos }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export default CarrinhoContextProvider;
