import axios from 'axios';

const instace = axios.create({
    baseURL: 'https://hopeec-production.herokuapp.com/api/v1'
});

export default instace;