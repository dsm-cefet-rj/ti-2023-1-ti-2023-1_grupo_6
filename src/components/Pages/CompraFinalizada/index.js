import './style.css';
import finalizado from '../../../assets/finalizado.png';
import sinalmenor from '../../../assets/sinal-menor.png';
import { useNavigate } from 'react-router-dom';

const CompraFinalizada = () => {
    const navigate = useNavigate();
    return (
        <div className="compra-finalizada">
            <div className='voltar'>
                <img src={sinalmenor} onClick={()=>{navigate("/carrinho")}}></img>
            </div>
            <img src={finalizado}></img>
            <h4 className="text-compra-finalizada">Compra efetuada.</h4>
            <button className="button-compra-finalizada" onClick={()=>{navigate("/pedidos")}}>Acompanhar pedidos</button>
        </div>
    );
};

export default CompraFinalizada;