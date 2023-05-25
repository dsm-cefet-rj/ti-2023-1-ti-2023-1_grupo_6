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
import { useParams } from "react-router-dom";

const HeaderLoja = () => {
  const { signOut } = useAuth();
  const { deleteAccountStore } = useAuth();
  const navigate = useNavigate();
  const { buscasLoja } = useContext(LojaContext)
  const { id } = useParams();
  
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
            {id ? (
              <Link to={`/homeLoja/${id}`} className="link-products">
                Início
              </Link>
            ) : (
              <span className="disabled-link">Início</span>
            )}
          </li>
          <li>
          {id ? (
            <Link to={`/adicionar/produto/${id}`} className="link-products">Produtos</Link>
            ) : (
              <span className="disabled-link">Produtos</span>
              )}
          </li>
          <li>
          {id ?  (
            <Link to={`/visualizar/pedidos/${id}`} className="link-products">Pedidos</Link>
            ) : (
              <span className="disabled-link">Pedidos</span>
              )}
          </li>
          <div className="sair-deletar">
            <li>
              <Link onClick={() => handleExit()}>Sair</Link>
            </li>
            <li>
              <Link onClick={() => handleDelete(id)}>Deletar loja</Link>
            </li>
          </div> 
        </ul>
      </nav>
    </div>
  );
};

export default HeaderLoja;
