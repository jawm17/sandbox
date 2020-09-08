const express = require('express');
const itemRouter = express.Router();
const Item = require('../models/Item');

// create new item
itemRouter.post('/newItem', (req, res) => {
    const { link } = req.body;
    const message = { msgBody: "Error has occured", msgError: true };

    const newItem = new Item({ link });
    newItem.save(err => {
        if (err)
            res.status(500).json({ message });
        else
            res.status(201).json({ message: { msgBody: "Item added", msgError: false } });
    });
});

// get item
itemRouter.get('/getItem', (req, res) => {
    const message = { msgBody: "Error has occured", msgError: true };

    Item.find().exec((err, document) => {
        if (err) {
            res.status(500).json({ message });
        }
        else {
            res.status(200).json({ document });
        }
    });
});

module.exports = itemRouter;
