import { useNavigate } from "react-router-dom";
import whiteIcon from "../../../assets/whiteIcon.png";
import "./../Login/style.css";
import { useContext, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Preencha todos os campos");
      return;
    }
    const res = signIn(email, password);

    if (res) {
      setError(res);
      return;
    }
    navigate("/home");
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
                onChange={(e) => [setEmail(e.target.value), setError("")]}
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
                onChange={(e) => [setPassword(e.target.value), setError("")]}
              />
            </div>

            {error && (
              <labelErro className="error-message-signin">{error}</labelErro>
            )}
          </div>

          <div className="clicks">
            <button
              className="enviar-login"
              type="submit"
              onClick={handleLogin}
            >
              Acessar
            </button>
            {message && <div className="message">{message}</div>}

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
      </div>
    </div>
  );
};

export default Login;