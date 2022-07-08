import {
    FETCH_STREAMS, FETCH_MY_STREAM,
    FETCH_IRL_STREAMS,
} from "../actions/types";

const STREAMS = {
    streams: null,
    myStream: null,
    irlStreams: null,

}

const fetchStreams = (state = STREAMS, action) => {

    switch (action.type) {
        case FETCH_STREAMS:
            return { ...state, streams: action.payload }

        case FETCH_MY_STREAM:
            return { ...state, myStream: action.payload }

        case FETCH_IRL_STREAMS:
            return { ...state, irlStreams: action.payload }


        default:
            return state;
    }
}

export default fetchStreams;