import React from 'react';
import './style.css';
import profile from '../../img/profile.png';
import logo from '../../img/logo.png';

function Dadospessoais() {
  return (
    <div className="container">
      <main>
        <div className="bg">
          <header>
            <h1>Sair</h1>
            <div>
              <img src={logo} className="minilogo" />
              <div className="EmailName">
                <h2>João Paulo Ramos Lopes</h2>
                <p>Ramoslopesjoãopaulo@gmail.com</p>
              </div>
            </div>
            <div className="list">
              <ul>
                <li>Dados Pessoais</li>
                <li>TodoList</li>
              </ul>
            </div>
          </header>
        </div>
        <div>
          <aside className="aside">
            <h3 className="personaldata">/Dados Pessoais</h3>
            <img className="profie" src={profile} />
            <h4 className="picture">Trocar Foto</h4>
            <input type="text" placeholder="Name" className="placeholder" />
            <input type="text" placeholder="Email" className="placeholder" />
            <input
              type="password"
              placeholder="Senha"
              className="placeholder"
            />
            <input
              type="password"
              placeholder="Confirmação de Senha"
              className="placeholder"
            />
            <button className="register" type="submit">
              Editar
            </button>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default Dadospessoais;
