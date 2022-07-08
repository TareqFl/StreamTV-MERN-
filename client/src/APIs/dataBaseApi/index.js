import axios from 'axios';


const db = axios.create({
    baseURL: 'http://localhost:5000',
    method: 'POST GET PUT PATCH DELETE',
    withCredentials: true,
    responseType: 'json',
})


export default db;