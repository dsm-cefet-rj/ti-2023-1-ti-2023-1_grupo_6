import React, { createContext, useState } from "react";

export const CarrinhoContext = createContext();

const CarrinhoContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const adicionarProdutoCarrinho = (produto) => {
    const index = items.findIndex((item) => item.id === produto.id);
    if (index !== -1) {
      updateItem(produto.id, items[index].quantidade + 1);
    } else {
      setItems([...items, { ...produto, quantidade: 1 }]);
    }
  };

  const limparCarrinho = () => {
    setItems([]);
  };

  const updateItem = (itemId, newQuantity) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, quantidade: newQuantity } : item
      );
      setItems(updatedItems);
    };
    
  const incrementItem = (itemId) => {
      const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, quantidade: item.quantidade + 1 } : item
      );
    setItems(updatedItems);
  };

  const decrementItem = (itemId) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, quantidade: item.quantidade - 1 } : item
    );
    setItems(updatedItems);
  };

  const quantidadeTotalItens = items.reduce((acumulado, item) => {
    return acumulado + item.quantidade;
  }, 0);

  const valorTotalItens = items.reduce((acumulado, item) => {
    const valor = parseFloat(item.valor.replace(",", "."));
    const quantidade = item.quantidade;
    return parseFloat(acumulado + valor * quantidade);
  }, 0).toFixed(2).replace(".", ",");

  const itemsComQuantidade = items.filter((item) => item.quantidade > 0);

  const getAllCarrinhos = () => {
    const carrinhos = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("carrinho_")) {
            const email = key.substring("carrinho_".length); // Extrai o email do usuário do nome da chave
            const carrinho = localStorage.getItem(key);
            carrinhos.push({ email: email, carrinho: JSON.parse(carrinho) });
        }
    }
    return carrinhos;
  };

  return (
    <CarrinhoContext.Provider
      value={{
        adicionarProdutoCarrinho,
        updateItem,
        incrementItem,
        decrementItem,
        limparCarrinho,
        items: itemsComQuantidade,
        quantidadeTotalItens,
        valorTotalItens,
        getAllCarrinhos,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export default CarrinhoContextProvider;