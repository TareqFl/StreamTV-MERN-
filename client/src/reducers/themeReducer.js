import { DARK_MODE, LIGHT_MODE } from "../actions/types";

const INITIAL_STATE = {
    mode: 'dark'
}

const themeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DARK_MODE:
            return { ...state, mode: 'dark' }
        case LIGHT_MODE:
            return { ...state, mode: 'light' }
        default:
            return state;
    }
}

export default themeReducer;