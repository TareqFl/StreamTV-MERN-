import youTube from '../APIs/UtubeApi';
import dbApi from '../APIs/dataBaseApi'
import {
    FETCH_STREAMS, FETCH_IRL_STREAMS,
    SIGN_IN, FETCH_MY_STREAM
    , SIGN_OUT, DARK_MODE,
    LIGHT_MODE,
} from './types';




//fetch streamer data from db

export const fetchMysTream = (value) => async dispatch => {

    const response = await dbApi.post('/streamer', { googleId: value })
    dispatch({
        type: FETCH_MY_STREAM,
        payload: response.data
    })
}

// fetch streams from youtube to render on homepage // and search

export const fetchStreams = (number, API_KEY, term) => async dispatch => {
    const response = await youTube.get('/search', {
        params: {
            q: term,
            key: API_KEY,
            eventType: 'live',
            type: 'video',
            maxResults: number,
            part: 'snippet'
        }
    })
    dispatch({
        type: FETCH_STREAMS,
        payload: response.data.items
    })
}

// fetch irl streams to add on homepage

export const fetchIrlStreams = (number, API_KEY, term) => async dispatch => {
    const response = await youTube.get('/search', {
        params: {
            q: term,
            key: API_KEY,
            eventType: 'live',
            type: 'video',
            maxResults: number,
            part: 'snippet'
        }
    })
    dispatch({
        type: FETCH_IRL_STREAMS,
        payload: response.data.items
    })
}

// Authentication

export const signIn = (values) => {
    return {
        type: SIGN_IN,
        payload: values
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

// mui theme mode

export const darkMode = () => {
    return {
        type: DARK_MODE
    }
}

export const lightMode = () => {
    return {
        type: LIGHT_MODE
    }
}