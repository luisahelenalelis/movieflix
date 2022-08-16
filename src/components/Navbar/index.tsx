import './styles.css';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary main-nav">
      <div className="container-nav">
        <Link to="/">
          <h4>MovieFlix</h4>
        </Link>
        <div className="navbar-login-logout">
          <a href="#logout">Sair</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
