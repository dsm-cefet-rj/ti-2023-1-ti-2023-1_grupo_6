import './style.css';
import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import noAvatar from '../../../assets/noAvatar.svg';
import blueIcon from '../../../assets/blueIcon.png';

const ConsumerProfile = () => {
    const [image, setImage] = useState(null);
    const [username, setUsername] = useState('');

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
        // enviar nome de usuário para o servidor
    }

    return (
        <div className="profile">
            <img src={blueIcon} alt="logo" className="img-blueIcon"/>
            <h1 className="profile-title">Perfil</h1>
            <div className='picture'>
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
                    <label htmlFor="username">
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                            className = "input-username"
                        />
                    </label>

                    <button type="submit">
                        <p className="text-input-profile">Salvar</p>
                    </button>

                    <button type="text" className='my-pets-button'>
                        <p>Meus pets</p>
                    </button>

                </form>
            </div>


            
        </div>
    );
}

export default ConsumerProfile;
