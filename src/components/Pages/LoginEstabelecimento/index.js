import { useNavigate } from 'react-router-dom';
import whiteIcon from '../../../assets/whiteIcon.png';
import './../Login/style.css';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const LoginEstabelecimento = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [cnpj, setCnpj] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if(!cnpj || !password ){
      setError("Preencha todos os campos");
      return;
    }
  const res = signIn(cnpj, password);

    if(res) {
      setError(res);
      return;
    }
    
    navigate("/home");
  };

  //oi oi oi 

  return (
    <div className="App-login">
      <img src={whiteIcon} alt="logo"/>

      <div className="login">

        <form className="form-login">
            <h2 className="name-login">login Estabelecimento</h2>
            <div className="acess-inputs">
              <div className="acess">
                <label htmlFor="name" className="userName">CNPJ</label>
                  <input
                    required
                    value = {cnpj}
                    id="name"
                    type="email"
                    name="user"
                    placeholder="Inserir CNPJ"
                    onChange={(e) => [setCnpj(e.target.value), setError("")]}
                  />
              </div>

              <div className="acess">
                <label htmlFor="password" className="password">Senha</label>
                  <input
                    required
                    value = {password}
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Senha"
                    onChange={(e) => [setPassword(e.target.value), setError("")]}
                  />
              </div>

              {error && <labelErro className='error-message-signin'>{error}</labelErro>}
            </div>
          
          <div className="clicks">
            <input className="enviar-login" 
              type="submit" 
              value="Acessar" 
              onClick={handleLogin}
            />

            <div className="options">
                <p onClick={() => {navigate("/")}}>Entrar como Cliente</p>
                <p onClick={() => {navigate("/opcao/registrar")}}>Cadastre-se</p>
            </div>

          </div>

        </form>

      </div>

    </div>  
  );
}

export default LoginEstabelecimento;
