import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CarrinhoContext } from "../../../contexts/CarrinhoContext.js";
import { useContext } from "react";
import bag from "../../../assets/bag.svg";
import blueIcon from "../../../assets/blueIcon.png";
import "./style.css";
import { Link} from "react-router-dom";
import { LojaContext } from '../../../contexts/LojasContext';


const MenuWeb = () => {
  const navigate = useNavigate();
  const { carrinho } = useContext(CarrinhoContext);
  const [lojaAtual, setLojaAtual] = useState(null);
  const [lojas, setLojas] = useState([]);
  const { allLojas } = useContext(LojaContext);
  const [searchTerm, setSearchTerm] = useState("");
  const lojasFiltradas = allLojas().filter(
    (loja) => loja.nome.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  return (
    <div className="app-menu-web">
      <div className="icon-nav">
        <img src={blueIcon} alt="logo" className="img-blueIcon" />
      </div>

      <nav className="menu-nav menu-home-profile">
        <ul className="nav-ul">
          <li>
            <Link to="/home">
                Início
            </Link>
          </li>
          <li>
            <Link to="/perfil">
              Perfil
            </Link>
          </li>
          <li>
            <Link to="/pedidos">
              Pedidos
            </Link>
          </li>
        </ul>
      </nav>

      <div className="search-nav nav-search-carrinho">
        <input
          type="text"
          placeholder="Busque por loja"
          className="input-search-nav"
          maxLength="100"
          value={searchTerm}
          onChange={handleSearch}
        />

      {searchTerm && lojasFiltradas.length > 0 && lojaAtual !== lojasFiltradas[0].id && (
        <ul className="search-results" style={{ listStyle: "none" }}>
          {lojasFiltradas.map((loja) => (
            <li key={loja.id}>
              {loja && (
                <Link to={`/loja/${loja.id}`}>
                  <h3 className="categorias-filtro">{loja.nome}</h3>
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}

        {/* http://localhost:3000/home/lojas/servicos/loja-gato-pra-cachorro-pet-shop
    http://localhost:3000/home/lojas/servicos/loja-gato-pra-cachorro-pet-shop */}
      </div>

      <nav className="menu-nav nav-search-carrinho">
        <ul className="nav-ul">
          <li>
          <Link to="/carrinho"
              href="#"
              onClick={() => {
                navigate("/carrinho");
              }}
            >
              <p className="quant-itens-carrinho" style={{ fontSize: "15px" }}>
                {carrinho.quantidade}
              </p>
              <img src={bag} alt="carrinho" className="img-bag" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuWeb;
