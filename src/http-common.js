import axios from "axios";

const api_base_url = 'https://swapi.dev/api/';

const httpClient = axios.create({
    baseURL: api_base_url,
    headers: {
        "Content-type": "application/json"
    }
});

export default httpClient;