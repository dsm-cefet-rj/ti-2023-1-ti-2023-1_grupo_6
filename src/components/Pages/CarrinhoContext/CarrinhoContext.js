import React, { createContext, useState } from 'react';

export const CarrinhoContext = createContext();

let quantProdutos = 0;
const CarrinhoContextProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState({produtos: [], quantidade: 0, total: 0.0});
    const adicionarProdutoCarrinho = (produto) => {
      const novoCarrinho = {...carrinho, produtos: [...carrinho.produtos]};
      const totalProdutos = novoCarrinho.produtos.reduce((total, p) => total + p.quantidade, 0);
      let somadoTotal = 0; // Movido para antes do if
      const index = novoCarrinho.produtos.findIndex((p) => p.id === produto.id);
      
      if(index !== -1) {
        novoCarrinho.produtos[index].quantidade += 1;
      } else {
        novoCarrinho.produtos.push({...produto, quantidade: 1});
      }
      
      // Atualiza a soma total do carrinho
      if (novoCarrinho && novoCarrinho.produtos) {
        for (let i = 0; i < novoCarrinho.produtos.length; i++) {
          if (novoCarrinho.produtos[i].quantidade) {
            console.log('Quantidade do produto ' + (i + 1) + ': ' + parseInt(parseInt(novoCarrinho.produtos[i].quantidade)));
            console.log('Preço do produto ' + (i + 1) + ': ' + novoCarrinho.produtos[i].valor);
            somadoTotal += parseFloat(novoCarrinho.produtos[i].valor.replace(",", ".")) * novoCarrinho.produtos[i].quantidade;
            console.log('Total de todos os produtos: ' + somadoTotal.toFixed(2));
          } else {
            console.log('Quantidade do produto ' + (i + 1) + ' não definida.');
          }
        }
      } else {
        console.log('Carrinho ou produtos não definidos.');
      }
    
      novoCarrinho.total = somadoTotal.toFixed(2).replace('.',',');
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
      const totalValor = novoCarrinho.produtos.reduce(
        (total, p) => total + (parseFloat(p.valor.replace(",", ".")) * p.quantidade),
        0
      );
      novoCarrinho.quantidade = totalProdutos;
      novoCarrinho.total = totalValor.toFixed(2).replace('.',',');
      setCarrinho(novoCarrinho);
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

  const limparCarrinho = () => {
    setCarrinho({ produtos: [], quantidade: 0, total: 0.0 });
  };

  return (
    <CarrinhoContext.Provider
      value={{ carrinho, adicionarProdutoCarrinho, removerProdutoCarrinho, totalAPagar, quantProdutos, limparCarrinho }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export default CarrinhoContextProvider;