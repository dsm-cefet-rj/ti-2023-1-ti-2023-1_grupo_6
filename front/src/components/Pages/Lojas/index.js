import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LojaContext } from "../../../contexts/LojasContext";
import Menu from "../menu/index.js";
import "./style.css";
import { Link } from 'react-router-dom';

const Lojas = () => {
  const navigate = useNavigate();
  const { allLojas } = useContext(LojaContext);
  const [lojas, setLojas] = useState([]);

  React.useEffect(() => {
    setLojas(allLojas);
  }, [allLojas]);

  return (
    <div className="lojas-petshop">
      <nav width="200px">
        {allLojas().map((loja) => (
          <div key={loja.nome} className="lojas">
            <img src={loja.image ? window.location.origin + `/assets/petshop${loja.nome.replace(/\s+/g, '')}.png` : window.location.origin + '/assets/petshopDefault.png'} alt="lojaImage-lojas" className="lojaImage-lojas"/>
            {/* <div className="text-lojas">{loja.image}</div> */}
            <h2 className="text-lojas text-loja-individual">{loja.nome}</h2>
            <h3 className="text-lojas text-loja-individual">
              {loja.animais_atendidos}
            </h3>
            <h3 className="text-lojas text-loja-individual">{loja.endereco}</h3>
            <h3 className="text-lojas text-loja-individual">{loja.contato}</h3>
            <h3 className="text-lojas text-loja-individual">
              {loja.avaliacao}
            </h3>
            <h3 className="text-lojas text-loja-individual">{loja.estrelas}</h3>
            <Link to={`/loja/${loja.id}`} className="ver-mais-link">
              <h3 class="ver-mais" >
                Ver mais
              </h3>
            </Link> 
          </div>
        ))}
      </nav>
      <Menu />
    </div>
  );
};

export default Lojas;
