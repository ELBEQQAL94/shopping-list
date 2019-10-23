const { 
    getItems, 
    createItems, 
    editItem, 
    deleteItem,
    getItem
} = require('../controllers/items');

const express = require('express');

const router = express.Router();

// get items
router.get('/items', getItems);

// get item
router.get('/items/:id', getItem);

// create item
router.post('/items/create-item', createItems);

// update item
router.put('/items/edit-item/:itemId', editItem);

// delete item
router.delete('/items/:itemId', deleteItem);

module.exports = router;