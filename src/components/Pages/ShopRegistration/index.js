import { useNavigate } from 'react-router-dom';
import whiteIcon from '../../../assets/whiteIcon.png';
import './../ShopRegistration/style.css';

const ShopRegistration = () => {
  const navigate = useNavigate();

  return (
    <div className="app-shop-registration">
      <img src={whiteIcon} alt="logo"/>
      <div className="shop-registration">
        <form className="form-shop-registration">
          <h2 className="name-shop-registration">Cadastro de Estabelecimento</h2>
          <div className="access-inputs">
            <div className="access">
              <label htmlFor="name" className="name-label">Nome</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder='Nome'
              />
            </div>
            <div className="access">
              <label htmlFor="cnpj" className="cnpj-label">CNPJ</label>
              <input
                id="cnpj"
                type="text"
                name="cnpj"
                placeholder="CNPJ"
              />
            </div>
            <div className="access">
              <label htmlFor="email" className="email-label">E-mail</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="E-mail"
              />
            </div>
            <div className="access">
              <label htmlFor="cep" className="cep-label">CEP</label>
              <input
                id="cep"
                type="text"
                name="cep"
                placeholder="CEP"
              />
            </div>
            <div className="access">
              <label htmlFor="endereco" className="endereco-label">Endereço</label>
              <input
                id="endereco"
                type="text"
                name="endereco"
                placeholder="Endereço"
              />
            </div>
          </div>
          <div className="clicks">
            <input className="enviar" type="submit" value="Voltar" onClick={()=>{navigate("/opcao/registrar")}}/>
            <input className="enviar confirmar" type="submit" value="Confirmar" onClick={()=>{navigate('/adicionarLoja')}}/>
            <div className="help-registration">
              <p onClick={() => {navigate("/")}}>Já tem uma conta?</p>
            </div>
          </div>
        </form>
      </div>
    </div>  
  );
}

export default ShopRegistration;