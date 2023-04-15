import { useNavigate } from 'react-router-dom';
import whiteIcon from '../../../assets/whiteIcon.png';
import './../Login/style.css';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if(!email || !password ){
      setError("Preencha todos os campos");
      return;
    }
  const res = signIn(email, password);

    if(res) {
      setError(res);
      return;
    }
    
    navigate("/home");
  };



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
                    required
                    value = {email}
                    id="name"
                    type="email"
                    name="user"
                    placeholder="Usuário"
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
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
