function *updateUser() {
    
    var user = yield User.find({password: this.request.body.oldPassword}).exec();
    
    if ( !user.length ) {
        this.status = 400;
        this.body = "invalid password";
        return;
    }
    
    // только для святых пользователей
    // если придет не коректный объект сервер ляжет!!!
    try {
        yield User
            .where({ _id: this.session.passport.user })
            .update(this.request.body).exec();
        
        this.status = 200;
        this.body = "ok";
    } catch(e) {
        this.status = 400;
        this.body = "validation error";
        console.log(e);
    }
    
}

const MongoClient   = require('mongodb').MongoClient
, assert            = require('assert');
const roots			= require('config');
const mongoose      = require("mongoose");
const User          = require("./models/user");

module.exports = updateUser;