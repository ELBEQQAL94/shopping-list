import { combineReducers } from 'redux';

// item reducer
import itemReducer from './item';

// auth reducer
import authReducer from './auth';

// error reducer
import errorReducer from './error';

export default combineReducers({
    item: itemReducer,
    auth: authReducer,
    error: errorReducer
});