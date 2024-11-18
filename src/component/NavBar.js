import { Link, useNavigate } from 'react-router-dom';
import { ShowML } from './handle/ShowML';

import './NavBar.css';
import logoptit from '../img/LogoPtit.png';
import Naver from '../img/Naver_Logo.png';


function NavBar() {

  const navigate = useNavigate();

    const handleClick = (event, path) => {
      event.preventDefault();

      const accessToken = sessionStorage.getItem('accessToken');
      if (accessToken) {
          navigate(path); 
      }
      else {
          console.log("Access token không tồn tại. Vui lòng đăng nhập.");
          ShowML();
          // navigate('/login');
      }
    };



    return (

    <div className='NavBar'>
        <nav>
        <img className='ptit' src={logoptit} alt="Logo PTIT" />
        <img className='naver' src={Naver} alt="Naver" />

        <Link className='cen_des' to='/home'>Cuộc thi AI của Khoa CNTT</Link>

          <ul>

            <li>
              <Link to='/home'  >Home</Link>
            </li>

            <li>
              <Link to='/scoreboard' onClick={(e) => handleClick(e, '/scoreboard')} >Scoreboard</Link>
            </li>

            <li>
              <Link to='/compete' onClick={(e) => handleClick(e, '/compete')} >Compete</Link>
            </li>

            <li>
              <Link to='/about'>About</Link>
            </li>

            <li>
              <Link to='/contest_rule'>Contest Rule</Link>
            </li>

            <li>
              <Link to='/ban' >Ban</Link>
            </li>

            <li>
              <Link to='/login'>Login</Link>
            </li>

            <li>
              <Link to='/'>Register</Link>
            </li>

            <li>
              <Link to='/setting'>Setting</Link>
            </li>


          </ul>
        </nav>
    </div>

    );
}

export default NavBar;
