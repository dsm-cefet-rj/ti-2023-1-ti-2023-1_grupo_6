import { useState } from "react";
import { useNavigate } from "react-router-dom";
import blueIcon from "../../../assets/blueIcon.png";
import "./style.css";
import { Link} from "react-router-dom";

const HeaderLoja = () => {
  const navigate = useNavigate();
  const urlLoja = localStorage.getItem("urlLoja"); // recupera a urlLoja do Local Storage
  return (
    <div className="app-menu-web">
      <div className="icon-nav">
        <img src={blueIcon} alt="logo" className="img-blueIcon" />
      </div>
      <nav className="menu-nav menu-home-profile">
        <ul className="nav-ul">
          <li>
            <Link to={`/loja/estabelecimento${urlLoja}`}>
              Início
            </Link>
          </li>
          <li>
            <Link to="/perfil">
              Perfil
            </Link>
          </li>
          <li>
            <Link to="/adicionar/produto">
              Produtos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderLoja;
