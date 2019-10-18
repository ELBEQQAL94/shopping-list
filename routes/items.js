const { 
    getItems, 
    createItems, 
    editItem, 
    deleteItem
} = require('../controllers/items');

const express = require('express');

const router = express.Router();

// get items
router.get('/items', getItems);

// create item
router.post('/items/create-item', createItems);

// update item
router.put('/items/edit-item/:itemId', editItem);

// delete item
router.delete('/items/:itemId', deleteItem);

module.exports = router;