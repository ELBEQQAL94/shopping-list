const { 
    getItems, 
    createItems, 
    editItem, 
    deleteItem,
    getItem
} = require('../controllers/items');

const { auth } = require('../middleware/auth');

const express = require('express');

const router = express.Router();

// get items
router.get('/items', getItems);

// get item
router.get('/items/:id', auth, getItem);

// create item
router.post('/items/create-item', auth, createItems);

// update item
router.put('/items/edit-item/:itemId', auth, editItem);

// delete item
router.delete('/items/:itemId', auth, deleteItem);

module.exports = router;