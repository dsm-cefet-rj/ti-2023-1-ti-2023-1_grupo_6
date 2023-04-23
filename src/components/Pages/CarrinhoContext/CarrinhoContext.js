import React, { createContext, useState } from 'react';

export const CarrinhoContext = createContext();

let quantProdutos = 0;
const CarrinhoContextProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState({produtos: [], quantidade: 0, total: 0.0});
    
    const adicionarProdutoCarrinho = (produto) => {
      const novoCarrinho = {...carrinho, produtos: [...carrinho.produtos]};
      let totalCompra = 0;
      const totalProdutos = novoCarrinho.produtos.reduce((total, p) => total + p.quantidade, 0);
      const index = novoCarrinho.produtos.findIndex((p) => p.id === produto.id);
      const valorCompra = novoCarrinho.produtos.filter(p => p.valor);
    
      if(index !== -1) {
        novoCarrinho.produtos[index].quantidade += 1;
      } else {
        novoCarrinho.produtos.push({...produto, quantidade: 1});
      }
      for (var i = 0; i < valorCompra.length; i++) {
        const valorProduto = parseFloat(valorCompra[i].valor.replace(",", "."));
        totalCompra += valorProduto;
      }
      
      novoCarrinho.total = totalCompra.toFixed(2).replace('.',',');
      novoCarrinho.quantidade = totalProdutos + 1;
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
      // totalAPagar(novoCarrinho);
    };
    
    

  const totalAPagar = () => {
    const novoCarrinho = { ...carrinho, produtos: [...carrinho.produtos] };
    let totalCompra = 0;
    const valorCompra = novoCarrinho.produtos.filter(p => p.valor);
    for(var i = 0; i < valorCompra.length;i++) {
        totalCompra += parseInt(valorCompra[i].valor);
    }
    console.log(totalCompra);
    novoCarrinho.total = totalCompra;
    setCarrinho(novoCarrinho);
  }

  return (
    <CarrinhoContext.Provider
      value={{ carrinho, adicionarProdutoCarrinho, removerProdutoCarrinho, totalAPagar, quantProdutos }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export default CarrinhoContextProvider;
