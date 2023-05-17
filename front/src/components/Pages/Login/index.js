import { useNavigate } from "react-router-dom";
import whiteIcon from "../../../assets/whiteIcon.png";
import "./../Login/style.css";
import { useContext, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { ApiException } from "../../../services/api/ApiException";

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  setTimeout(() => {
    setErrorMessage("");
  }, 8000);

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      setErrorMessage("Preencha todos os campos");
      return;
    }
  
    try {
      const result = await signIn(email, password, true);
  
      if (result && result.success) {
        console.log("ok");
        navigate("/home");
      } 
    } catch (error) {
      setErrorMessage(error);
    }
  };

  return (
    <div className="App-login">
      <img src={whiteIcon} alt="logo" />

      <div className="login">
        
        <form className="form-login">
          <h2 className="name-login">login Cliente</h2>
          <div className="acess-inputs">
            <div className="acess">
              <label htmlFor="name" className="userName">
                E-mail
              </label>
              <input
                required
                value={email}
                id="name"
                type="email"
                name="user"
                placeholder="Inserir e-mail"
                onChange={(e) => [setEmail(e.target.value), setErrorMessage("")]}
              />
            </div>

            <div className="acess">
              <label htmlFor="password" className="password">
                Senha
              </label>
              <input
                required
                value={password}
                id="password"
                type="password"
                name="password"
                placeholder="Senha"
                onChange={(e) => [setPassword(e.target.value), setErrorMessage("")]}
              />
            </div>


            
          </div>

          <div className="clicks">
            <button
              className="enviar-login"
              type="submit"
              onClick={handleLogin}
              
            >
              Acessar
            </button>

            

            <div className="options">
              <p
                onClick={() => {
                  navigate("/LoginEstabelecimento");
                }}
              >
                Entrar como Loja
              </p>
              <p
                onClick={() => {
                  navigate("/opcao/registrar");
                }}
              >
                Cadastre-se
              </p>
            </div>
          </div>
        </form>
          {errorMessage && <div className="error-message-signin">{errorMessage}</div>}
      </div>
    </div>
  )
}

export default Login;