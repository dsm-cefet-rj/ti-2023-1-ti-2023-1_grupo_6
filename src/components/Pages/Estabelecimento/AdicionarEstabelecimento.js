import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLoja }  from '../../../store/Reducers/lojas.js';
import defaultImg from '../../../assets/petshop2.png';
import './style.css';
import whiteIcon from '../../../assets/whiteIcon.png';

function AdicionarLoja() {
    const [nome, setNome] = useState('');
    const [animaisAtendidos, setAnimaisAtendidos] = useState('');
    const [contato, setContato] = useState('');
    const [avaliacao, setAvaliacao] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [img, setImg] = useState('');
    const [image, setImage] = useState('');
    const [descricao, setDescricao] = useState('');
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');
    const [url, setUrl] = useState('');

    const dispatch = useDispatch();

    function handleAdicionarLoja() {
        dispatch(addLoja({
        nome,
        animais_atendidos: animaisAtendidos,
        contato,
        avaliacao,
        email,
        cnpj,
        endereco,
        cep,
        img: <img src={defaultImg} alt="dog"/>,
        image: <img src={defaultImg} alt="pet1" width="350" height="300px"/>,
        descricao,
        url,
        }));

        setNome('');
        setAnimaisAtendidos('');
        setContato('');
        setEmail('');
        setAvaliacao('');
        setEndereco('');
        setCep('');
        setImg('');
        setImage('');
        setDescricao('');
        setCnpj('');
        setUrl('');
    }

    return (
        <div className="app-shop-registration">
            <div className="shop-registration">
            <img src={whiteIcon}/>
                <form className="form-shop-registration">
                <h2 className="name-shop-registration">Cadastro de Estabelecimento</h2>
                <div className="access-inputs access-shop-inputs">
                    <div className="access access-shop">
                        <label htmlFor="name" className="name-label">
                            Nome:
                        </label>
                        <input type="text" placeholder="Digite o nome da loja" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div className="access access-shop">
                        <label htmlFor="cnpj" className="cnpj-label">
                            CNPJ:
                        </label>
                        <input type="text" placeholder="Digite o CNPJ da loja" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
                    </div>
                    <div className="access access-shop">
                        <label htmlFor="email" className="email-label">
                            E-mail:
                        </label>
                        <input type="text" placeholder="Digite o email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="access access-shop">
                        <label htmlFor="animais-atendidos" className="animais-atendidos-label">
                            Anmais atendidos:
                        </label>
                        <input type="text"  placeholder="Animais que serão atendidos" value={animaisAtendidos} onChange={(e) => setAnimaisAtendidos(e.target.value)} />
                    </div>
                    <div className="access access-shop">
                        <label htmlFor="cep" className="cep-label">
                            CEP:
                        </label>
                        <input type="text"  placeholder="Digite o CEP" value={cep} onChange={(e) => setCep(e.target.value)} />
                    </div>
                    <div className="access access-shop">
                        <label htmlFor="endereco"className="endereco-label">
                            Endereço:
                        </label>
                        <input type="text"  placeholder="Digite o endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                    </div>
                    <div className="access access-shop">
                        <label htmlFor="url" className="url-label">
                            URL:
                        </label>
                    <input type="text"  placeholder="Digite a URL da loja" value={url} onChange={(e) => setUrl(e.target.value)} />
                    </div>
                    <div className="access access-shop">
                        <label htmlFor="url" className="url-label">
                            Contato:
                        </label>
                    <input type="text" placeholder="Digite o contato da loja" value={contato} onChange={(e) => setContato(e.target.value)} />
                    </div>
                </div>
            </form>
            </div>
            <button onClick={handleAdicionarLoja} className="botao-estabelecimento-adicionar btn-shop">Adicionar</button>
        </div>
    );
}

export default AdicionarLoja;
