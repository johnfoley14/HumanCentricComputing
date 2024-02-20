import { Outlet, Link } from 'react-router-dom';
import './Header.css';

import  { useState } from "react";


const Header = () => {

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
            <li>
              <Link to="signup">Login</Link>
            </li>
            <li>
              <Link to="project">Project</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    )
}

export default Header;
