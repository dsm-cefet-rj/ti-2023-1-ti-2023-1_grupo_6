import { useContext, useEffect, useState } from "react";
import blueIcon from "../../../assets/blueIcon.png";
import "./style.css";
import useAuth from '../../../hooks/useAuth';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import infoDelete from '../../../utils/home-confirmacao-conta-deletada';
import confirmDelete from '../../../utils/iframe-confirmacao-deletar-conta';
import confirmExit from '../../../utils/iframe-confirmacao-sair-conta';
import { LojaContext } from "../../../contexts/LojasContext";

const HeaderLoja = ({ lj, id }) => {
  const [nomeDaLoja, setNomeDaLoja] = useState("");
  const [IdDaLoja, setIdDaLoja] = useState("");
  const { signOut } = useAuth();
  const { deleteAccountStore } = useAuth();
  const navigate = useNavigate();
  const { buscasLoja } = useContext(LojaContext)
  useEffect(() => {
    if (lj && id) {
      localStorage.setItem("nomeDaLoja", lj);
      localStorage.setItem("IdDaLoja", id);
      setNomeDaLoja(lj);
      setIdDaLoja(id);
    }
  }, [lj, id]);
  
  const storedNomeDaLoja = localStorage.getItem("nomeDaLoja");
  
  async function handleDelete(IdDaLoja) {
    const loja = buscasLoja(IdDaLoja);
    const cnpj = loja.cnpj;
    const result = await confirmDelete();
    console.log(result);
    if (result === true) {
      deleteAccountStore(cnpj);
      infoDelete();
      navigate("/");
      // Recuperar o array do localStorage
      const lojasString = localStorage.getItem("lojas");

      // Converter a string em um array JavaScript
      const lojasArray = JSON.parse(lojasString);

      // Remover um item específico do array
      const itemRemovido = IdDaLoja;
      const lojasAtualizadas = lojasArray.filter((loja) => loja.id !== itemRemovido);

      // Converter o array atualizado de volta para uma string
      const lojasAtualizadasString = JSON.stringify(lojasAtualizadas);

      // Armazenar a string atualizada no localStorage
      localStorage.setItem("lojas", lojasAtualizadasString);

    }
  }
  

async function handleExit() {
    const result = await confirmExit();
    console.log(result);
    if(result === true) {
        signOut();
        navigate("/")
    } 
}
  return (
    <div className="app-menu-web">
      <div className="icon-nav">
        <img src={blueIcon} alt="logo" className="img-blueIcon" />
      </div>
      <nav className="menu-nav menu-home-profile">
        <ul className="nav-ul">
          <li>
            {storedNomeDaLoja || nomeDaLoja ? (
              <Link to={`/homeLoja/${storedNomeDaLoja || nomeDaLoja}`} className="link-products">
                Início
              </Link>
            ) : (
              <span className="disabled-link">Início</span>
            )}
          </li>
          <li>
          {IdDaLoja ? (
            <Link to={`/adicionar/produto/${IdDaLoja}`} className="link-products">Produtos</Link>
            ) : (
              <span className="disabled-link">Produtos</span>
              )}
          </li>
          <div className="sair-deletar">
            <li>
              <Link onClick={() => handleExit()}>Sair</Link>
            </li>
            <li>
              <Link onClick={() => handleDelete(IdDaLoja)}>Deletar loja</Link>
            </li>
          </div> 
        </ul>
      </nav>
    </div>
  );
};

export default HeaderLoja;
