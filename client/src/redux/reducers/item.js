import uuid from 'uuid';
import { GET_ITEM, DELETE_ITEM , ADD_ITEM } from '../type';


const initState = {
    items: [
        {
          id: uuid(),
          name: "Milk"
        },
        {
          id: uuid(),
          name: "Steak"
        },
        {
          id: uuid(),
          name: "Food"
        },
        {
          id: uuid(),
          name: "Eggs"
        },
        {
          id: uuid(),
          name: "Meal"
        },
        {
          id: uuid(),
          name: "Bread"
        }
      ]
}

export default function (state = initState, action) {

  switch(action.type){
    case GET_ITEM : 
      return {
        ...state
      }

    case DELETE_ITEM: 
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }

    case ADD_ITEM: 
      return {
        ...state,
        items: [action.payload, ...state.items]
      }
    
    default: 
      return state;
  }
}