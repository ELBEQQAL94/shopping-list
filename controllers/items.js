const Item = require('../models/Item');

const _ = require('lodash');

// get items
exports.getItems = (req, res ) => {
    Item.find()
        .sort({date: -1})
        .then(items => res.json(items))
}

// get single item
exports.getItem = (req, res) => {
    console.log('REQ', req.params.id)
    Item.findById({_id: req.params.id})
        .then(item => {
            res.json(item)
            console.log('ITEM', item)
        })
        .catch(err => console.log(err));
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

