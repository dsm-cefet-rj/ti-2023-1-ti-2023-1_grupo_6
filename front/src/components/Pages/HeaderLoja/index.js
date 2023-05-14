import { useEffect } from "react";
import blueIcon from "../../../assets/blueIcon.png";
import "./style.css";
import { Link} from "react-router-dom";

const HeaderLoja = ({ lj }) => {

  useEffect(() => {
    localStorage.setItem("nomeDaLoja", lj);
  }, [lj]);

  const nomeDaLoja = localStorage.getItem("nomeDaLoja");

  return (
    <div className="app-menu-web">
      <div className="icon-nav">
        <img src={blueIcon} alt="logo" className="img-blueIcon" />
      </div>
      <nav className="menu-nav menu-home-profile">
        <ul className="nav-ul">
          <li>
            <Link to={`/homeLoja/${nomeDaLoja}`}>Início</Link>
          </li>
          <li>
            <Link to={`/perfil`}>Perfil</Link>
          </li>
          <li>
            <Link to={`/adicionar/produto`}>Produtos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderLoja;
