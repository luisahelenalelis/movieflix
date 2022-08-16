import { Link, useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';

import './styles.css';

type FormData = {
  username: string;
  password: string;
};

type LocationState = {
  from: string;
}

const Login = () => {

  const location = useLocation<LocationState>();

  const { from } = location.state || { from: { pathname: '/admin' } };

  const [hasError, setHasError] = useState(false);

  const history = useHistory();

  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      {hasError && (
        <div className="alert alert-danger">
          Erro ao tentar efetuar o Login!
        </div>
      )}
      <form>
        <div className="mb-4">
          <input
            type="text"
            className={`form-control base-input `}
            placeholder="Email"
            name="username"
          />
          <div className="invalid-feedback d-block">{}</div>
        </div>
        <div className="mb-2">
          <input
            type="password"
            className={`form-control base-input `}
            placeholder="Senha"
            name="password"
          />
          <div className="invalid-feedback d-block">{}</div>
        </div>
        <div className="login-submit">
          <a href="/">Fazer login</a>
        </div>
      </form>
    </div>
  );
};

export default Login;