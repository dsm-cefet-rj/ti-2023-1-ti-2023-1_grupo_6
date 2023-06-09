import React, { createContext, useState } from "react";
import axios from "axios";

export const CarrinhoContext = createContext();

const CarrinhoContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [compraRealizada, setCompraRealizada] = useState(false);

  const adicionarProdutoCarrinho = (produto) => {
    console.log("*****");
    console.log(produto);
    axios
      .post("http://localhost:3005/carrinho/adicionar", {
        idProduto: produto.id,
        quantidade: 1,
        idUsuario: 1,
      })
      .then((response) => {
        console.log("response.data");
        console.log(response.data);
        if (response.status === 200) {
          console.log("Item adicionado");
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
    console.log(item.price)
    console.log("item.price")
    const valor = parseFloat(item.price || 0);
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

  const marcarCompraRealizada = () => {
    setCompraRealizada(true);
  };

  const resetarCompraRealizada = () => {
    setCompraRealizada(false);
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
        compraRealizada,
        marcarCompraRealizada,
        resetarCompraRealizada
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export default CarrinhoContextProvider;