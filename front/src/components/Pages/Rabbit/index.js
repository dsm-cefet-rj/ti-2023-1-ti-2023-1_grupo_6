import './style.css';
import React from 'react';
import Header from '../Header/index.js';
import Navbar from '../navbar/index.js';
import Menu from "../menu/index.js";
import { useContext } from 'react';
import { CarrinhoContext } from '../../../contexts/CarrinhoContext';

const Rabbit = () => {
    const [produtos, setProdutos] = React.useState([]);// [produtos, setProdutos
    const { adicionarProdutoCarrinho } = useContext(CarrinhoContext);
    const [isScreenWideEnough, setIsScreenWideEnough] = React.useState(false);

    const handleAdicionarProduto = (produto) => {
        adicionarProdutoCarrinho(produto);
    };

    React.useEffect(() => {
        const handleResize = () => {
        setIsScreenWideEnough(window.innerWidth >= 768); // define a condição de largura mínima para exibir o Navbar
        };

        handleResize(); // define a largura da tela na montagem inicial do componente
        window.addEventListener('resize', handleResize); // adiciona um listener para o evento de redimensionamento da tela
        return () => {
        window.removeEventListener('resize', handleResize); // remove o listener do evento de redimensionamento da tela
        };
    }, 
    []);
    return (
        <div className='produtos-categoria-rabbit'>
            <div>
            {isScreenWideEnough && <Header />}
            </div>
            <h1>Produtos para Coelho</h1>
            <section className='produtos-rabbit'>
                <ul className="ul-produtos-rabbit">
                    {produtos.filter(p => p.animal === 'coelho').map(p => (
                        <li key={p.id}>
                            <div>
                                <div className='img-produtos-rabbit'>
                                    <img src={p.img}></img>
                                </div>
                                <div className="paragrafo-vendas-rabbit">
                                    <p>{p.nome}</p>
                                    <p className='preco'><span className='cifrao'>R$</span>{p.valor}</p>
                                    <input type="submit" value="Comprar" onClick={() => handleAdicionarProduto(p)} className='button-comprar-categoria-rabbit'/>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
            <Menu />
        </div>
    );
}

export default Rabbit;