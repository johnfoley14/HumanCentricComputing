import {Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
      <nav id='header_nav'>
        <ul className='pages_list'>
          <li>
            <Link to="submission">Submission</Link>
          </li>
          <li>
            <Link to="signup">Login</Link>
          </li>
          <li>
            <Link to="project">Project</Link>
          </li>
        </ul>
      </nav>
    )
}

export default Header;
