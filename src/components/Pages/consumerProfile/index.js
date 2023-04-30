import './style.css';
import React, { useState, useEffect, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import noAvatar from '../../../assets/noAvatar.svg'
import Header from '../Header/index.js';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Menu from "../menu/index.js";
import infoDelete from '../../../utils/home-confirmacao-conta-deletada';
import confirmDelete from '../../../utils/iframe-confirmacao-deletar-conta';
import confirmExit from '../../../utils/iframe-confirmacao-sair-conta';

const ConsumerProfile = () => {
    const { user } = useAuth();
    const [isScreenWideEnough, setIsScreenWideEnough] = React.useState(false);
    const [image, setImage] = useState(null);
    const { signOut } = useAuth();
    const { deleteAccount } = useAuth();
    const navigate = useNavigate();
    

    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage);
        //função para lidar com a seleção de imagem
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //enviar imagem para o servidor
    }

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

            <h1 className="profile-title">Meu Perfil {user.name}</h1>
            <div className='pic-user'>
                <form onSubmit={handleSubmit} className='form-pic-username'>
                    <label htmlFor="profile-pic">
                        <Avatar
                        alt="foto de perfil"
                        src={image ? URL.createObjectURL(image) : noAvatar}
                        className="profile-pic"
                        />
                    </label>
                    <input
                    type="file"
                    id="profile-pic"
                    accept="image/*"
                    onChange={handleImageChange}
                    className= "input-pic"
                    />

                    <text className='user-text'>nome: {user.name}</text>

                </form>
            </div>

            <div className = "box-buttons">
                <button type="submit" className="profile-button">Salvar</button>
                <button 
                className="profile-button"
                onClick={() => handleExit()}
                >Sair</button>
                <button
                className="profile-button"
                onClick={() => handleDelete(user.email)}
                >Deletar conta</button>                    
            </div>
            <Menu />
        </div>
    );
}

export default ConsumerProfile;