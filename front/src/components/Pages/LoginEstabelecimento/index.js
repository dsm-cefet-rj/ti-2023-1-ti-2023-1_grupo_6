import { useNavigate } from 'react-router-dom';
import whiteIcon from '../../../assets/whiteIcon.png';
import './../Login/style.css';
import { useContext, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { LojaContext } from '../../../contexts/LojasContext';

const LoginEstabelecimento = () => {
  const { signInStore } = useAuth();
  const navigate = useNavigate();
  const { buscasLojaCNPJ } = useContext(LojaContext);
  const [cnpj, setCnpj] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  setTimeout(() => {
    setErrorMessage("");
  }, 8000);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!cnpj || !password) {
      setErrorMessage("Preencha todos os campos");
      return;
    }

    try {
      const result = await signInStore(cnpj, password);
      console.log("result");
      console.log(result);
      if (result.success) {
        navigate(`/homeLoja/${cnpj}`);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error);
    }
  };


  return (
    <div className="App-login">
      <img src={whiteIcon} alt="logo" />

      <div className="login">

        <form className="form-login">
          <h2 className="name-login">login Estabelecimento</h2>
          <div className="acess-inputs">
            <div className="acess">
              <label htmlFor="name" className="userName">CNPJ</label>
              <input
                required
                value={cnpj}
                id="name"
                type="text"
                name="user"
                placeholder="Inserir CNPJ"
                onChange={(e) => [setCnpj(e.target.value), setErrorMessage("")]}
              />
            </div>

            <div className="acess">
              <label htmlFor="password" className="password">Senha</label>
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
              <p onClick={() => { navigate("/") }}>Entrar como Cliente</p>
              <p onClick={() => { navigate("/opcao/registrar") }}>Cadastre-se</p>
            </div>

          </div>

        </form>
        {errorMessage && <div className="error-message-signin">{errorMessage}</div>}
      </div>

    </div>
  );
}

export default LoginEstabelecimento;