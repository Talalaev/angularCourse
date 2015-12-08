function *deleteUser() {
    
    var result = yield User.remove({ _id: this.session.passport.user }).exec();
    this.body = result;
    
}

const MongoClient   = require('mongodb').MongoClient
, assert            = require('assert');
const roots			= require('config');
const mongoose      = require("mongoose");
const User          = require("./models/user");

module.exports = deleteUser;