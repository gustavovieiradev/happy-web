import React from 'react';

import HalfPage from '../components/HalfPage';

import '../styles/pages/reset-password.css';

export default function ResetPassword() {
  return (
    <div id="page-reset-password">
      <HalfPage />
      <main>
        <h1>Redefinição de senha</h1>
        <p className="subtitle">Escolha uma nova senha para você
          acessar o dashboard do Happy
        </p>
        <div className="box-input">
          <label>Nova senha</label>
          <input type="password" />
        </div>
        <div className="box-input">
          <label>Repetir senha</label>
          <input type="password" />
        </div>
        <button type="button">
          Enviar
        </button>
      </main>
    </div>
  )
}