const { 
    signIn, 
} = require('../controllers/auth');

const express = require('express');
const router = express.Router();

// sign in user
router.post('/sign-in', signIn);

module.exports = router;