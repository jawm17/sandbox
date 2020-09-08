const express = require('express');
const itemRouter = express.Router();
const Item = require('../models/Item');

// register new user
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

module.exports = itemRouter;
