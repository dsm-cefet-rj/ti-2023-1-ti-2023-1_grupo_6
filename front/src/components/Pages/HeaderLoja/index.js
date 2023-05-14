import { useEffect, useState } from "react";
import blueIcon from "../../../assets/blueIcon.png";
import "./style.css";
import { Link } from "react-router-dom";

const HeaderLoja = ({ lj, id }) => {
  const [nomeDaLoja, setNomeDaLoja] = useState("");
  const [IdDaLoja, setIdDaLoja] = useState("");

  useEffect(() => {
    if (lj && id) {
      localStorage.setItem("nomeDaLoja", lj);
      localStorage.setItem("IdDaLoja", id);
      setNomeDaLoja(lj);
      setIdDaLoja(id);
    }
  }, [lj, id]);

  const storedNomeDaLoja = localStorage.getItem("nomeDaLoja");
  const storedIdDaLoja = localStorage.getItem("IdDaLoja");

  return (
    <div className="app-menu-web">
      <div className="icon-nav">
        <img src={blueIcon} alt="logo" className="img-blueIcon" />
      </div>
      <nav className="menu-nav menu-home-profile">
        <ul className="nav-ul">
          <li>
          {storedNomeDaLoja || nomeDaLoja ? (
            <Link to={`/homeLoja/${storedNomeDaLoja || nomeDaLoja}`} className="link-products">  Início</Link>
            ) : (
              <span className="disabled-link">Início</span>
          )}
          </li>
          <li>
            <Link to={`/perfil`}>Perfil</Link>
          </li>
          {IdDaLoja ? (
              <Link to={`/adicionar/produto/${IdDaLoja}`} className="link-products">Produtos</Link>
            ) : (
              <span className="disabled-link">Produtos</span>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default HeaderLoja;
