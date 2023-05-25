import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import './style.css';
import HeaderLoja from '../HeaderLoja';
import useAuth from '../../../hooks/useAuth';
import { ProdutosContext } from '../../../contexts/ProdutosContext';
import { useParams } from "react-router-dom";
import { LojaContext } from '../../../contexts/LojasContext';
import styled from 'styled-components';

const AddProducts = () => {
  const navigate = useNavigate();
  const { adicionarProdutos } = useContext(ProdutosContext);
  const { allProdutos } = useContext(ProdutosContext);
  const { id } = useParams();
  const { buscasLoja } = useContext(LojaContext);
  const { signUpProduct } = useAuth();

  const [nome, setProduct] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("Atrativos");
  const [idProdutos, setIdProdutos] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState([]);

  const categoriasProdutos = [
    'Atrativos',
    'Alimentação',
    'Conforto',
    'Diversão',
    'Promoções',
    'Saúde'
  ];

  const categoriasAnimais = [
    'Cachorro',
    'Gato',
    'Coelho',
    'Pássaro'
  ];

  function getDefaultCheckboxes() {
    return categoriasAnimais.map(categoria => ({
      name: categoria,
    }));
  }

  const [checkboxes, setCheckboxes] = useState(getDefaultCheckboxes());

  const handleAddProduct = async (e) => {
    e.preventDefault();

    if (!nome || !valor || !categoriasSelecionadas) {
      setErrorMessage("Preencha todos os campos");
      return;
    }

    const loja = buscasLoja(id);
    const lojaId = loja.id;

    adicionarProdutos({
      idProdutos,
      valor,
      nome,
      categoria,
      animal: categoriasSelecionadas,
      lojaId: lojaId,
      img: idProdutos
    });

    console.log( idProdutos,
      valor,
      nome,
      categoria,
      categoriasSelecionadas,
      lojaId,
      idProdutos);
    try {
      const result = await signUpProduct(idProdutos, nome, valor, categoria);
      if (result && result.success) {
        alert("Produto criado com sucesso!");
        navigate(`/homeLoja/${id}`);
      }
    } catch (error) {
      setErrorMessage(error);
    }
  };

  const handleChangeCategoria = (event) => {
    setCategoria(event.target.value);
  };

  const Checkbox = styled.input`
    margin: 0px 10px 0px !important;
    cursor: pointer;
  `;

  const CheckboxLabel = styled.label`
    cursor: pointer;
    display: block;
    font-weight: normal;
  `;

  return (
    <div className="product-registration">
      <HeaderLoja />
      <div className='Registration'>
        <form>
          <div className="product-box">
            <h2>Cadastro de produto</h2>

            <div id='infos-product'>
              <label id='input-description'>Nome do produto: </label>
              <input
                id='input-info'
                type="text"
                placeholder="Digite o nome do produto"
                value={nome}
                onChange={(e) => setProduct(e.target.value)}
              />
            </div>
            <div id='infos-product'>
              <label id='input-description'>Valor: </label>
              <input
                id='input-info'
                type="number"
                step="0.01"
                min="0"
                placeholder="Digite o preço do produto"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
              />
            </div>
            <div id='infos-product'>
              <div class="form-group">
                <label for="categoria" id='input-description'>Categoria:</label>
                <select id="categoria" value={categoria} onChange={handleChangeCategoria}>
                  {categoriasProdutos.map((categoria, index) => (
                    <option key={index} value={categoria}>{categoria}</option>
                  ))}
                </select>
              </div>
            </div>
            <div id='infos-product' className='check-list'>
            {checkboxes.map((checkbox, index) => (
              <CheckboxLabel key={index}>
                <Checkbox
                  type="checkbox"
                  checked={checkbox.checked}
                  onChange={() => {
                    const newCheckboxes = [...checkboxes];
                    newCheckboxes[index].checked = !newCheckboxes[index].checked;
                    setCheckboxes(newCheckboxes);

                    if (newCheckboxes[index].checked) {
                      setCategoriasSelecionadas([...categoriasSelecionadas, checkbox.name]);
                    } else {
                      const updatedCategorias = categoriasSelecionadas.filter(
                        (categoria) => categoria !== checkbox.name
                      );
                      setCategoriasSelecionadas(updatedCategorias);
                    }
                  }}
                />
                <span className='check-name-category'>{checkbox.name}</span>
              </CheckboxLabel>
            ))}
          </div>

            <div className='button-product'>
              <button className='confirmar' type="submit" onClick={handleAddProduct}>Confirmar</button>
            </div>
          </div>
        </form>
        {errorMessage && <div className="error-message-signin">{errorMessage}</div>}
      </div>

    </div>
  );
}

export default AddProducts;
