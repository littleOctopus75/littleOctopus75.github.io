import axios from 'axios';
import { GIFResponse } from '../interfaces/gif.response';
const apiKey= 'AOJaDQhqoq0bHB8gER7Z3ztTvddsXLkT'

export const giphyAPi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
});

// giphyAPi.get<GIFResponse>('/random')
// .then(resp => console.log(resp.data.data.images.downsized_large.url))
// .catch(err => console.log(err));
