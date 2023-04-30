import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CarrinhoContext } from '../CarrinhoContext/CarrinhoContext.js';
import { useContext } from 'react';
import bag from '../../../assets/bag.svg';
import blueIcon from '../../../assets/blueIcon.png';
import './style.css';

const MenuWeb = () => {
    const navigate = useNavigate();
    const { carrinho } = useContext(CarrinhoContext);
    const lojas = useSelector((state) => state.lojas);
    const [searchTerm, setSearchTerm] = useState('');
    const lojasFiltradas = lojas.filter( (loja) => loja.nome.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 );
    

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
    };

    return (
        <div className="app-menu-web">
            <div className="icon-nav">
            <   img src={blueIcon} alt="logo" className="img-blueIcon" />
            </div>

            <nav className="menu-nav menu-home-profile">
                <ul className="nav-ul">
                    <li>
                        <a href="#" onClick={() => navigate('/home')}>
                        Início
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => navigate('/perfil')}>
                        Perfil
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => navigate('/pedidos', {state: carrinho}) }>
                        Pedidos
                        </a>
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

                {searchTerm && lojasFiltradas.length > 0 && (
                <ul className="search-results" style={{ listStyle: 'none' }}>
                    {lojasFiltradas.map((loja) => (
                    <li key={loja.id}>
                            <h3 class="categorias-filtro" onClick={() => { if (loja) {
                                navigate(`/loja${loja.url}`, {
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
                            }}}>{loja.nome}</h3>
                        {/* <a href={`/home/lojas/servicos${loja.url}`}>
                        </a> */}
                        
                    </li>
                    ))}
                </ul>
                )}
{/* http://localhost:3000/home/lojas/servicos/loja-gato-pra-cachorro-pet-shop
    http://localhost:3000/home/lojas/servicos/loja-gato-pra-cachorro-pet-shop */}
            </div>

            <nav className = "menu-nav nav-search-carrinho">
                <ul className = "nav-ul">
                    <li>
                        <a href="#" onClick={() => {navigate("/carrinho")}}>
                        <p className="quant-itens-carrinho" style={{ fontSize: '15px' }}>{carrinho.quantidade}</p>
                        <img src={bag} alt="carrinho" className="img-bag"/>
                        </a>
                    </li>
                </ul>
                </nav>

        </div>  
    );
}
    
export default MenuWeb;