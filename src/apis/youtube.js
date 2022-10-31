import axios from 'axios';

const KEY = 'AIzaSyAEXmgrtBAcwIaO4a24FV3kDZF51arLWus';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})