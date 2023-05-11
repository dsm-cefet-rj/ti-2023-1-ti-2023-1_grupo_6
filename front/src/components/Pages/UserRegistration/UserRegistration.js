import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './style.css';
import './style2.css';
import whiteIcon from '../../../assets/whiteIcon.png';
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

  const res = signUp(email, password,name,cpf,date);
    if(res) {
      setError(res);
      return;
    }
    alert("Usuário cadastrado com sucesso!");
    navigate("/");
  };

  return (
    <div className="app-user-registration">
    <div className="user-registration">
      <img src={whiteIcon}/>
            <form className="form-user-registration">
                <h2 className="name-user-registration">Cadastro de Consumidor</h2>
                <div className="access-inputs">
                    <div className="access">
                        <label htmlFor="name" className="name-label">
                            Nome:
                        </label>
                        <input type="text" value={name} placeholder="Digite o nome completo" onChange={(e) => [setName(e.target.value), setError("")]} />
                    </div>
                    <div className="access">
                        <label htmlFor="email" className="email-label">
                            E-mail:
                        </label>
                        <input type="email" placeholder="Digite o Email" value={email} onChange={(e) => [setEmail(e.target.value), setError("")]} />
                    </div>
                    <div className="access">
                        <label htmlFor="animais-atendidos" className="animais-atendidos-label">
                            Data de Nascimento:
                        </label>
                        <input type="date" value={date} onChange={(e) => [setDate(e.target.value), setError("")]} />
                    </div>
                    <div className="access acess-shop">
                        <label htmlFor="cnpj" className="cnpj-label">
                            CPF:
                        </label>
                        <input type="cpf" placeholder="Digite o CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                    </div>
                    <div className="access acess-shop">
                        <label htmlFor="url" className="url-label">
                            Senha:
                        </label>
                    <input type="password"  placeholder="Digite a senha" value={password} onChange={(e) => [setPassword(e.target.value),  setError("")]} />
                    </div>
                    <div className="access acess-shop">
                        <label htmlFor="endereco" className="endereco-label">
                            Confirme a senha:
                        </label>
                        <input type="password"  placeholder="Confirma sua senha" value={passwordConf} onChange={(e) => [setPasswordConf(e.target.value),  setError("")]} />
                    </div>
                    {error && <labelErro className='error-message-signup'>{error}</labelErro>}
                </div>
            </form>
        </div>
        <button className="botao-estabelecimento-adicionar btn-user-registration" type="submit" onClick={handleSignUp}>Adicionar</button>
    </div>  
  );
}

export default UserRegistration;
