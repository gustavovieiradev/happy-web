import React from 'react';
import { Link } from 'react-router-dom';

import { IParamsConfirm } from '../interfaces/IParamsConfirm';

import imgConfirm from '../images/image-confirm.svg';

import '../styles/components/confirm.css';

interface IProps {
  params: IParamsConfirm
}

export default function Confirm({ params }: IProps) {
  return (
    <div id="confirm">
        <div className="split-one">
          <h1>{params.title}</h1>
          <p>{params.description}</p>
          <div className="actions">
            <Link to="/app" className="link">{params.textButtonNot}</Link>
            <Link to="/app" className="link">{params.textButtonYes}</Link>
          </div>
        </div> 
        <img src={imgConfirm} alt="Happy" />
    </div>
  )
}