import { 
    GET_ITEMS, 
    EDIT_ITEM, 
    DELETE_ITEM , 
    ADD_ITEM, 
    LOADING_ITEMS } from '../type';
import axios from 'axios';

// SET ITEM LOADINS
export const setItemsLoading = () => {
    return {
        type: LOADING_ITEMS  
    }
}

// GET ITEMS
export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
    .get('/items')
    .then(res => dispatch({
        type: GET_ITEMS,
        payload: res.data
    }))
    .catch(err => console.log(err));
};

// DELETE ITEM
export const deleteItem = id => dispatch => {
    dispatch(setItemsLoading());
    axios
    .delete(`/items/${id}`)
    .then(res => dispatch({
        type: DELETE_ITEM,
        payload: id
    }))
    .catch(err => console.log(err));
};

// ADD ITEM
export const addItem = item => dispatch => {
    dispatch(setItemsLoading());
    axios
    .post('/items/create-item', item)
    .then(res => dispatch({
        type: ADD_ITEM,
        payload: res.data
    }))
    .catch(err => console.log(err));
};

// EDIT ITEM
export const editItem = (id, item) => dispatch => {
    dispatch(setItemsLoading());
    axios
    .put(`/items/edit-item/${id}`, item)
    .then(res => dispatch({
        type: EDIT_ITEM,
        payload: res.data
    }))
    .catch(err => console.log(err));
};