'use strict';

const koa 			= require("koa");
const Router		= require("koa-router");
const app 			= koa();
const router		= new Router();
const auth          = new Router();
const MongoClient   = require('mongodb').MongoClient, 
      assert        = require('assert');
const roots			= require('config');
const mongoose      = require("mongoose");
const server		= require('koa-static');
const session       = require("koa-generic-session");
const bodyParser    = require('koa-bodyparser');
const passport      = require('koa-passport');
const path 			= require('path');
const Buying        = require("./models/buying");
const User          = require("./models/user");

mongoose.connect(roots.db_url);

app.keys = ['your-session-secret'];
app.use(session());

app.use(bodyParser());

require('./auth');

app.use(passport.initialize());
app.use(passport.session());

auth
    .get("/", require('./mainPage'))
    .post("/login",function*(next) {
        var ctx = this;
        yield passport.authenticate('local', function*(err, user, info) {
            if (err) throw err
            if (user === false) {
                ctx.status = 401;
                ctx.body = "Auth error";
                //ctx.redirect("/");
            } else {
                console.log("auth sucsses");
                console.log(user);
                yield ctx.login(user)
                ctx.status = 200;
                ctx.body = {
                    status: 200,
                    user: user.name
                };
                //ctx.redirect("/users/" + user.name);
            }
        }).call(this, next)
    })
    .get('/logout', function*(next) {
        this.logout();
        this.redirect('/');
    });

app.use(auth.routes());

app.use(server(path.join(__dirname, '\css')));
app.use(server(path.join(__dirname, '\js')));
app.use(server(path.join(__dirname, '\public')));

app.use(function *(next) {
    if (this.isAuthenticated()) {
        yield next
    } else {
        console.log("dont login");
        this.redirect('/')
    }
});


router
    .get("/users", require('./mainPage'))
    .get("/users/*", require('./mainPage'))
	.get("/getBuyings", require('./getBuyings'))
    .get("/getUser/:user", require('./getUser'))
	.put("/addPhone", require('./addBuyings'))
    .post("/updateBuyings", require('./updateBuyings'))
    .post("/deleteBuyings", require('./deleteBuyings'));

console.log(path.join(__dirname, '\css')); //path.join(__dirname, '/js')
app.use(router.routes());
app.use(require("./pageNotFound"));
app.on('error', require("./errorHandler"));

console.log("App Run !");

module.exports = app;




/*
	app.use(function *(readFile){
		var start = new Date;
		
		yield readFile;
		
		var ms = new Date - start;
		console.log('%s %s - %s', this.method, this.url, ms);
	});

	app.use(function *(){

	  this.body = 'Hello World';
	  
	});
*/