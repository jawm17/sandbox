const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true,
    }
});


module.exports = mongoose.model("Item", ItemSchema);

