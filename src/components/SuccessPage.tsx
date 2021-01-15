import React from 'react';
import { Link } from 'react-router-dom';

import imgSuccess from '../images/image-success.svg';

import '../styles/components/success-page.css';

interface Props {
  params: {
    title: string;
    description: string;
    textButton: string;
    linkButton: string;
  }
}

export default function SuccessPage({params}: Props) {
  console.log(params)
  return (
    <div id="success">
        <div className="split-one">
          <h1>{params.title}</h1>
          <p>{params.description}</p>
          <Link to={params.linkButton} className="link">{params.textButton}</Link>
        </div> 
        <img src={imgSuccess} alt="Happy" />
    </div>
  )
}