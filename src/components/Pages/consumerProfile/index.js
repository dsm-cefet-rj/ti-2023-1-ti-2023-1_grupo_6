import './style.css';
import React, { useState, useEffect, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import noAvatar from '../../../assets/noAvatar.svg'
import Header from '../Header/index.js';
import { AuthContext } from '../../../contexts/auth';

const ConsumerProfile = () => {
    const { user, signUp } = useContext(AuthContext);
    const [isScreenWideEnough, setIsScreenWideEnough] = React.useState(false);
    const [image, setImage] = useState(null);
    const [username, setUsername] = useState(user?.username || ''); // inicializa o estado do nome de usuário com o valor armazenado no contexto de autenticação, se existir

    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage);
        //função para lidar com a seleção de imagem
    }
    const handleUsernameChange = (event) => {
        const newUsername = event.target.value;
        setUsername(newUsername);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        //enviar imagem para o servidor
    }
    const handleUsernameSubmit = (event) => {
        event.preventDefault();
        signUp(user.email, user.password, username); // atualiza o nome de usuário no contexto de autenticação
        // enviar nome de usuário para o servidor
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

                    <text className='user-text'>nome: {user.username}</text>
                    <label htmlFor="username">
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                            className = "input-username"
                            
                        />
                    </label>
                </form>
            </div>

            <div className = "box-buttons">
                <button type="submit" className="profile-button">Salvar</button>
                <button className="profile-button">Sair</button>
                <button className="profile-button">Deletar conta</button>                    
            </div>
            
        </div>
    );
}

export default ConsumerProfile;