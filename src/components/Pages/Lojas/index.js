import './style.css';
import Menu from '../menu/index.js';
import petshop1 from "../../../assets/petshop1.png";
import petshop2 from "../../../assets/petshop2.png";
import petshop3 from "../../../assets/petshop3.png";
import { useNavigate } from 'react-router-dom';

const Lojas = () => {
    const navigate = useNavigate();
    const lojas = [
        {nome: "Gato pra Cachorro Pet Shop", animais_atendidos: "Gato • Cachorro • Coelho • Hamster", contato: "(21) 9 999-9999",  avaliacao: "5,0 ⭐⭐⭐⭐⭐", endereco: "Avenida Gato Fofo, 164", image:<img src={petshop1} alt="pet1" width="350" height="300px"/>, url: "/loja1"},
        {nome: "Cachorro Pet Shop", animais_atendidos: "Cachorro • Coelho • Hamster", contato: "(21) 9 999-9999",  avaliacao: "3,0 ⭐⭐⭐", endereco: "Rua Gatinho Fofinho, 277", image:<img src={petshop2} alt="pet1" width="350" height="300px"/> },
        {nome: "Gato Pet Shop", animais_atendidos: "Gato • Pássaro • Hamster", contato: "(21) 9 999-9999",  avaliacao: "3,0 ⭐⭐⭐", endereco: "Rua Gabi , 1163", image:<img src={petshop3} alt="pet1" width="350" height="300px"/> },
        {nome: "Pássaro Pet Shop", animais_atendidos: "Pássaro • Gato • Hamster", contato: "(21) 9 999-9999",  avaliacao: "4,0 ⭐⭐⭐⭐", endereco: "Rua Isa, 999", image:<img src={petshop1} alt="pet1" width="350" height="300px"/> }
    ];
    
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
                            navigate(`/home/lojas/Servicos`, {
                                state: {
                                loja: {
                                    nome: loja.nome,
                                    avaliacao: loja.avaliacao,
                                    animais_atendidos: loja.animais_atendidos,
                                    endereco: loja.endereco,
                                    contato: loja.contato
                                }
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