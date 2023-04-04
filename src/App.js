import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Pages/Login/index.js';
import Home from './components/Pages/Home/index.js'
import Carrinho from './components/Pages/Carrinho/index.js'
import UserRegistration from './components/Pages/UserRegistration/UserRegistration.js'
import PetRegistration from './components/Pages/PetRegistration/index.js'
import PetSelection from './components/Pages/PetSelection/index.js'
import Menu from './components/Pages/menu/index.js'
import OptionRegistration from './components/Pages/OptionRegistration/index.js';
import Lojas from './components/Pages/Lojas';
import Servicos from './components/Pages/Servicos';
import ConsumerProfile from './components/Pages/consumerProfile/index.js';
import ShopRegistration from './components/Pages/ShopRegistration/index.js';
import Birds from './components/Pages/Birds/index.js';
import Cats from './components/Pages/Cats/index.js';
import Hamsters from './components/Pages/Hamsters/index.js';
import Dogs from './components/Pages/Dogs/index.js';
import Rabbit from './components/Pages/Rabbit/index.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/carrinho" element={<Carrinho/>}/>
        <Route path="/registrar/usuario" element={<UserRegistration/>}/>
        <Route path="/registrar/pet" element={<PetRegistration/>}/>
        <Route path="/selecionar/pet" element={<PetSelection/>}/>
        <Route path="/opcao/registrar" element={<OptionRegistration/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/home/lojas" element={<Lojas/>}/>
        <Route path="/home/lojas/Servicos" element={<Servicos/>}/>
        <Route path="/perfil" element={<ConsumerProfile/>}/>
        <Route path="/registrarEstabelecimento" element={<ShopRegistration/>}/>
        <Route path="/passaros" element={<Birds/>}/>
        <Route path="/gatos" element={<Cats/>}/>
        <Route path="/cachorros" element={<Dogs/>}/>
        <Route path="/hamsters" element={<Hamsters/>}/>
        <Route path="/coelho" element={<Rabbit/>}/>
      </Routes>
    </Router>
  );
}

export default App;
