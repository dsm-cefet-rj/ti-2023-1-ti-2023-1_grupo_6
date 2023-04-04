import { useNavigate } from 'react-router-dom';
import whiteIcon from '../../../assets/whiteIcon.png';
import './style.css';

const OptionRegistration= () => {
const navigate = useNavigate()
return (
    <div className="App-Registration">
        <img src={whiteIcon} alt="logo"/>
        <div className="login">
        <form className='login-option-registration'>
            <h2 className="text-registration">Você está se cadastrando como:</h2>
        <div className="clicks">
        <input className="text-input" type="submit" value="Consumidor" onClick={()=>{navigate("/registrar/usuario")}} />
        <input className="text-input" type="submit" value="Estabelecimento" onClick={()=>{navigate("/registrarEstabelecimento")}} />
            </div>
            <div className="back">
            <p id="back" onClick={() => {navigate("/")}}>Voltar</p>
        </div>
        </form>
            </div>
    </div>  
);
}

export default OptionRegistration;
