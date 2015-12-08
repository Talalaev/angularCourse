function *getUsers() {
    this.body = yield User.find({}, {name: 1}).exec();
}

const MongoClient   = require('mongodb').MongoClient
, assert            = require('assert');
const roots			= require('config');
const mongoose      = require("mongoose");
const User          = require("./models/user");

module.exports = getUsers;