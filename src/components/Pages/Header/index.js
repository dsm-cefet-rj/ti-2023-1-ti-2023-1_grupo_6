import './style.css';
import bag from '../../../assets/bag.svg';
import blueIcon from '../../../assets/blueIcon.png';
import { useNavigate } from 'react-router-dom';

const MenuWeb = () => {
    const navigate = useNavigate();

    return (
        <div className="app-menu-web">
        <div className="icon-nav">
            <img src={blueIcon} alt="logo" className="img-blueIcon"/>
        </div>

            <nav className = "menu-nav menu-home-profile">
            <ul className = "nav-ul">
                <li> <a href="#" onClick={() => {navigate("/home")}}> Home </a></li>
                <li><a href="#" onClick={() => {navigate("/")}}>Profile</a></li>
            </ul>
            </nav>
        
        <div className="search-nav nav-search-carrinho">
            <input type="text" placeholder='Busque por item ou loja' className="input-search-nav" maxlength="100"/>
        </div>

        <nav className = "menu-nav nav-search-carrinho">
            <ul className = "nav-ul">
                <li>
                    <a href="#" onClick={() => {navigate("/carrinho")}}>
                    <img src={bag} alt="carrinho" className="img-bag"/>
                    </a>
                </li>
            </ul>
            </nav>

        </div>  
        );
}
    
export default MenuWeb;