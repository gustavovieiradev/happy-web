import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import logoLogin from '../images/logo-login.svg';
import '../styles/pages/signin.css';

export default function SignIn() {
  return (
    <div id="page-signin">
      <div className="background">
        <img src={logoLogin} alt="Happy" />
      </div>
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
          <strong>Esqueci minha senha</strong>
        </div>

        <button type="button">
          Entrar
        </button>
      </main>

      <button type="button" className="back-button">
        <FiArrowLeft size={24} color="#14C3D6" />
      </button>
    </div>
  );
}