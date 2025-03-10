import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import dictionaryAPI from './services/dictionaryAPI';
import './App.css';

function App() {
  const [wordData, setWordData] = useState(null); // Estado para almacenar los datos de la palabra

  useEffect(() => {
    async function fetchWord() {
      try {
        const data = await dictionaryAPI.getWord('apple');
        setWordData(data);
      } catch (error) {
        console.error("Error fetching word:", error);
      }
    }

    fetchWord();
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;