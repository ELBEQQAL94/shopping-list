import { 
    USER_LOADING, 
    USER_LOADED, 
    AUTH_ERROR, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    LOGOUT_SUCCESS, 
    REGISTER_SUCCESS, 
    REGISTER_FAIL } from '../type';


const initState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null 
}

export default function (state = initState, action) {

  switch(action.type){
    case  USER_LOADING: 
      return {
        ...state,
        isLoading: true
      }

    case  USER_LOADED: 
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      }
    
    case  LOGIN_SUCCESS: 
    case  REGISTER_SUCCESS: 
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      }
    
    case  AUTH_ERROR: 
    case  LOGIN_FAIL: 
    case  REGISTER_FAIL: 
    case  LOGOUT_SUCCESS: 
      return {
        ...state,
        token: null,
        user: null,
        isLoading: false,
        isAuthenticated: false
      }
    
    default: 
      return state;
  }
}