const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const ItemSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('Item', ItemSchema);

