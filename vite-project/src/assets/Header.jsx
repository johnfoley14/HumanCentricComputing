import { Outlet, Link } from 'react-router-dom';
import '../styling/Header.css';
import PropTypes from 'prop-types';
import logo from '../images/SmartReelGreenLogo3.jpg';


const Header = ({ isLoggedIn }) => {

    return (
      <div>
        <nav id='header_nav'>
          <ul className='pages_list'>
            <li className='logo'>
              <img src={logo} alt="Logo" style={{ width: '78px', height: '78px', position: 'absolute', top: '0px', left: '0px'}} />
            </li>
            <li style={{ width: '78px', height: '78px'}}>
              <Link to="">Home</Link>
            </li>
            <li style={{ width: '78px', height: '78px'}}>
              <Link to="data">Data</Link>
            </li>
            <li style={{ width: '78px', height: '78px'}}>
              <Link to="salim">Salim GUI</Link>
            </li>
            {!isLoggedIn 
              ? <li style={{ width: '78px', height: '78px'}}> <Link to="login">Login</Link> </li>
              : <li style={{ width: '78px', height: '78px'}}> <Link to="logout">Logout</Link> </li>
            }
          </ul>
        </nav>
        <Outlet />
      </div>
    )
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Header;
