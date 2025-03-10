import React, { useState } from 'react';
import WordSelected from './components/WordSelected/WordSelected';
import DictionaryForm from './components/DictionaryFrom/DictionaryForm';
import './App.css';

function App() {
  const [wordData, setWordData] = useState(null);

  return (
    <div className="App">
      <DictionaryForm onSearch={setWordData} />
      {wordData ? (
        <WordSelected
          word={wordData.word}
          pronunciation={wordData.phonetic}
          definition={wordData.meanings[0].definitions[0].definition}
          example={wordData.meanings[0].definitions[0].example || ''}
          ukSound={wordData.phonetics[0].audio}
          usSound={wordData.phonetics[1].audio}
        />
      ) : (
        <p className="placeholder-text">Search a word to see its definition</p>
      )}
    </div>
  );
}

export default App;