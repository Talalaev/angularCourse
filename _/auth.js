'use strict';
const passport      = require('koa-passport');
const mongoose      = require("mongoose");
const roots			= require('config');
const User          = require("./models/user");


passport.serializeUser(function(user, done) {
    done(null, user._id)
});

passport.deserializeUser(function(id, done) {
    console.log(id);
    User.findById(id, function(err, user) {
        console.log("deserialize");
        done(null, user); 
    });
})

var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(function (username, password, done) {
    
    console.log("in strategy");
    
    User.find({name: username}, function(err, user) {
        console.log("Find user");
        console.log(user);
        if ( !user.length ) return done(null, false);
        user = user[0];
        
        // retrieve user ...
        if (username === user.name && password === user.password) {
            done(null, user)
        } else {
            done(null, false)
        }
        
    });
    
}));
