import './style.css';
import React, { useState, useEffect, useContext } from 'react';
import Header from '../Header/index.js';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Menu from "../menu/index.js";
import infoDelete from '../../../utils/home-confirmacao-conta-deletada';
import confirmDelete from '../../../utils/iframe-confirmacao-deletar-conta';
import confirmExit from '../../../utils/iframe-confirmacao-sair-conta';
import { CarrinhoContext } from '../CarrinhoContext/CarrinhoContext';

const ConsumerProfile = () => {
    const { user } = useAuth();
    const [isScreenWideEnough, setIsScreenWideEnough] = React.useState(false);
    const { signOut } = useAuth();
    const { deleteAccount } = useAuth();
    const navigate = useNavigate();
    const { limparCarrinho } = useContext(CarrinhoContext);

    const handleLimparCarrinho = () => {
        limparCarrinho();
    };

    async function handleDelete(emailUser) {
        const result = await confirmDelete();
        console.log(result);
        if(result === true) {
            deleteAccount(emailUser);
            infoDelete();
            navigate("/")
        } 
    }

    async function handleExit() {
        const result = await confirmExit();
        console.log(result);
        if(result === true) {
            signOut();
            handleLimparCarrinho();
            navigate("/")
        } 
    }




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
        <div className="profile">
            <div>
            {isScreenWideEnough && <Header />}
            </div>

            <h1 className="profile-title">Meu Perfil</h1>

            <form className='form-pic-username'>
                <text className='user-text'>conta: {user.email}</text>
            </form>


            <div className = "box-buttons">
                <button 
                className="profile-button"
                onClick={() => handleExit()}
                >Sair</button>
                <button
                className="profile-button"
                onClick={() => handleDelete(user.email)}>Deletar conta</button>                    
            </div>
            <Menu />
        </div>
    );
}

export default ConsumerProfile;