import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
    isSignedIn: null,
    user: null
}


const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, ...action.payload }
        case SIGN_OUT:
            return { ...state, isSignedIn: false, user: null }

        default:
            return state;
    }
}



export default authReducer;