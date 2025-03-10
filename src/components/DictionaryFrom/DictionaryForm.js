import React, { useState } from 'react';
import styles from './DictionaryForm.module.css';
import dictionaryAPI from '../../services/dictionaryAPI';

const DictionaryForm = ({ onSearch }) => {
    const [word, setWord] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!word.trim()) {
            setError('Please enter a word');
            return;
        }

        setIsLoading(true);

        try {
            const data = await dictionaryAPI.getWord(word);
            onSearch(data[0]); // Usamos la primera entrada del array
            setError('');
        } catch (err) {
            setError(err.response?.data?.message || 'Word not found');
            onSearch(null);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
                <input
                    type="text"
                    value={word}
                    onChange={(e) => {
                        setWord(e.target.value);
                        setError('');
                    }}
                    placeholder="Enter a word..."
                    className={styles.input}
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    className={styles.button}
                    disabled={isLoading}
                >
                    {isLoading ? 'Searching...' : 'Search'}
                </button>
            </div>
            {error && <p className={styles.error}>{error}</p>}
        </form>
    );
};

export default DictionaryForm;