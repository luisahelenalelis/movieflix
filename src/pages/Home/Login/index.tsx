//import { Link, useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { requestBackendLogin } from 'util/requests';

import './styles.css';

type FormData = {
  username: string;
  password: string;
};

//type LocationState = {
//from: string;
//};

const Login = () => {
  
  const [hasError, setHasError] = useState(false);

  const { register, handleSubmit } = useForm<FormData>();

  //const location = useLocation<LocationState>();

  //const { from } = location.state || { from: { pathname: '/admin' } };

  //const history = useHistory();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        setHasError(false);
        console.log('Sucesso', response);
      })
      .catch((error) => {
        setHasError(true);
        console.log('Erro', error);
      });
  };

  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      {hasError && (
        <div className="alert alert-danger">
          Erro ao tentar efetuar o Login!
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register('username')}
            type="text"
            className={`form-control base-input `}
            placeholder="Email"
            name="username"
          />
          <div className="invalid-feedback d-block">{}</div>
        </div>
        <div className="mb-2">
          <input
            {...register('password')}
            type="password"
            className={`form-control base-input `}
            placeholder="Senha"
            name="password"
          />
          <div className="invalid-feedback d-block">{}</div>
        </div>
        <div className="btn-container">
          <button className="login-submit">Fazer login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
