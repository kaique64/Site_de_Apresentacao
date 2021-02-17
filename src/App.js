import React, { useState, useEffect } from 'react';
import './styles/styles.css';
import Loading from 'react-loading';
import Banner from './components/Banner';
import Conhecimento from './components/Conhecimento';
import Informacoes from './components/Informacoes';
import Header from './components/Header';
import Routes from './routes';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading type={'cylon'} color={'black'} height={250} width={250} />
      ) : (
        <>
          <Routes />
        </>
      )}
    </div>
  );
}

export default App;
