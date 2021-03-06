function *getUser() {
    console.log("getUser");
    var result = yield User.findOne({_id: this.session.passport.user}).exec();
    delete result.password;
    result.password = null;
    console.log(result);
    this.body = result;
    
}

const MongoClient   = require('mongodb').MongoClient
, assert            = require('assert');
const roots			= require('config');
const mongoose      = require("mongoose");
const User          = require("./models/user");

module.exports = getUser;
