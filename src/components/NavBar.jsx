import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//css
import '../styles/NavBar.css';

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // if scroll is greater than 0 it means user has scrolled
    function onScroll() {
      setScrolled(window.scrollY > 0);
    }
    window.addEventListener('scroll', onScroll);

    //remove event listener
    function cleanup() {
      window.removeEventListener('scroll', onScroll);
    }

    return cleanup;
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav_link" draggable="false">
            Home
          </Link>
        </li>
        <li>
          <Link to="/addevent" className="nav_link" draggable="false">
            Add Event
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="nav_link" draggable="false">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/help" className="nav_link" draggable="false">
            Help
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
