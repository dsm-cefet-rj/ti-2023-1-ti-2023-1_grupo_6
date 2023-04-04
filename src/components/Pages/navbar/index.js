import './style.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <ul className = "ul-navbar">
                <li><a href="#" onClick={() => {navigate("/coelho")}}>Coelho</a></li>
                <li><a href="#" onClick={() => {navigate("/gatos")}}>Gato</a></li>
                <li><a href="#" onClick={() => {navigate("/cachorros")}}>Cachorro</a></li>
                <li><a href="#" onClick={() => {navigate("/passaros")}}>Pássaros</a></li>
                <li><a href="#" onClick={() => {navigate("/home/lojas")}}>Lojas</a></li>
            </ul>
        </div>
    );
};

export default Navbar;