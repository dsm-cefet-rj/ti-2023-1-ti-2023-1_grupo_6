import { useNavigate } from 'react-router-dom';
import whiteIcon from '../../../assets/whiteIcon.png';
import './style.css';

const OptionRegistration= () => {
const navigate = useNavigate()
return (
    <div className="App-Registration">
        <img src={whiteIcon} alt="logo"/>
        <div className="login">
        <form>
            <h2 className="text-registration">Você está se cadastrando como:</h2>
        <div className="clicks">
        <input className="text-input" type="submit" value="Consumidor" onClick={()=>{navigate("/registrar/usuario")}} />
        <input className="text-input" type="submit" value="Estabelecimento" />
            </div>
            <div className="back">
            <p onClick={() => {navigate("/")}}>Voltar</p>
        </div>
        </form>
            </div>
    </div>  
);
}

export default OptionRegistration;
