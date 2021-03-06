import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import HalfPage from '../components/HalfPage';

import '../styles/pages/signin.css';

export default function SignIn() {
  const { goBack } = useHistory();
  return (
    <div id="page-signin">
      <HalfPage />
      <main>
        <h1>Fazer login</h1>
        <div className="box-input">
          <label>E-mail</label>
          <input type="text" />
        </div>
        <div className="box-input">
          <label>Senha</label>
          <input type="password" />
        </div>

        <div className="box-help">
          <div className="checkbox">
            <input type="checkbox" />
            <label>Lembrar-me</label>
          </div>
          <Link to="/forgot-password" className="forgot-password">
            Esqueci minha senha
          </Link>
        </div>

        <button type="button">
          Entrar
        </button>
      </main>

      <button type="button" className="back-button" onClick={goBack}>
        <FiArrowLeft size={24} color="#14C3D6" />
      </button>
    </div>
  );
}