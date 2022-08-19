import './styles.css';

import { Link } from 'react-router-dom';
import {
  getTokenData,
  isAuthenticated,
  removeAuthData,
  TokenData,
} from 'util/auth';
import { useEffect, useState } from 'react';
import history from 'util/history';

type AuthData = {
  authenticated: boolean;
  tokenData?: TokenData;
};

const Navbar = () => {
  const [authData, setAuthData] = useState<AuthData>({ authenticated: false });

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthData({
        authenticated: false,
      });
    }
  }, []);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthData({
      authenticated: false,
    });
    history.replace('/');
  };

  return (
    <nav className="bg-primary main-nav">
      <div className="container-nav">
        <Link to="/">
          <h4>MovieFlix</h4>
        </Link>
        {authData.authenticated ? (
          <div className="navbar-login-logout">
            <Link to={'/'} onClick={handleLogoutClick}>
              Sair
            </Link>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
