import React from "react";
import './style.css';
import Header from '../Header/index.js';
import { useLocation } from "react-router-dom";


const PedidosAndamento = (props) => {
    const [isScreenWideEnough, setIsScreenWideEnough] = React.useState(false);
    const location = useLocation();
    const { state: {produtos} } = location;
    console.log(produtos);
    React.useEffect(() => {
        const handleResize = () => {
        setIsScreenWideEnough(window.innerWidth >= 768); // define a condição de largura mínima para exibir o Navbar
        };

        handleResize(); // define a largura da tela na montagem inicial do componente
        window.addEventListener('resize', handleResize); // adiciona um listener para o evento de redimensionamento da tela
        return () => {
        window.removeEventListener('resize', handleResize); // remove o listener do evento de redimensionamento da tela
        };
    }, []);

    return (
        (console.log(props)),
        <div class="pedidos-usuario">
            <div>
            {isScreenWideEnough && <Header />}
            </div>
            <h2>Detalhes do pedido:</h2>
            
            <ul class="ul-pedidos">
                {produtos.map((produto) => (
                    <li key={produto.id}>
                    <h2>{produto.name}</h2>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default PedidosAndamento;
