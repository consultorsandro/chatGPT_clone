import axios from 'axios';
const url_api = 'http://localhost:5555/api/prompt';

export const makeRequest = async (message) => {
    const {data} = await axios.post(url_api, message)
    return data;
};