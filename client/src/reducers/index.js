import { combineReducers } from 'redux';
import auth from './authReducer'
import streams from './streaamsReducer'
import theme from './themeReducer'





export default combineReducers({
    auth,
    streams,
    theme
})