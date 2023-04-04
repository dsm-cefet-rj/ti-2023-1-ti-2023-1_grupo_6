import './../Home/index.css';
import styled from 'styled-components';
import React from 'react';
import blueIcon from '../../../assets/blueIcon.png';
import rabbit from '../../../assets/rabbit.png';
import dog from '../../../assets/dog.png';
import bird from '../../../assets/bird.png';
import cat from '../../../assets/cat.png';
import commercial from "../../../assets/commercial_3.png";
import petshop1 from "../../../assets/petshop1.png";
import petshop2 from "../../../assets/petshop2.png";
import petshop3 from "../../../assets/petshop3.png";
import petshop4 from "../../../assets/petshop2.png";
import petshop5 from "../../../assets/petshop1.png";
import Menu from "../menu/index.js"
import Carousel from "react-elastic-carousel";
import Header from '../Header/index.js';
import Navbar from '../navbar';


const items = [
    { id: 1, image:<img src={petshop1} alt="pet1" width="260"/> },
    { id: 2, image:<img src={petshop2} alt="pet2" width="272"/> },
    { id: 3, image:<img src={petshop3} alt="pet3" width="260"/> },
    { id: 4, image:<img src={petshop4} alt="pet4" width="272"/> },
    { id: 5, image:<img src={petshop5} alt="pet5" width="260"/> },
];



const Home = () => {
    const [isScreenWideEnough, setIsScreenWideEnough] = React.useState(false);
    const getItemsToShow = () => {
        if (window.innerWidth >= 1200) {
            return 4;
        }
        else if (window.innerWidth >= 801) {
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
        window.addEventListener('resize', handleResize); // adiciona um listener para o evento de redimensionamento da tela
        return () => {
        window.removeEventListener('resize', handleResize); // remove o listener do evento de redimensionamento da tela
        };
    }, 
    []);

return (
    <div className="App-home">
        <img src={blueIcon} alt="logo" className="img-blueIcon logo-home"/>
        <div>
        {isScreenWideEnough && <Header />}
        </div>
        {isScreenWideEnough && <Navbar />}
        <div className="section">
            <div className="search">
                <input type="text" placeholder='Busque por item ou loja' className="input-search-home" maxlength="100"/>
            </div>
            <div className="business">
                <h4><em>Cupom de 20% OFF na compra de produtos acima de 100 reais 🐕</em></h4>
            </div>
            <div className="categories">
                <img src={rabbit} alt="coelho" className="img-rabbit"/>
                <img src={dog} alt="dog" className="img-dog"/>
                <img src={bird} alt="bird" className="img-bird"/>
                <img src={cat} alt="cat" className="img-cat"/>
            </div>
            <Carousel showThumbs={false} itemsToShow={getItemsToShow()} paginationClassName="custom-carousel" className='carousel'>
                {items.map((item) => (
                    <div key={item.id}>
                    <h2>{item.image}</h2>
                </div>
                ))}
            </Carousel>
            <div class="commercial">
                    <img src={commercial} alt="animals" className="img-commercial-animals"/>
            </div>
        <Menu />
        </div>  
    </div>
    );
}

export default Home;
