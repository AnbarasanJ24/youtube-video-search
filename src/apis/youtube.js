import axios from "axios";

const KEY = 'AIzaSyBIzIe6gvJF7XGVSpJ8Ld9TU128SkPlUk8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})