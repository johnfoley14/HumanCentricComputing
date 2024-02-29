import { Outlet, Link } from 'react-router-dom';
import './Header.css';
import  { useState } from "react";
import PropTypes from 'prop-types';

const Header = ({ isLoggedIn }) => {

  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleSubMenuToggle = () => {
    setShowSubMenu(!showSubMenu);
  };

    return (
      <div>
        <nav id='header_nav'>
          <ul className='pages_list'>
            <li onMouseEnter={handleSubMenuToggle} onMouseLeave={handleSubMenuToggle}>
            </li>
            <li>
              <Link to="">Home</Link>
            </li>
            {!isLoggedIn 
              ? <li> <Link to="login">Login</Link> </li>
              : <li> <Link to="logout">Logout</Link> </li>
            }
            
            <li>
              <Link to="project">Project</Link>
            </li>
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
