import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://3.109.247.241:6678/api'
});
export default instance; 