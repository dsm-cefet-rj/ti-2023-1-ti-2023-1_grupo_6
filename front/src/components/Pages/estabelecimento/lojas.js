import React from "react";
import "./style2.css";
import { useParams } from "react-router-dom";
import {
    useState, useEffect
} from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CarrinhoContext } from "../../../contexts/CarrinhoContext.js";
import "./style.css";
import Header from "../Header/index.js";
import Menu from "../menu/index.js";
import mostrarConfirmacao from "../../../utils/confirmacao-compra";
import { LojaContext } from "../../../contexts/LojasContext";
import { ProdutosContext } from "../../../contexts/ProdutosContext";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const Lojas = () => {
    const navigate = useNavigate();
    const { buscasLoja } = useContext(LojaContext);
    const { id } = useParams();
    const { adicionarProdutoCarrinho } = useContext(CarrinhoContext);
    const [produto, setProduto] = useState(null);
    const [isScreenWideEnough, setIsScreenWideEnough] = React.useState(false);
    const [exibirIframe, setExibirIframe] = useState(false);
    const [nome, setNome] = useState("");
    const [animais_atendidos, setAnimais_atendidos] = useState("");
    const [animaisAtendidos, setAnimaisAtendidos] = useState("");
    const [contato, setContato] = useState("");
    const [endereco, setEndereco] = useState("");
    const { allProdutos } = useContext(ProdutosContext);
    const { user } = useAuth();

    React.useEffect(() => {
        const handleResize = () => {
            setIsScreenWideEnough(window.innerWidth >= 768); // define a condição de largura mínima para exibir o menu
        };
        const lojaData = buscasLoja(id); // Armazena os dados da loja em uma variável
        try {
            const response = axios.get(`http://localhost:3003/lojasInfo/${id}`)
                .then(function (response) {
                    lojaData = response.data;
                })
            if (response.status === 200) {
                navigate("/home");
            } else {
                console.log("erro");
            }
        } catch (error) {
            console.log(error.message);
        }
        const {
            nome,
            animais_atendidos,
            animaisAtendidos,
            contato,
            endereco,
        } = lojaData || {};

        if (!lojaData) {
            navigate('*'); // Redirecionar para a página de "Not Found" caso não haja dados da loja
            return;
        }

        setNome(nome);
        setAnimaisAtendidos(animaisAtendidos);
        setAnimais_atendidos(animais_atendidos);
        setContato(contato);
        setEndereco(endereco);
    }, []);


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

    const handleAdicionarProduto = (produto) => {
        adicionarProdutoCarrinho(produto);
        setExibirIframe(true);
    };

    useEffect(() => {
        axios.get(`http://localhost:3003/produtoInfo/${id}`)
            .then((response) => {
                setProduto(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    console.log(produto);

    return (
        <div>
            <div className='services-lojas'>
                {isScreenWideEnough && <Header />}
                <div className='loja'>
                    <h1>{nome}</h1>
                    <p>{animaisAtendidos}{animais_atendidos}, {endereco}, {contato}</p>
                    {produto && produto.length && produto.length > 0 ? (
                        <>
                            {produto.map((item) => (
                                <div key={item.id}>
                                    <img src={item.img} alt={produto.nome} />
                                    <section className="animais-compras-loja1">
                                        <p>{item.nome}</p>
                                        <p>{item.price}</p>
                                        <input type="submit" value="Comprar" onClick={() => {
                                            handleAdicionarProduto(item); mostrarConfirmacao();
                                        }} className='button-comprar-servicos' />
                                    </section>
                                </div>
                            ))}
                        </>
                    ) : (
                        <p>Ainda não há produtos disponíveis.</p>
                    )}

                </div >
            </div >
            <Menu />
        </div >
    );
};
export default Lojas;
