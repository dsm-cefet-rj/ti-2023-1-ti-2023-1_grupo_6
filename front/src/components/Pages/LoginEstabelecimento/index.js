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
  const [error, setError] = useState("");

  const handleLogin = () => {
    if(!cnpj || !password ){
      setError("Preencha todos os campos");
      console.log("aqui")
      return;
    }

  const res = signInStore(cnpj, password);
  const loja = buscasLojaCNPJ(cnpj);
  const nome = loja.nome;
    
    if(res) {
      console.log("res" + res)
      setError(res);
      return;
    }
    
    navigate(`/homeLoja/${nome}`);
  };

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
                    type="text"
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
