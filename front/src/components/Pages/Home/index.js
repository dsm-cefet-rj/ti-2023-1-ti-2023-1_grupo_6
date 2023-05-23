import "./../Home/index.css";
import React from "react";
import { useState } from "react";
import blueIcon from "../../../assets/blueIcon.png";
import rabbit from "../../../assets/rabbit.png";
import dog from "../../../assets/dog.png";
import bird from "../../../assets/bird.png";
import cat from "../../../assets/cat.png";
import commercial from "../../../assets/commercial_3.png";
import Menu from "../menu/index.js";
import Carousel from "react-elastic-carousel";
import Header from "../Header/index.js";
import Navbar from "../navbar";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { LojaContext } from '../../../contexts/LojasContext';
import { Link } from 'react-router-dom';
import './index.css';
import useAuth from "../../../hooks/useAuth";
import { UserInformation } from "../../../services/api/userInformation/UserInformation"; 

const Home = () => {
  const { allLojas } = useContext(LojaContext);
  const navigate = useNavigate();
  const [isScreenWideEnough, setIsScreenWideEnough] = React.useState(false);
  const { user } = useAuth();

  const getItemsToShow = () => {
    if (window.innerWidth >= 1200) {
      return 4;
    } else if (window.innerWidth >= 801) {
      return 2;
    } else {
      return 1;
    }
  };

  React.useEffect(() => {
    const handleResize = () => {
      setIsScreenWideEnough(window.innerWidth >= 768); // define a condição de largura mínima para exibir o Navbar
    };

    handleResize(); // define a largura da tela na montagem inicial do componente
    window.addEventListener("resize", handleResize); // adiciona um listener para o evento de redimensionamento da tela
    return () => {
      window.removeEventListener("resize", handleResize); // remove o listener do evento de redimensionamento da tela
    };
  }, []);

  return (
    <div className="App-home">
      <img src={blueIcon} alt="logo" className="img-blueIcon logo-home" />
      <div>{isScreenWideEnough && <Header />}</div>
      {isScreenWideEnough && <Navbar />}
      <div className="section">
        <div className="business">
          <h4>
            <em>
              Cupom de 20% OFF na compra de produtos acima de 100 reais 🐕
            </em>
          </h4>
        </div>
        <div className="categories">
          <img
            src={rabbit}
            alt="coelho"
            className="img-rabbit"
            onClick={() => {
              navigate("/coelho");
            }}
          />
          <img
            src={dog}
            alt="dog"
            className="img-dog"
            onClick={() => {
              navigate("/cachorros");
            }}
          />
          <img
            src={bird}
            alt="bird"
            className="img-bird"
            onClick={() => {
              navigate("/passaros");
            }}
          />
          <img
            src={cat}
            alt="cat"
            className="img-cat"
            onClick={() => {
              navigate("/gatos");
            }}
          />
        </div>
        <Carousel
          showThumbs={false}
          itemsToShow={getItemsToShow()}
          paginationClassName="custom-carousel"
          className="carousel"
        >
      {allLojas().map((loja) => (
          <div key={loja.nome} className="lojas-l">
            <Link to={`/loja/${loja.id}`} className="link-loja-name-home">
              <div className="nameLoja">
                {loja.nome}
                
              </div>
            </Link> 
          </div>
        ))}
        </Carousel>
        <div className="commercial">
          <img
            src={commercial}
            alt="animals"
            className="img-commercial-animals"
          />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Home;
