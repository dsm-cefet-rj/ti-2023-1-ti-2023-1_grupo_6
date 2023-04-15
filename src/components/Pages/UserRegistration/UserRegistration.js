import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './style.css';
import blueIcon from '../../../assets/blueIcon.png';
import useAuth from '../../../hooks/useAuth';

const UserRegistration = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = () => {
    if(!name || !cpf || !date || !email || !password || !passwordConf ){
      setError("Preencha todos os campos");
      return;
    } else if(password !== passwordConf) {
      setError("As senhas não são iguais");
      return;
    }

  const res = signUp(email, password);

    if(res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!");
    navigate("/");
  };

  return (
    <div className="user-registration">
      <div id='Logo'>
        <img src={blueIcon} alt="logo"/>
      </div>

      <div className='Registration'>

        <div className="camp">
          <h2 className='Title'>Cadastro de usuário</h2>

          <div id='infos'>
            <label id='input-description'>Nome completo: </label>
            <input 
            id='input-info' 
            type="text" 
            placeholder="Digite o Nome Completo"
            value={name}
            onChange={(e) => [setName(e.target.value), setError("")]}
            />
          </div>

          <div id='infos'>
            <label id='input-description' >CPF: </label>
            <input 
            id='cpf' 
            type="cpf" 
            placeholder="Digite o CPF"
            value={cpf}
            onChange={(e) => [setCpf(e.target.value), setError("")]}
            />
          </div>

          <div id='infos'>
            <label id='input-description'>Data de nascimento: </label>
            <input 
            id='birthday' 
            type="date" 
            placeholder="Data de nascimento"
            value={date}
            onChange={(e) => [setDate(e.target.value), setError("")]}
            />
          </div>

          <div id='infos'>
            <label id='input-description'>Email: </label>
            <input 
            id='input-info' 
            type="email" 
            placeholder="Digite o email"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
          </div>
          
          <div id='infos'>
            <label id='input-description'>Senha: </label>
            <input 
            id='input-info' 
            type="password" 
            placeholder="Digite a Senha"
            value={password}
            onChange={(e) => [setPassword(e.target.value), setError("")]}
            />
          </div>

          <div id='infos'>
            <label id='input-description'>Confirme sua senha: </label>
            <input 
            id='input-info' 
            type="password" 
            placeholder="Digite a Senha"
            value={passwordConf}
            onChange={(e) => [setPasswordConf(e.target.value), setError("")]}
            />
          </div>

          <div id='infos'>
            <label id='input-description'>Foto: </label>
            <input 
            id='input-info' 
            type="file"
            value={image}
            onChange={(e) => [setImage(e.target.value), setError("")]}
            />
          </div>

          {error && <labelErro className='error-message-signup'>{error}</labelErro>}

          <div id='Buttons'>
            <button id='Voltar' onClick={()=>{navigate("/opcao/registrar")}}>Voltar</button>
            <button id='Confirmar' type="submit" onClick={handleSignUp}>Confirmar</button>
          </div>

        </div>

      </div>

    </div>  
  );
}

export default UserRegistration;
