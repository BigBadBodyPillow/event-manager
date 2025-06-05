import { Link } from 'react-router-dom';
//css
import '../styles/NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav_link" draggable="false">
            Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="nav_link" draggable="false">
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
