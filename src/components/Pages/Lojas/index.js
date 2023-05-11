import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LojaContext } from "../../../contexts/LojasContext";
import Menu from "../menu/index.js";
import "./style.css";

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
        {lojas.map((loja) => (
          <div key={loja.id} className="lojas">
            <div className="text-lojas">{loja.image}</div>
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
            <h3
              class="ver-mais"
              onClick={() => {
                if (loja) {
                  navigate(`/loja/${loja.id}`, {
                    state: {
                      loja: {
                        nome: loja.nome,
                        avaliacao: loja.avaliacao,
                        animais_atendidos: loja.animais_atendidos,
                        endereco: loja.endereco,
                        contato: loja.contato,
                        url: loja.url,
                        produtos: loja.produtos,
                      },
                      lojaId: loja.url,
                    },
                  });
                } else {
                  console.log("Loja não definida.");
                }
              }}
            >
              Ver mais
            </h3>
          </div>
        ))}
      </nav>
      <Menu />
    </div>
  );
};

export default Lojas;
