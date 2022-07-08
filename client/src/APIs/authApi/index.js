import axios from 'axios';


const userValues = axios.create({
    baseURL: 'http://localhost:5000',
    method: 'GET',
    withCredentials: true,
    responseType: 'json',
})


export default userValues;