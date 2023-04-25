import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './style.css';
import blueIcon from '../../../assets/blueIcon.png';


const AddProducts = () => {
  const navigate = useNavigate();
  const [nameProduct, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [section, setSection] = useState("");


  return (
    <div className="product-registration">
      <div id='Logo'>
        <img src={blueIcon} alt="logo"/>
      </div>

      <div className='Registration'>

        <div className="camp">
          <h2 className='Title'>Cadastro de produto</h2>

          <div id='infos'>
            <label id='input-description'>Nome do produto: </label>
            <input 
            id='input-info' 
            type="text" 
            placeholder="Digite o nome do produto"
            value={nameProduct}
            onChange={(e) => [setProduct(e.target.value)]}
            />
          </div>

          <div id='infos'>
            <label id='input-description' >Valor: </label>
            <input 
            id='cpf' 
            type="cpf" 
            placeholder="Digite o preço do produto"
            value={price}
            onChange={(e) => [setPrice(e.target.value)]}
            />
          </div>

        

          <div id='infos'>
            <label id='input-description'>Seção do produto: </label>
            <input 
            id='input-info' 
            type="email" 
            placeholder="Digite a secao"
            value={section}
            onChange={(e) => [setSection(e.target.value)]}
            />
          </div>
          
          
          <div id='Buttons'>
            <button id='Voltar' onClick={()=>{navigate("/Home")}}>Voltar</button>
            <button id='Confirmar' type="submit">Confirmar</button>
          </div>

        </div>

      </div>

    </div>  
  );
}

export default AddProducts;
