import axios from "axios";

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const request = axios.create({
    baseURL: BASE_URL,
    timeout: 5000, // Aumentamos el timeout para conexiones lentas
    validateStatus: function (status) {
        return status >= 200 && status < 500; // Para manejar errores 404 como respuestas válidas
    }
});

class Api {
    getWord = async (word) => {
        try {
            const response = await request.get(word);

            if (response.status === 404) {
                throw new Error('Word not found');
            }

            return response.data;
        } catch (error) {
            console.error("Error fetching word:", error);
            throw error;
        }
    };
}

export default new Api();