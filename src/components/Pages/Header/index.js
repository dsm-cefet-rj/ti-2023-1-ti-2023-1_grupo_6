import './style.css';
import bag from '../../../assets/bag.svg';
import blueIcon from '../../../assets/blueIcon.png';
import { useNavigate } from 'react-router-dom';
import  { useContext } from 'react';
import { CarrinhoContext } from '../CarrinhoContext/CarrinhoContext.js';

const MenuWeb = () => {
    const navigate = useNavigate();
    const { carrinho } = useContext(CarrinhoContext);

    return (
        <div className="app-menu-web">
        <div className="icon-nav">
            <img src={blueIcon} alt="logo" className="img-blueIcon"/>
        </div>

            <nav className = "menu-nav menu-home-profile">
            <ul className = "nav-ul">
                <li> <a href="#" onClick={() => {navigate("/home")}}>Início</a></li>
                <li><a href="#" onClick={() => {navigate("/perfil")}}>Perfil</a></li>
            </ul>
            </nav>
        
        <div className="search-nav nav-search-carrinho">
            <input type="text" placeholder='Busque por item ou loja' className="input-search-nav" maxlength="100"/>
        </div>

        <nav className = "menu-nav nav-search-carrinho">
            <ul className = "nav-ul">
                <li>
                    <a href="#" onClick={() => {navigate("/carrinho")}}>
                    <p className="quant-itens-carrinho" style={{ fontSize: '15px' }}>{carrinho.quantidade}</p>
                    <img src={bag} alt="carrinho" className="img-bag"/>
                    </a>
                </li>
            </ul>
            </nav>

        </div>  
        );
}
    
export default MenuWeb;