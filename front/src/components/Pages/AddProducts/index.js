import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import './style.css';
import HeaderLoja from '../HeaderLoja';
import useAuth from '../../../hooks/useAuth';
import { ProdutosContext } from '../../../contexts/ProdutosContext';
import { useParams } from "react-router-dom";
import { LojaContext } from '../../../contexts/LojasContext';


const AddProducts = () => {
  const navigate = useNavigate();
  const [nome, setProduct] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [idProdutos, setIdProdutos] = useState("");
  const { signUpProduct } = useAuth();
  const [error, setError] = useState("");
  const { adicionarProdutos } = useContext(ProdutosContext);
  const { allProdutos } = useContext(ProdutosContext);
  const { id } = useParams();
  const { buscasLoja } = useContext(LojaContext);

  const handleAddProduct = () => {
    if(!nome || !valor || !categoria ){
      setError("Preencha todos os campos");
      return;
    } 

    const res = signUpProduct(idProdutos, nome, valor, categoria);
    if(res) {
      setError(res);
      return;
    }
    const loja = buscasLoja(id);
    const lojaId = loja.id;
    adicionarProdutos({
    idProdutos,
    valor,
    nome,
    categoria,
    lojaId,
    img: idProdutos
    })
    console.log(allProdutos());
    alert("Produto criado com sucesso!");
    navigate(`/homeLoja/${loja.nome}`);
  };

  return (
    <div className="product-registration">
      <HeaderLoja/>

      <div className='Registration'>

<form>
        <div className="product-box">
          <h2>Cadastro de produto</h2>

          <div id='infos-product'>
            <label id='input-description'>Id do produto: </label>
            <input 
            id='input-info' 
            type="text" 
            placeholder="Digite o idProdutos do produto"
            value={idProdutos}
            onChange={(e) => [setIdProdutos(e.target.value)]}
            />
          </div>

          <div id='infos-product'>
            <label id='input-description'>Nome do produto: </label>
            <input 
            id='input-info' 
            type="text" 
            placeholder="Digite o nome do produto"
            value={nome}
            onChange={(e) => [setProduct(e.target.value)]}
            />
          </div>

          <div id='infos-product'>
            <label id='input-description' >Valor: </label>
            <input 
            id='input-info' 
            type="number" 
            placeholder="Digite o preço do produto"
            value={valor}
            onChange={(e) => [setValor(e.target.value)]}
            />
          </div>

        

          <div id='infos-product'>
            <label id='input-description'>Seção do produto: </label>
            <input 
            id='input-info' 
            type="text" 
            placeholder="Digite a secao"
            value={categoria}
            onChange={(e) => [setCategoria(e.target.value)]}
            />
          </div>
          

          <div className='button-product'>
            <button className='confirmar' type="submit" onClick = {handleAddProduct}>Confirmar</button>
          </div>

        </div>
</form>

      </div>

    </div>  
  );
}

export default AddProducts;
