import axios from "axios";

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const request = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
});

class Api {
    getWord = async (word) => { // Agregamos el parámetro 'word'
        try {
            const response = await request.get(word); // Usamos el parámetro 'word'
            return response.data; // Retornamos toda la data
        } catch (error) {
            console.error("Error fetching word:", error);
            throw error; // Propagamos el error para que quien llame a la función lo maneje
        }
    };
}

export default new Api();