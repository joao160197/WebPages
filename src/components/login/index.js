import { Link } from 'react-router-dom';
import React from 'react';
import './styles.css';
import logo from '../../img/logo.png';

function Login() {
  return (
    <div className="container">
      <main>
        <div className="bg">
          <img className="rst-logo" src={logo} />
        </div>
        <div>
          <form className="form">
            <h3 className="title">Faça seu login</h3>
            <input type="text" placeholder="Email" className="input" />
            <input type="password" placeholder="Senha" className="input" />
            <Link to="/dadospessoais" className="link">
              {' '}
              <button className="register" type="submit">
                Entrar
              </button>
            </Link>
            <Link to="/registermenu" className="link">
              {' '}
              Não possuo cadastro.
            </Link>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;
