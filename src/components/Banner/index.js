import React, { useState, useEffect } from 'react';
import {
  IoLogoJavascript, IoLogoCss3, IoLogoHtml5,
} from 'react-icons/io5';
import './styles.css';

export default function Banner() {
  const [css, setCss] = useState(0);
  const [js, setJs] = useState(0);
  const [html, setHtml] = useState(0);

  useEffect(() => {
    setCss(50);
    setJs(100);
    setHtml(100);
  }, []);

  return (
    <div className="banner">
      <h1 className="txtBanner"> Kaique Henrique </h1>
      <p className="txtBanner"> Desenvolvedor Full Stack </p>
      <div className="apresentacao">
        <strong> Níveis </strong>
        <div className="niveis">
          <IoLogoHtml5 size={25} style={{ marginRight: 10, color: 'orange' }} />
          <div className="status-bar">
            <div
              className="status-niveis"
              style={{
                width: `${html}%`,
                height: 10,
                backgroundColor: 'orange',
              }}
            />
            {html >= 100 ? (
              <p> Avançado </p>
            )
              : console.log('A')}
          </div>
        </div>
        <div className="niveis">
          <IoLogoJavascript
            size={25}
            style={{
              marginRight: 10, marginTop: 5, color: 'yellow', background: 'black',
            }}
          />
          <div className="status-bar">
            <div
              className="status-niveis"
              style={{
                width: `${js}%`,
                height: 10,
                backgroundColor: '#FFD318',
              }}
            />
            {js >= 100 ? (
              <p> Avançado </p>
            )
              : console.log('A')}
          </div>
        </div>
        <div className="niveis">
          <IoLogoCss3 size={25} style={{ marginRight: 10, color: '#39A9E6' }} />
          <div className="status-bar">
            <div
              className="status-niveis"
              style={{
                width: `${css}%`,
                height: 10,
                backgroundColor: '#39A9E6',
              }}
            />
            {css <= 50 ? (
              <p> Intermediário </p>
            )
              : console.log('A')}
          </div>
        </div>
      </div>
    </div>
  );
}
