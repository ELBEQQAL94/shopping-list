const Item = require('../models/Item');

const _ = require('lodash');

// get items
exports.getItems = (req, res ) => {
    Item.find()
        .sort({date: -1})
        .then(items => res.json(items))
}

// create 
exports.createItems = (req, res) => {
    const name = req.body.name;
    const item = new Item({name})

    // save item
    item.save((err, result) => {
        if(err) return res.status(404).json({
            error: err
        });

        return res.status(200).json(result)
    });
};

// edit item
exports.editItem = (req, res) => {
    Item.findById(req.params.itemId)
        .then(item => {
            _.extend(item, req.body);

            item.save()
                .then(() => res.status(200).json({
                    message: 'Update item successfully'
                }))
        })
        .catch(err => res.status(404).json({error: err}));
};

// delete item
exports.deleteItem = (req, res) => {
    Item.findById(req.params.itemId)
        .then(item => {
            item.remove()
                .then(() => res.status(200).json({
                    message: 'Item delete successfully'
                }))
        })
        .catch(err => res.status(404).json({error: err}));
};

