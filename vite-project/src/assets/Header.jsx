import {Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
      <nav>
        <ul className='list'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/submission">Submission</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
        </ul>
      </nav>
    )
}

export default Header;
