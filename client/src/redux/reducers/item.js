import { GET_ITEMS, EDIT_ITEM, DELETE_ITEM , ADD_ITEM, LOADING_ITEMS } from '../type';


const initState = {
    items: [],
    loading: false
}

export default function (state = initState, action) {

  switch(action.type){
    case GET_ITEMS : 
      return {
        ...state,
        items: action.payload,
        loading: false
      }

    case EDIT_ITEM : 
      return {
        ...state,
        item: action.payload,
        loading: false
      }

    case LOADING_ITEMS : 
      return {
        ...state,
        loading: true
      }

    case DELETE_ITEM: 
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload),
        loading: false
      }

    case ADD_ITEM: 
      return {
        ...state,
        items: [action.payload, ...state.items],
        loading: false
      }
    
    default: 
      return state;
  }
}