import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import blueIcon from '../../../assets/blueIcon.png';
import './style.css';

const HeaderLoja = () => {
    const navigate = useNavigate();

    return (
        <div className="app-menu-web">
            <div className="icon-nav">
            <   img src={blueIcon} alt="logo" className="img-blueIcon" />
            </div>
            <nav className="menu-nav menu-home-profile">
                <ul className="nav-ul">
                    <li>
                        <a href="#" onClick={() => navigate('/home')}>
                        Início
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => navigate('/perfil')}>
                        Perfil
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => navigate('/adicionar/produto') }>
                        Produtos
                        </a>
                    </li>
                </ul>
            </nav>

        </div>  
    );
}
    
export default HeaderLoja;