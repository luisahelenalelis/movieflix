import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { getAuthData, requestBackendLogin, saveAuthData } from 'util/requests';

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

  const { register, handleSubmit, formState: {errors} } = useForm<FormData>();

  //const location = useLocation<LocationState>();

  //const { from } = location.state || { from: { pathname: '/movie' } };

  const history = useHistory();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        const token = getAuthData().access_token;
        console.log('Token gerado = ' + token);
        setHasError(false);
        console.log('Sucesso', response);
        history.push('/movies')
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
            {...register('username', {
              required: 'Campo obrigatório!',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email inválido!'
              }
            })}
            type="text"
            className={`form-control base-input ${ errors.username ? 'is-invalid' : ''}`}
            placeholder="Email"
            name="username"
          />
          <div className="invalid-feedback d-block">{errors.username?.message}</div>
        </div>
        <div className="mb-2">
          <input
            {...register('password', {
              required: 'Campo obrigatório!'
            })}
            type="password"
            className={`form-control base-input ${ errors.password ? 'is-invalid' : ''}`}
            placeholder="Senha"
            name="password"
          />
          <div className="invalid-feedback d-block">{errors.password?.message}</div>
        </div>
        <div className="btn-container">
          <button className="login-submit">Fazer login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
