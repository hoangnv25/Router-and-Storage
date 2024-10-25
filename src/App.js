import { Routes, Route } from 'react-router-dom';

import Home from './component/Home.js'
import Scoreboard from './component/Scoreboard.js'
import Compete from './component/Compete.js'
import About from './component/About.js'
import Contest_rule from './component/Contest_rule.js';
import Login from './component/Login.js';
import Register from './component/Register.js';
import Setting from './component/Setting.js';

import NavBar from './component/NavBar.js';
import Footer from './component/Footer.js';
import MessengerLogin from './component/messenger_login.js';


import './App.css';

if (localStorage.getItem('mode') === 'night') {
  document.body.classList.add('night-mode');
}
else
{
  document.body.classList.remove('night-mode');
}

function App() {
  return (
    <div className="App">

    <MessengerLogin />
    <NavBar />
    

    <Routes> 
      <Route path='/home' element={<Home/>} />
      <Route path='/scoreboard' element={<Scoreboard/>} />
      <Route path='/compete' element={<Compete/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contest_rule' element={<Contest_rule/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/' element={<Register/>} />
      <Route path='/setting' element={<Setting/>} />
    </Routes>

    <Footer />

      
    </div>
  );
}

export default App;
