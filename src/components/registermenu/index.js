import { Link } from 'react-router-dom';
import './styles.css';
import React from 'react';
import logo from '../../img/logo.png';

function Registermenu() {
  return (
    <div className="container">
      <main>
        <div className="bg">
          <img className="rst-logo" src={logo} />
        </div>
        <div>
          <form className="form">
            <h3 className="title">Faça seu Cadastro</h3>
            <input type="text" placeholder="Name" className="input" />
            <input type="text" placeholder="Email" className="input" />
            <input type="password" placeholder="Senha" className="input" />
            <input
              type="password"
              placeholder="Confirmação de Senha"
              className="input"
            />
            <button className="register" type="submit">
              Cadastrar
            </button>
            <Link to="/login" className="link">
              Eu ja possuo Cadastro.
            </Link>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Registermenu;
