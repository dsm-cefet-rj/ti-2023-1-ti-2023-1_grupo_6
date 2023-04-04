import React from 'react';
import './style.css';
import Menu from "../menu/index.js"
import Header from "../Header/index.js";
import { useLocation } from 'react-router-dom';
import catnip from "../../../assets/catnip-gatos.jpg";
import brinquedo from "../../../assets/brinquedo-cat.jpg";
import shampoo from "../../../assets/shampoo-cachorro.jpg";
import racao from "../../../assets/racao-cachorro.jpg";
    
    function Servicos() {
        const location = useLocation();
        const { loja } = location.state || {};
        const [isScreenWideEnough, setIsScreenWideEnough] = React.useState(false);

        React.useEffect(() => {
            const handleResize = () => {
            setIsScreenWideEnough(window.innerWidth >= 768); // define a condição de largura mínima para exibir o menu
            };
    
            handleResize(); // define a largura da tela na montagem inicial do componente
            window.addEventListener('resize', handleResize); // adiciona um listener para o evento de redimensionamento da tela
            return () => {
            window.removeEventListener('resize', handleResize); // remove o listener do evento de redimensionamento da tela
            };
        }, 
        []);
    

        return (
            <div className='services-lojas'>
            {isScreenWideEnough && <Header />}
            <div className='loja'>
            <section>
            {loja ? (

                <div>
                    {loja.nome === 'Gato pra Cachorro Pet Shop' ? (
                        <div>
                            <h1>{loja.nome}</h1>
                            <p>{loja.animais_atendidos}, {loja.endereco}, {loja.contato}</p>
                            <p>{loja.avaliacao}</p>
                            <section className="animais-promocoes-loja1">
                                <h3>Promoções</h3>
                                    <ul className="ul-loja">
                                        <li>
                                            <img src={shampoo} alt="shampoo para cachorro"/>
                                            <div className="paragrafo-vendas">
                                            <p>Shampoo para cachorro</p>
                                            <p className='preco'><span className='cifrao'>
                                            R$</span>35,99 <span className='preco-antigo'>R$49,99</span></p>
                                            </div>
                                        </li>
                                    </ul>
                            </section>
                            <section className="animais-servicos-loja1">
                                <h3>Diversão</h3>
                                    <ul className="ul-loja">
                                        <li>
                                            <img src={brinquedo} alt="brinquedo de gato" />
                                            <div className="paragrafo-vendas">
                                            <p>Brinquedo para Gato</p>
                                            <p className='preco'><span className='cifrao'>R$</span>17,59</p>
                                            </div>
                                        </li>
                                    </ul>
                            </section>
                            <section className="animais-compras-loja1">
                                <h3>Rações para Gatos</h3>
                                    <ul className="ul-loja">
                                        <li>
                                            <img src={racao} alt="racao para cachorro"/>
                                            <div className="paragrafo-vendas">
                                            <p>Ração Gormeut</p> 
                                            <p className='preco'><span className='cifrao'>R$</span>23,99</p>
                                            </div>
                                        </li>
                                    </ul>
                            </section>
                            <section className="animais-compras-loja1">
                                <h3>Atrativos</h3>
                                    <ul className="ul-loja">
                                        <li>
                                            <img src={catnip} alt="erva para gatos"/>
                                            <div className="paragrafo-vendas">
                                            <p>Catnip</p>
                                            <p className='preco'><span className='cifrao'>R$</span>10,99</p>
                                            </div>
                                        </li>
                                    </ul>
                            </section>
                        </div>
                        
                    ) : loja.nome === 'Cachorro Pet Shop' ? (
                        <div>
                            <h1>{loja.nome}</h1>
                            <p>{loja.animais_atendidos}, {loja.endereco}, {loja.contato}</p>
                            <p>{loja.avaliacao}</p>
                            <section className="animais-promocoes-loja2">
                                <h3>Promoções</h3>
                                    <ul className="ul-loja">
                                        <li>
                                            <img src={shampoo} alt="shampoo para cachorro"/>
                                            <div className="paragrafo-vendas">
                                            <p>Shampoo para cachorro</p>
                                            <p className='preco'><span className='cifrao'>
                                            R$</span>35,99 <span className='preco-antigo'>R$49,99</span></p>
                                            </div>
                                        </li>
                                    </ul>
                            </section>
                            <section className="animais-servicos-loja2">
                                <h3>Diversão</h3>
                                    <ul className="ul-loja">
                                        <li>
                                            <img src={brinquedo} alt="brinquedo de gato" />
                                            <div className="paragrafo-vendas">
                                            <p>Brinquedo para Gato</p> 
                                            <p className='preco'><span className='cifrao'>R$</span>17,59</p> 
                                            </div>
                                        </li>
                                    </ul>
                            </section>
                            <section className="animais-compras-loja2">
                                <h3>Rações para Gatos</h3>
                                    <ul className="ul-loja">
                                        <li>
                                            <img src={racao} alt="racao para cachorro"/>
                                            <div className="paragrafo-vendas">
                                            <p>Ração Gormeut</p> 
                                            <p className='preco'><span className='cifrao'>R$</span>23,99</p>
                                            </div>
                                        </li>
                                    </ul>
                            </section>
                            <section className="animais-compras-loja2">
                                <h3>Atrativos</h3>
                                    <ul className="ul-loja">
                                        <li>
                                            <img src={catnip} alt="erva para gatos"/>
                                            <div className="paragrafo-vendas">
                                            <p>Catnip</p>
                                            <p className='preco'><span className='cifrao'>R$</span>10,99</p>
                                            </div>
                                        </li>
                                    </ul>
                            </section>
                        </div>
                    ) : loja.nome === 'Gato Pet Shop' ?(
                        <div>
                            <h1>{loja.nome}</h1>
                            <p>{loja.animais_atendidos}, {loja.endereco}, {loja.contato}</p>
                            <p>{loja.avaliacao}</p>
                            <section className="animais-promocoes-loja3">
                                <h3>Promoções</h3>
                                    <ul className="ul-loja">
                                        <li>
                                            <img src={shampoo} alt="shampoo para cachorro"/>
                                            <div className="paragrafo-vendas">
                                            <p>Shampoo para cachorro</p>
                                            <p className='preco'><span className='cifrao'>
                                            R$</span>35,99 <span className='preco-antigo'>R$49,99</span></p>
                                            </div>
                                        </li>
                                    </ul>
                            </section>
                            <section className="animais-servicos-loja3">
                                <h3>Diversão</h3>
                                    <ul className="ul-loja">
                                        <li>
                                            <img src={brinquedo} alt="brinquedo de gato" />
                                            <div className="paragrafo-vendas">
                                            <p>Brinquedo para Gato</p> 
                                            <p className='preco'><span className='cifrao'>R$</span>17,59</p> 
                                            </div>
                                        </li>
                                    </ul>
                            </section>
                            <section className="animais-compras-loja3">
                                <h3>Rações para Gatos</h3>
                                    <ul className="ul-loja">
                                        <li>
                                            <img src={racao} alt="racao para cachorro"/>
                                            <div className="paragrafo-vendas">
                                            <p>Ração Gormeut</p> 
                                            <p className='preco'><span className='cifrao'>R$</span>23,99</p>
                                            </div>
                                        </li>
                                    </ul>
                            </section>
                            <section className="animais-compras-loja3">
                                <h3>Atrativos</h3>
                                    <ul className="ul-loja">
                                        <li>
                                            <img src={catnip} alt="erva para gatos"/>
                                            <div className="paragrafo-vendas">
                                            <p>Catnip</p>
                                            <p className='preco'><span className='cifrao'>R$</span>10,99</p>
                                            </div>
                                        </li>
                                    </ul>
                            </section>
                        </div>
                    ) : (
                        <div>
                            <h1>{loja.nome}</h1>
                            <p>{loja.animais_atendidos}, {loja.endereco}, {loja.contato}</p>
                            <p>{loja.avaliacao}</p>
                            <section className="animais-promocoes-loja4">
                                <h3>Promoções</h3>
                                    <ul className="ul-loja">
                                        <li>
                                            <img src={shampoo} alt="shampoo para cachorro"/>
                                            <div className="paragrafo-vendas">
                                            <p>Shampoo para cachorro</p>
                                            <p className='preco'><span className='cifrao'>
                                            R$</span>35,99 <span className='preco-antigo'>R$49,99</span></p>
                                            </div>
                                        </li>
                                    </ul>
                            </section>
                            <section className="animais-servicos-loja4">
                                <h3>Diversão</h3>
                                    <ul className="ul-loja">
                                        <li>
                                            <img src={brinquedo} alt="brinquedo de gato" />
                                            <div className="paragrafo-vendas">
                                            <p>Brinquedo para Gato</p> 
                                            <p className='preco'><span className='cifrao'>R$</span>17,59</p> 
                                            </div>
                                        </li>
                                    </ul>
                            </section>
                            <section className="animais-compras-loja4">
                                <h3>Rações para Gatos</h3>
                                    <ul className="ul-loja">
                                        <li>
                                            <img src={racao} alt="racao para cachorro"/>
                                            <div className="paragrafo-vendas">
                                            <p>Ração Gormeut</p> 
                                            <p className='preco'><span className='cifrao'>R$</span>23,99</p>
                                            </div>
                                        </li>
                                    </ul>
                            </section>
                            <section className="animais-compras-loja4">
                                <h3>Atrativos</h3>
                                    <ul className="ul-loja">
                                        <li>
                                            <img src={catnip} alt="erva para gatos"/>
                                            <div className="paragrafo-vendas">
                                            <p>Catnip</p>
                                            <p className='preco'><span className='cifrao'>R$</span>10,99</p>
                                            </div>
                                        </li>
                                    </ul>
                            </section>
                        </div>
                    )}
                </div>
            ) : (
                <p>Não foi possível carregar informações da loja.</p>
                )}
                </section>
                </div>
            <div>
            <Menu/>
            </div>
            </div>
        );
    }

    export default Servicos;