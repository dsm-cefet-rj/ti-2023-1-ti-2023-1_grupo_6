import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './style.css';
import HeaderLoja from '../HeaderLoja';
import useAuth from '../../../hooks/useAuth';


const AddProducts = () => {
  const navigate = useNavigate();
  const [nameProduct, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [section, setSection] = useState("");
  const [id, setId] = useState("");
  const { signUpProduct } = useAuth();
  const [error, setError] = useState("");

  const handleAddProduct = () => {
    if(!nameProduct || !price || !id || !section ){
      setError("Preencha todos os campos");
      return;
    } 

  const res = signUpProduct(id, nameProduct, price, section);
    if(res) {
      setError(res);
      return;
    }
    alert("Produto criado com sucesso!");
    navigate("/homeLoja");
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
            placeholder="Digite o id do produto"
            value={id}
            onChange={(e) => [setId(e.target.value)]}
            />
          </div>

          <div id='infos-product'>
            <label id='input-description'>Nome do produto: </label>
            <input 
            id='input-info' 
            type="text" 
            placeholder="Digite o nome do produto"
            value={nameProduct}
            onChange={(e) => [setProduct(e.target.value)]}
            />
          </div>

          <div id='infos-product'>
            <label id='input-description' >Valor: </label>
            <input 
            id='input-info' 
            type="number" 
            placeholder="Digite o preço do produto"
            value={price}
            onChange={(e) => [setPrice(e.target.value)]}
            />
          </div>

        

          <div id='infos-product'>
            <label id='input-description'>Seção do produto: </label>
            <input 
            id='input-info' 
            type="text" 
            placeholder="Digite a secao"
            value={section}
            onChange={(e) => [setSection(e.target.value)]}
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
