import axios from 'axios';


const utubeAPI = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3'
})


export default utubeAPI