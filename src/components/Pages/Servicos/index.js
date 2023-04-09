import React from 'react';
import './style.css';
import Menu from "../menu/index.js"
import Header from "../Header/index.js";
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

    function Servicos() {
        const location = useLocation();
        const { loja } = location.state || {};
        const produtos = useSelector((state) => state.produtos) ?? [];

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
        const getProdutosByCategoria = (categoria, produtos) => {
            return produtos.filter((produto) => produto.categoria === categoria);
        };
        console.log('Produtos:', produtos);


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
                                <ul className="ul-loja">
                                    {getProdutosByCategoria('Promoções', produtos).map((produto) => (
                                        <li key={produto.nome}>
                                        <h3>{produto.categoria}</h3>
                                        <img src={produto.img} alt={produto.nome} />
                                            <div className="paragrafo-vendas">
                                                <p>{produto.nome}</p>
                                                <p className='preco'>
                                                <span className='cifrao'>R$</span>{produto.promocao}
                                                {produto.valor !== produto.promocao &&
                                                    <span className='preco-antigo'>R${produto.valor}</span>
                                                }
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                            <section className="animais-servicos-loja1">
                                <ul className="ul-loja">
                                    {getProdutosByCategoria('Diversão', produtos).map((produto) => (
                                        <li key={produto.nome}>
                                        <h3>{produto.categoria}</h3>
                                        <img src={produto.img} alt={produto.nome} />
                                            <div className="paragrafo-vendas">
                                                <p>{produto.nome}</p>
                                                <p className='preco'><span className='cifrao'>R$</span>{produto.valor}</p>
                                            </div>
                                        </li>
                                    ))}
                                    </ul>
                            </section>
                            <section className="animais-compras-loja1">
                                <ul className="ul-loja">
                                    {getProdutosByCategoria('Rações para Cachorros', produtos).map((produto) => (
                                        <li key={produto.nome}>
                                        <h3>{produto.categoria}</h3>
                                        <img src={produto.img} alt={produto.nome} />
                                            <div className="paragrafo-vendas">
                                                <p>{produto.nome}</p>
                                                <p className='preco'><span className='cifrao'>R$</span>{produto.valor}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                            <section className="animais-compras-loja1">
                                <ul className="ul-loja">
                                    {getProdutosByCategoria('Atrativos', produtos).map((produto) => (
                                        <li key={produto.nome}>
                                        <h3>{produto.categoria}</h3>
                                        <img src={produto.img} alt={produto.nome} />
                                            <div className="paragrafo-vendas">
                                                <p>{produto.nome}</p>
                                                <p className='preco'><span className='cifrao'>R$</span>{produto.valor}</p>
                                            </div>
                                        </li>
                                    ))}
                                    </ul>
                            </section>
                        </div>
                        
                    ) : loja.nome === 'Cachorro Pet Shop' ? (
                        <div>
                            <h1>{loja.nome}</h1>
                            <p>{loja.animais_atendidos}, {loja.endereco}, {loja.contato}</p>
                            <p>{loja.avaliacao}</p>
                            <section className="animais-promocoes-loja2">
                                <ul className="ul-loja">
                                    {getProdutosByCategoria('Promoções', produtos).map((produto) => (
                                        <li key={produto.nome}>
                                        <h3>{produto.categoria}</h3>
                                        <img src={produto.img} alt={produto.nome} />
                                            <div className="paragrafo-vendas">
                                                <p>{produto.nome}</p>
                                                <p className='preco'>
                                                <span className='cifrao'>R$</span>{produto.promocao}
                                                {produto.valor !== produto.promocao &&
                                                    <span className='preco-antigo'>R${produto.valor}</span>
                                                }
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                            <section className="animais-servicos-loja2">
                                <ul className="ul-loja">
                                    {getProdutosByCategoria('Diversão', produtos).map((produto) => (
                                        <li key={produto.nome}>
                                        <h3>{produto.categoria}</h3>
                                        <img src={produto.img} alt={produto.nome} />
                                            <div className="paragrafo-vendas">
                                                <p>{produto.nome}</p>
                                                <p className='preco'><span className='cifrao'>R$</span>{produto.valor}</p>
                                            </div>
                                        </li>
                                    ))}
                                    </ul>
                            </section>
                            <section className="animais-compras-loja2">
                                <ul className="ul-loja">
                                        {getProdutosByCategoria('Rações para Cachorros', produtos).map((produto) => (
                                            <li key={produto.nome}>
                                            <h3>{produto.categoria}</h3>
                                            <img src={produto.img} alt={produto.nome} />
                                                <div className="paragrafo-vendas">
                                                    <p>{produto.nome}</p>
                                                    <p className='preco'><span className='cifrao'>R$</span>{produto.valor}</p>
                                                </div>
                                            </li>
                                        ))}
                                </ul>
                            </section>
                            <section className="animais-compras-loja2">
                                <ul className="ul-loja">
                                    {getProdutosByCategoria('Atrativos', produtos).map((produto) => (
                                        <li key={produto.nome}>
                                        <h3>{produto.categoria}</h3>
                                        <img src={produto.img} alt={produto.nome} />
                                            <div className="paragrafo-vendas">
                                                <p>{produto.nome}</p>
                                                <p className='preco'><span className='cifrao'>R$</span>{produto.valor}</p>
                                            </div>
                                        </li>
                                    ))}
                                    </ul>
                            </section>
                        </div>
                    ) : loja.nome === 'Gato Pet Shop' ?(
                        <div>
                            <h1>{loja.nome}</h1>
                            <p>{loja.animais_atendidos}, {loja.endereco}, {loja.contato}</p>
                            <p>{loja.avaliacao}</p>
                            <section className="animais-promocoes-loja3">
                                <ul className="ul-loja">
                                    {getProdutosByCategoria('Promoções', produtos).map((produto) => (
                                        <li key={produto.nome}>
                                        <h3>{produto.categoria}</h3>
                                        <img src={produto.img} alt={produto.nome} />
                                            <div className="paragrafo-vendas">
                                                <p>{produto.nome}</p>
                                                <p className='preco'>
                                                <span className='cifrao'>R$</span>{produto.promocao}
                                                {produto.valor !== produto.promocao &&
                                                    <span className='preco-antigo'>R${produto.valor}</span>
                                                }
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                            <section className="animais-servicos-loja3">
                                <ul className="ul-loja">
                                    {getProdutosByCategoria('Diversão', produtos).map((produto) => (
                                        <li key={produto.nome}>
                                        <h3>{produto.categoria}</h3>
                                        <img src={produto.img} alt={produto.nome} />
                                            <div className="paragrafo-vendas">
                                                <p>{produto.nome}</p>
                                                <p className='preco'><span className='cifrao'>R$</span>{produto.valor}</p>
                                            </div>
                                        </li>
                                    ))}
                                    </ul>
                            </section>
                            <section className="animais-compras-loja3">
                                <ul className="ul-loja">
                                    {getProdutosByCategoria('Rações para Cachorros', produtos).map((produto) => (
                                        <li key={produto.nome}>
                                        <h3>{produto.categoria}</h3>
                                        <img src={produto.img} alt={produto.nome} />
                                            <div className="paragrafo-vendas">
                                                <p>{produto.nome}</p>
                                                <p className='preco'><span className='cifrao'>R$</span>{produto.valor}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                            <section className="animais-compras-loja3">
                                <ul className="ul-loja">
                                    {getProdutosByCategoria('Atrativos', produtos).map((produto) => (
                                        <li key={produto.nome}>
                                        <h3>{produto.categoria}</h3>
                                        <img src={produto.img} alt={produto.nome} />
                                            <div className="paragrafo-vendas">
                                                <p>{produto.nome}</p>
                                                <p className='preco'><span className='cifrao'>R$</span>{produto.valor}</p>
                                            </div>
                                        </li>
                                    ))}
                                    </ul>
                            </section>
                        </div>
                    ) : (
                        <div>
                            <h1>{loja.nome}</h1>
                            <p>{loja.animais_atendidos}, {loja.endereco}, {loja.contato}</p>
                            <p>{loja.avaliacao}</p>
                            <section className="animais-promocoes-loja4">
                                <ul className="ul-loja">
                                    {getProdutosByCategoria('Promoções', produtos).map((produto) => (
                                        <li key={produto.nome}>
                                        <h3>{produto.categoria}</h3>
                                        <img src={produto.img} alt={produto.nome} />
                                            <div className="paragrafo-vendas">
                                                <p>{produto.nome}</p>
                                                <p className='preco'>
                                                <span className='cifrao'>R$</span>{produto.promocao}
                                                {produto.valor !== produto.promocao &&
                                                    <span className='preco-antigo'>R${produto.valor}</span>
                                                }
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                            <section className="animais-servicos-loja4">
                                <ul className="ul-loja">
                                    {getProdutosByCategoria('Diversão', produtos).map((produto) => (
                                        <li key={produto.nome}>
                                        <h3>{produto.categoria}</h3>
                                        <img src={produto.img} alt={produto.nome} />
                                            <div className="paragrafo-vendas">
                                                <p>{produto.nome}</p>
                                                <p className='preco'><span className='cifrao'>R$</span>{produto.valor}</p>
                                            </div>
                                        </li>
                                    ))}
                                    </ul>
                            </section>
                            <section className="animais-compras-loja4">
                                <ul className="ul-loja">
                                    {getProdutosByCategoria('Rações para Cachorros', produtos).map((produto) => (
                                        <li key={produto.nome}>
                                        <h3>{produto.categoria}</h3>
                                        <img src={produto.img} alt={produto.nome} />
                                            <div className="paragrafo-vendas">
                                                <p>{produto.nome}</p>
                                                <p className='preco'><span className='cifrao'>R$</span>{produto.valor}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                            <section className="animais-compras-loja4">
                                <ul className="ul-loja">
                                    {getProdutosByCategoria('Atrativos', produtos).map((produto) => (
                                        <li key={produto.nome}>
                                        <h3>{produto.categoria}</h3>
                                        <img src={produto.img} alt={produto.nome} />
                                            <div className="paragrafo-vendas">
                                                <p>{produto.nome}</p>
                                                <p className='preco'><span className='cifrao'>R$</span>{produto.valor}</p>
                                            </div>
                                        </li>
                                    ))}
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