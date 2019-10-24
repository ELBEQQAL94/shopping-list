const { 
    createUser, 
    getUser
} = require('../controllers/users');

const { auth } = require('../middleware/auth');

const express = require('express');

const router = express.Router();

// get users
//router.get('/userss', getUsers);

// get user
//router.get('/items/:id', getItem);

// create user
router.post('/signup', createUser);

// get user
router.get('/users/:userId', auth, getUser);

// update user
//router.put('/items/edit-user/:userId', editUser);

// delete user
//router.delete('/users/:userId', deleteUser);

module.exports = router;