import React from 'react';
import { IoMdListBox } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Informacoes() {
  return (
    <div className="infos">
      <strong className="titulo-infos">
        <IoMdListBox size={50} style={{ marginRight: 10 }} />
        Currículo
      </strong>
      <div className="curriculo">
        <strong> Nome: </strong>
        <p> Kaique Henrique Carreiro da Costa </p>

        <strong className="infosTxt"> Perfil: </strong>
        <p>
          Sou proativo, sempre busco novos conhecimentos de acordo com a tendência do mercado de tecnologia,
          ajudo pessoas com dificuldade ou problemas e aprendo com os erros.
        </p>

        <strong className="infosTxt"> Objetivo: </strong>
        <p>
          Oportunidade de estágio na área de desenvolvimento de software
        </p>

        <strong className="infosTxt"> Email: </strong>
        <p> kaiquehenrique.2005@outlook.com </p>

        <strong className="infosTxt"> Telefone: </strong>
        <p> (19) 99412-7509 / (19) 3854-1926 </p>

        <strong className="infosTxt"> GitHub: </strong>
        <p>
          <a href="https://www.github.com/kaique64"> https://www.github.com/kaique64 </a>
        </p>

        <strong className="infosTxt"> Linkedin: </strong>
        <p>
          <a href="https://www.linkedin.com/in/kaique-henrique-064b261b2"> https://www.linkedin.com/in/kaique-henrique-064b261b2 </a>
        </p>
        <strong className="infosTxt"> Formação: </strong>
        <ul>
          <p className="infosTxt">
            <li>
              <strong> Ensino Médio Técnico em Contabilidade (Cursando) </strong>
              <br />
              Escola Dr. Leandro Franceschini | Conclusão: 12/2022
            </li>
          </p>
          <p className="infosTxt">
            <li>
              <strong> Ensino Técnico em Desenvolvimento de Sistemas (Cursando) </strong>
              <br />
              SENAI Prof. Dr. Euryclides de Jesus Zerbini | Conclusão: 06/2021
            </li>
          </p>
        </ul>

        <strong className="infosTxt"> Conhecimentos: </strong>
        <ul>
          <li>
            <p> HTML (Avançado) </p>
          </li>
          <li>
            <p> CSS (Intermediário) </p>
          </li>
          <li>
            <p> JavaScript (Avançado) </p>
          </li>
          <li>
            <p> Java (Básico) </p>
          </li>
          <li>
            <p> C# ASP .NET Framework (Básico) </p>
          </li>
          <li>
            <p> MySQL (Básico) </p>
          </li>
          <li>
            <p> MongoDB (Básico) </p>
          </li>
          <li>
            <p> Python (Básico) </p>
          </li>
          <li>
            <p> ReactJS (Avançado) </p>
          </li>
          <li>
            <p> NodeJS (Intermediário) </p>
          </li>
          <li>
            <p> React Native (Básico) </p>
          </li>
        </ul>

        <strong className="infosTxt"> Idiomas: </strong>
        <p>
          Inglês: avançado
        </p>
      </div>
    </div>
  );
}
