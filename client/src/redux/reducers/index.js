import { combineReducers } from 'redux';

// item reducer
import itemReducer from './item';

export default combineReducers({
    item: itemReducer
});