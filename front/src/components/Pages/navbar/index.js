import "./style.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <ul className="ul-navbar">
        <li>
          {/* <Link to="/coelho">Coelho</Link> */}
          <NavLink to="/coelho">Coelho</NavLink>
        </li>
        <li>
          {/* <Link to="/gatos">Gato</Link> */}
          <NavLink to="/gatos">Gato</NavLink>
        </li>
        <li>
          {/* <Link to="/cachorros">Cachorro</Link> */}
          <NavLink to="/cachorros">Cachorro</NavLink>
        </li>
        <li>
          {/* <Link to="/passaros">Pássaros</Link> */}
          <NavLink to="/passaros">Pássaros</NavLink>
        </li>
        <li>
          {/* <Link to="/lojas">Lojas</Link> */}
          <NavLink to="/lojas">Lojas</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
