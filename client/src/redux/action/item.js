import { GET_ITEM, DELETE_ITEM , ADD_ITEM } from '../type';

// GET ITEM
export const getItems = () => {
    return {
        type: GET_ITEM,
    }
};

// DELETE ITEM
export const deleteItem = id => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
};

// ADD ITEM
export const addItem = item => {
    return {
        type: ADD_ITEM,
        payload: item
    }
};