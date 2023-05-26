import { useNavigate } from 'react-router-dom';
import './style.css';
import profile from '../../../assets/profile.svg';
import home from '../../../assets/home.svg';
import bag from '../../../assets/bag.svg';
import { Link } from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate()
    return (
        <div className="menu">
            <div className="buttons-menu">
                <button className='profileButton'>
                    <img src={profile} alt="perfil" className="img-perfil" />
                    <Link to="/perfil">
                        <label className='text perfiltext'>
                            Perfil
                        </label>
                    </Link>
                </button>
                <button className='homeButton'>
                    <img src={home} alt="inicio" className="img-home" />
                    <Link to="/home">
                        <label className='text inicio' >
                            Início
                        </label>
                    </Link>
                </button>

                <button className='bagButton'>
                    <img src={bag} alt="carrinho" className="img-bag" />
                    <Link to="/carrinho">
                        <label className='text carrinho'>
                            Carrinho
                        </label>
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default Menu;