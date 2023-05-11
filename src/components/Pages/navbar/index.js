import "./style.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <ul className="ul-navbar">
        <li>
          <Link to="/coelho">Coelho</Link>
        </li>
        <li>
          <Link to="/gatos">Gato</Link>
        </li>
        <li>
          <Link to="/cachorros">Cachorro</Link>
        </li>
        <li>
          <Link to="/passaros">Pássaros</Link>
        </li>
        <li>
          <Link to="/lojas">Lojas</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
