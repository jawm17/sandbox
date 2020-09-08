const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    link: {
        type: String,
        required: true,
    },
    heroImg: {
        type: String,
        required: true
    },
    mainImg: {
        type: String,
        required: true
    },
    discovered: {
        type: Boolean,
        default: false
    }
});


module.exports = mongoose.model("Item", ItemSchema);

