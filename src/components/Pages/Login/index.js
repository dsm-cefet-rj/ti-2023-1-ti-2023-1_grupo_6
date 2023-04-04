import { useNavigate } from 'react-router-dom';
import whiteIcon from '../../../assets/whiteIcon.png';
import './../Login/style.css';
const Login = () => {

  const navigate = useNavigate();

  return (
    <div className="App-login">
      <img src={whiteIcon} alt="logo"/>
      <div className="login">
      <form className="form-login">
        <h2 className="name-login">login</h2>
        <div className="acess-inputs">
      <div className="acess">
        <label htmlFor="name" className="userName">Usuário</label>
          <input
            id="name"
            type="text"
            name="user"
            placeholder='Usuário'
            />
      </div>
      <div className="acess">
        <label htmlFor="password" className="password">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Senha"
            />
      </div>
      <div className="save">
        <input
          type="checkbox"
          className="save-user"
          name="save"
          value="save" />
          <label>Lembrar-me</label>
      </div>
          </div>
      <div className="clicks">
      <input className="enviar-login" type="submit" value="Acessar" onClick={()=>{navigate("/home")}}/>
      <div className="help">
          <p onClick={() => {navigate("/")}}>Esqueceu a senha?</p>
          <p onClick={() => {navigate("/opcao/registrar")}}>Cadastre-se</p>
      </div>
        </div>
      </form>
          </div>
    </div>  
  );
}

export default Login;
