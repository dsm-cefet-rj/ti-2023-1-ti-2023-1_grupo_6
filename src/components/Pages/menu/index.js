import { useNavigate } from 'react-router-dom';
import './style.css';
import profile from '../../../assets/profile.svg';
import home from '../../../assets/home.svg';
import bag from '../../../assets/bag.svg';

const Menu = () => {
    const navigate = useNavigate()
    return (
        <div className="menu">
            <div className="buttons">
                <button className='profileButton'>
                    <img src={profile} alt="perfil" className="img-perfil"/>
                    <label className='text perfiltext'>Perfil</label>
                </button>
                <button className='homeButton'>
                    <img src={home} alt="inicio" className="img-home"/>
                    <label className='text inicio'>Início</label>
                </button>

                <button className='bagButton' onClick={()=>{navigate("/carrinho")}}>
                    <img src={bag} alt="carrinho" className="img-bag"/>
                    <label className='text carrinho'>Carrinho</label>
                </button>
                </div>
        </div>  
        );
    }
    
    export default Menu;