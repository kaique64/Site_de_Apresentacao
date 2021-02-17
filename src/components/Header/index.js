import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  IoLogoGithub, IoLogoLinkedin,
} from 'react-icons/io5';
import './styles.css';

export default function Header() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    await axios.get('https://api.github.com/users/kaique64')
      .then((response) => {
        console.log(response);
        setData([response.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <header className="header-a">
      {data.map((item) => (
        <>
          <div className="api-items">
            <img src={item.avatar_url} />
            <p>
              Kaique Henrique
            </p>
          </div>
          <div>
            <a href={item.html_url}>
              <IoLogoGithub size={30} className="icons-header" color="white" />
            </a>
            <a href="https://www.linkedin.com/in/kaique-henrique-064b261b2">
              <IoLogoLinkedin size={30} className="icons-header" color="white" />
            </a>
          </div>
        </>
      ))}
    </header>
  );
}
