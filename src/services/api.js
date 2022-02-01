import axios from "axios";

// 38405032/json

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;