import React from 'react';
import {
  IoLogoCss3,
  IoLogoJavascript, IoLogoNodejs, IoLogoReact,
} from 'react-icons/io5';
import './styles.css';

export default function Conhecimento() {
  return (
    <div className="grid-container">
      <div className="conhecimentos">
        <div className="card">
          <div className="content">
            <h2 className="title">
              <IoLogoJavascript size={25} style={{ marginRight: '15px', marginBottom: -2 }} />
              JavaScript
            </h2>
            <p className="copy">
              Tenho conhecimento avançado em JavaScript,
              manipulo DOM, arrays e objetos com facilidade!
            </p>
            <button className="btn">Saiba mais</button>
          </div>
        </div>
      </div>
      <div className="conhecimentos">
        <div className="card">
          <div className="content">
            <h2 className="title">
              <IoLogoReact size={25} style={{ marginRight: '15px', marginBottom: -2 }} />
              React Native
            </h2>
            <p className="copy">
              Tenho conhecimento básico sobre React Native,
              consigo utilizar dos recursos do hardware do celular,
              como a digital, reconhecimento facial e
              consumir uma API utilizando Expo ou React Native.
            </p>
            <button className="btn">Saiba mais</button>
          </div>
        </div>
      </div>

      <div className="conhecimentos">
        <div className="card">
          <div className="content">
            <h2 className="title">
              <IoLogoReact size={25} style={{ marginRight: '15px', marginBottom: -2 }} />
              ReactJS
            </h2>
            <p className="copy">
              Tenho conhecimento avançado em ReactJS,
              consigo construir um site em ReactJS com conceitos avançados do framework
            </p>
            <button className="btn">Saiba mais</button>
          </div>
        </div>
      </div>
      <div className="conhecimentos">
        <div className="card">
          <div className="content">
            <h2 className="title">
              <IoLogoNodejs size={25} style={{ marginRight: '15px', marginBottom: -2 }} />
              NodeJS
            </h2>
            <p className="copy">
              Tenho conhecimento intermediario sobre NodeJS,
              consigo construir um RestAPI utilizando Express e banco de dados SQL ou NoSQL.
            </p>
            <button className="btn">Saiba mais</button>
          </div>
        </div>
      </div>
      <div className="conhecimentos">
        <div className="card">
          <div className="content">
            <h2 className="title">
              <IoLogoCss3 size={25} style={{ marginRight: '15px', marginBottom: -2 }} />
              CSS3
            </h2>
            <p className="copy">
              Tenho conhecimento intermediário sobre CSS3,
              consigo construir um site com efeitos visuais.
            </p>
            <button className="btn">Saiba mais</button>
          </div>
        </div>
      </div>
    </div>
  );
}
