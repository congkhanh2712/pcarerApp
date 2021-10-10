import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://615fff03faa03600179fb809.mockapi.io/pcare/api',
    timeout: 1000,
})
export default instance