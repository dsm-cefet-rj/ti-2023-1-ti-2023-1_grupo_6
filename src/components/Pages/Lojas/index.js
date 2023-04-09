import './style.css';
import Menu from '../menu/index.js';
import petshop1 from "../../../assets/petshop1.png";
import petshop2 from "../../../assets/petshop2.png";
import petshop3 from "../../../assets/petshop3.png";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Lojas = () => {
    const navigate = useNavigate();
    const lojas = useSelector((state) => state.lojas);
    
    return (
        <div className="lojas-petshop">
                <nav width="200px">
                    {lojas.map((loja) => (
                        <div key={loja.id} className="lojas">
                            <div className="text-lojas">{loja.image}</div>
                            <h2 className="text-lojas text-loja-individual">{loja.nome}</h2>
                            <h3 className="text-lojas text-loja-individual">{loja.animais_atendidos}</h3>
                            <h3 className="text-lojas text-loja-individual">{loja.endereco}</h3>
                            <h3 className="text-lojas text-loja-individual">{loja.contato}</h3>
                            <h3 className="text-lojas text-loja-individual">{loja.avaliacao}</h3>
                            <h3 className="text-lojas text-loja-individual">{loja.estrelas}</h3>
                            <h3 class="ver-mais" onClick={() => { if (loja) {
                            navigate(`/home/lojas/servicos${loja.url}`, {
                                state: {
                                    loja: {
                                        nome: loja.nome,
                                        avaliacao: loja.avaliacao,
                                        animais_atendidos: loja.animais_atendidos,
                                        endereco: loja.endereco,
                                        contato: loja.contato,
                                        url: loja.url
                                    },
                                    lojaId: loja.url
                                }

                            });
                            } else {
                                console.log("Loja não definida.");
                            }
                            }}>Ver mais</h3>
                        </div>
                    ))}
                </nav>
                <Menu/>
        </div>
    );
}

export default Lojas;