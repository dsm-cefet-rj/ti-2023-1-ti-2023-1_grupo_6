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
  const [error, setError] = useState("");

  function validarCpf(cpf) {
    cpf = cpf.replace(/[^\d]+/g,''); // remover caracteres que não são números
    
    if(cpf === '') return false;
    
    // Verificar se tem 11 dígitos
    if (cpf.length !== 11) return false;
    
    // Verificar se todos os dígitos são iguais
    var igual = true;
    for (var i = 1; i < 11 && igual; i++) {
      if (cpf[i] !== cpf[0]) igual = false;
    }
    if (igual || cpf === "12345678909") return false;
    
    // Validar o primeiro dígito verificador
    var soma = 0;
    for (var i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    var resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;
    
    // Validar o segundo dígito verificador
    soma = 0;
    for (var i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;
    
    // Se chegou até aqui, o CPF é válido
    return true;
  }

  function validatePassword(password) {
    return password.length >= 8;
  }

  const handleSignUp = () => {
    if(!name || !cpf || !date || !email || !password || !passwordConf ){
      setError("Preencha todos os campos");
      return;
    } else if(password !== passwordConf) {
      setError("As senhas não são iguais");
      return;
    } else if(!validatePassword(password)) {
      setError("A senha deve contém pelo menos 8 caracteres.")
    } 

  if(validarCpf(cpf)) {
  const res = signUp(email, password,name,cpf,date);
    if(res) {
      setError(res);
      return;
    }
      navigate("/");
  }
    else {
      alert("CPF inválido");
    }
  };

  return (
    <div className="app-user-registration">
    <div className="user-registration">
      <img src={whiteIcon} alt="icon-petfast"/>
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
                        <input type="text" name="ao_cpf" id="ao_cpf" placeholder="Digite o CPF" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
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
