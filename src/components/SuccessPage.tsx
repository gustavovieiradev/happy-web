import React from 'react';
import { Link } from 'react-router-dom';

import imgSuccess from '../images/image-success.svg';

import '../styles/components/success-page.css';

export default function SuccessPage() {
  return (
    <div id="success">
        <div className="split-one">
          <h1>Ebaaa!</h1>
          <p>O cadastro deu certo e foi enviado ao administrador para ser aprovado. <br/> Agora é só esperar :)</p>
          <Link to="/app" className="link">Voltar para o mapa</Link>
        </div> 
        <img src={imgSuccess} alt="Happy" />
    </div>
  )
}