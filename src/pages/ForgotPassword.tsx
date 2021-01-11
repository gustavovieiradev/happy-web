import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import HalfPage from '../components/HalfPage';

import '../styles/pages/forgot-password.css';

export default function ForgotPassowrd() {
  const { goBack } = useHistory();
  return(
    <div id="page-forgot-password">
      <HalfPage />
      <main>
        <h1>Esqueci a senha</h1>
        <p className="subtitle">Sua redefinição de senha será enviada
          para o e-mail cadastrado.
        </p>
        <div className="box-input">
          <label>E-mail</label>
          <input type="text" />
        </div>
        <button type="button">
          Enviar
        </button>
      </main>
      <button type="button" className="back-button" onClick={goBack}>
        <FiArrowLeft size={24} color="#14C3D6" />
      </button>
    </div>
  );
}