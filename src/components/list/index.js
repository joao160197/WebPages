import React from 'react';
import './styles.css';
import logo from '../../img/logo.png';

function List() {
  return (
    <div className="container">
      <main>
        <div className="bg">
          <header>
            <aside>
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
            </aside>
          </header>
        </div>
        <div>
          <h3 className="personaldata">/Todo List</h3>
          <h4 className="todolist">Lista de Tarefas</h4>
          <p>
            <div className="checkbox-list">
              <input type="checkbox" id="checkbox-1" />
              <label For="checkbox-1" className="checkbox-1">
                Lista 1 <span>remover</span>
              </label>
            </div>{' '}
          </p>
          <p>
            <div className="checkbox-list">
              <input type="checkbox" id="checkbox-1" />
              <label For="checkbox-1" className="checkbox-2">
                Lista 2
              </label>
            </div>{' '}
          </p>
          <p>
            <div className="checkbox-list">
              <input type="checkbox" id="checkbox-1" />
              <label For="checkbox-1" className="checkbox-3">
                Lista 3
              </label>
            </div>{' '}
          </p>
          <p>
            <div className="checkbox-list">
              <input type="checkbox" id="checkbox-1" />
              <label For="checkbox-1" className="checkbox-4">
                Lista 4
              </label>
            </div>{' '}
          </p>
          <p>
            <div className="checkbox-list">
              <input type="checkbox" id="checkbox-1" />
              <label For="checkbox-1" className="checkbox-1">
                Lista 5 <span> remover</span>
              </label>
            </div>{' '}
          </p>
          <p>
            <div className="checkbox-list">
              <input type="checkbox" id="checkbox-1" />
              <label For="checkbox-1" className="checkbox-1">
                Lista 6 <span> remover</span>
              </label>
            </div>{' '}
          </p>
          <input
            type="text"
            placeholder="Escreva Sua tarefa...."
            className="holder"
          />
          <button className="save" type="submit">
            Salvar
          </button>
        </div>
      </main>
    </div>
  );
}

export default List;
