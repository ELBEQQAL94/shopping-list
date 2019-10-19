import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers';

const initState = {};

const middleWare = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducers,
    initState,
  composeEnhancer(applyMiddleware(...middleWare)),
)

export default store;
