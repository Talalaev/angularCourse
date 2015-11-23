function *getUser() {
    
    
    var name = this.request.url.match(/\/(\w+)$/);
    console.log(name);
    if (name) {
        name = name[1][0].toUpperCase() + name[1].slice(1);
    } else {
        name = "";
    }
    
    console.log(name);
    
    var result = yield User.find({name: name}).exec();
    
        
    this.body = result.length ? true : false;
    
}

const MongoClient   = require('mongodb').MongoClient
, assert            = require('assert');
const roots			= require('config');
const mongoose      = require("mongoose");
const User          = require("./models/user");

module.exports = getUser;
