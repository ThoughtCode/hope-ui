import axios from 'axios';

const instace = axios.create({
    baseURL: 'http://0.0.0.0:3000/api/v1'
});

export default instace;