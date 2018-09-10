
import { combineReducers } from 'redux';
import tinderReducer from './tinderReducer';

export default combineReducers({
    tinder: tinderReducer
});