import './style.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <ul className = "ul-navbar">
                <li><a href="#" onClick={() => {navigate("/home")}}>Coelho</a></li>
                <li><a href="#" onClick={() => {navigate("/home")}}>Gato</a></li>
                <li><a href="#" onClick={() => {navigate("/home")}}>Cachorro</a></li>
                <li><a href="#" onClick={() => {navigate("/home")}}>Pássaros</a></li>
                <li><a href="#" onClick={() => {navigate("/home/lojas")}}>Lojas</a></li>
            </ul>
        </div>
    );
};

export default Navbar;