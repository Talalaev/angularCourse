const mongoose      = require("mongoose");

var userSchema = new mongoose.Schema({
    name: {
        type: "String",
        required: true
    },
    login: {
        type: "String",
        unique: true
    },
    password: {
        type: "String",
    },
    email: {
        type: "String",
        required: true,
        unique: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});
    
module.exports = mongoose.model('User', userSchema);