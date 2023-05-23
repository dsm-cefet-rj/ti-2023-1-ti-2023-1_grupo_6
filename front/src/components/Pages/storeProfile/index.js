import './style.css';
import React, { useState, useEffect, useContext } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Menu from "../menu/index.js";
import infoDelete from '../../../utils/home-confirmacao-conta-deletada';
import confirmDelete from '../../../utils/iframe-confirmacao-deletar-conta';
import confirmExit from '../../../utils/iframe-confirmacao-sair-conta';
import HeaderLoja from '../HeaderLoja';

const StoreProfile = () => {
    const { user } = useAuth();
    const [isScreenWideEnough, setIsScreenWideEnough] = React.useState(false);
    const { signOut } = useAuth();
    const { deleteAccount } = useAuth();
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        //enviar imagem para o servidor
    }

    async function handleDelete(emailUser) {
        const result = await confirmDelete();
        if(result === true) {
            deleteAccount(emailUser);
            infoDelete();
            navigate("/")
        } 
    }

    async function handleExit() {
        const result = await confirmExit();
        if(result === true) {
            signOut();
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
        <div className="profile-store">
            <div>
            {isScreenWideEnough && <HeaderLoja />}
            </div>

            <h1 className="profile-store-title">Meu Perfil {user.name}</h1>

            <form onSubmit={handleSubmit} className='form-pic-username'>
                <text className='user-text'>CNPJ: {user.cnpj}</text>
            </form>


            <div className = "box-buttons">
                <button 
                className="profile-store-button"
                onClick={() => handleExit()}
                >Sair</button>
                <button
                className="profile-store-button"
                onClick={() => handleDelete(user.email)}>Deletar conta</button>                    
            </div>
            <Menu />
        </div>
    );
}

export default StoreProfile;
