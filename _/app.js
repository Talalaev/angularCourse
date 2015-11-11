'use strict';

const koa 			= require("koa");
const Router		= require("koa-router");
const app 			= koa();
const router		= new Router();
const MongoClient   = require('mongodb').MongoClient
, assert            = require('assert');
const roots			= require('config');
const server		= require('koa-static');
const path 			= require('path');

router
	.get("/", require('./mainPage'))
	.get("/getBuyings", require('./getBuyings'))
	.put("/addPhone", require('./addBuyings'))
    .post("/updateBuyings", require('./updateBuyings'))
    .post("/deleteBuyings", require('./deleteBuyings'));

console.log(path.join(__dirname, '\css')); //path.join(__dirname, '/js')
app.use(router.routes());
app.use(server(path.join(__dirname, '\css')));
app.use(server(path.join(__dirname, '\js')));
app.use(server(path.join(__dirname, '\public')));
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