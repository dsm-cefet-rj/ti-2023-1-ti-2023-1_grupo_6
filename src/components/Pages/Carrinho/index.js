import './style.css';
import whiteIcon from '../../../assets/whiteIcon.png';
import del from '../../../assets/del.png'
import { useNavigate } from 'react-router-dom';
import Header from '../Header/index.js';
import Menu from "../menu/index.js"
import React from 'react';

const Carrinho = () => {
    const navigate = useNavigate()
    const [isScreenWideEnough, setIsScreenWideEnough] = React.useState(false);
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
        <div className="carrinho-background">
            <div>
            {isScreenWideEnough && <Header />}
            </div>

            <div className='carrinho'>
                <form className="form-carrinho">
                    <div className='itens'> 
                        <h2 className='textoCarrinho'>Seus itens</h2>
                    </div>

                    <div className='listaCarrinho'>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">- Ração para gato <img src={del} alt="excluir" className="img-excluir"/> </li>
                        <li class="list-group-item">- Osso para cachorro <img src={del} alt="excluir" className="img-excluir"/></li>
                        <li class="list-group-item">- Petiscos <img src={del} alt="excluir" className="img-excluir"/></li>
                        <li class="list-group-item">- Serviço banho e tosa cachorro <img src={del} alt="excluir" className="img-excluir"/></li>
                        <li class="list-group-item">- Remédio coelho <img src={del} alt="excluir" className="img-excluir"/></li>
                        </ul>
                    </div>

                    <div className='endereco'> 
                        <h2 className='textoCarrinho'>Endereço</h2>
                        <input type="text" placeholder='Insira o seu endereço' className="input-address"/>
                    </div>

                    <div className='pagamento'> 
                        <h2 className='textoCarrinho'>Forma de pagamento</h2>
                        <p className='exemplo'>O pagamento será feito na hora da entrega.</p>
                    </div>
                    <div className='botaoBox'>
                        <button className='botaoCancelar' onClick={()=>{navigate("/home")}}>
                            Cancelar
                        </button>
                        <button className='botaoConfirmar'>
                            Confirmar
                        </button>
                    </div>
                </form>
            </div>
        </div>  
        );
    }


export default Carrinho;
