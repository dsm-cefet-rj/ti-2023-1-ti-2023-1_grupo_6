import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './style.css';
import blueIcon from '../../../assets/blueIcon.png';

const NewSection = () => {
  const navigate = useNavigate();
  const [nameSection, setName] = useState("");

  return (
    <div className="section-registration">
      <div id='Logo'>
        <img src={blueIcon} alt="logo" />
      </div>

      <div className='Registration'>

        <div className="camp">
          <h2 className='Title'>Nova Seção de produtos</h2>

          <div id='infos'>
            <label id='input-description'>Nome da seção: </label>
            <input
              id='input-info'
              type="text"
              placeholder="Digite o nome da seção"
              value={nameSection}
              onChange={(e) => [setName(e.target.value)]}
            />
          </div>


          <div id='Buttons'>
            <button id='Voltar' onClick={() => { navigate("/home") }}>Voltar</button>
            <button id='Confirmar' type="submit">Confirmar</button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default NewSection;
