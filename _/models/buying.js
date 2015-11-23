const mongoose      = require("mongoose");

var buyingSchema = new mongoose.Schema({
    date: {
        type: "String",
        required: true
    },
    products: {
        type: "String",
        default: ""
    },
    manufacturedGoods: {
        type: "String",
        default: ""
    },
    utilities: {
        type: "String",
        default: ""
    },
    amount: {
        type: "Number",
        required: true
    },
    price: {
        type: "Number",
        required: true
    },
    sum: {
        type: "Number",
        required: true
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId
    }
});

module.exports = mongoose.model('Buying', buyingSchema);