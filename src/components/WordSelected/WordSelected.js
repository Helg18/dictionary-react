import React from 'react';
import styles from './WordSelected.module.css';

const WordSelected = ({ word, pronunciation, definition, example, ukSound, usSound }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Word Definition</h2>
            <div className={styles.wordContainer}>
                <h1 className={styles.word}>{word}</h1>
                <p className={styles.pronunciation}>{pronunciation}</p>
            </div>
            <p className={styles.speechType}>noun</p>
            <p className={styles.definition}>{definition}</p>
            <p>
                <span>GB</span>
                <audio src={ukSound} controls />
            </p>
            <p>
                <span>US</span>
                <audio src={usSound} controls />
            </p>
            {example && <p className={styles.example}>*{example}*</p>}
            <button className={styles.button}>SAVE WORD</button>
        </div>
    );
};

export default WordSelected;