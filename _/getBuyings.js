function *getBuyings() {
    
    console.log(this.isAuthenticated());
    console.log(this.session.passport.user);
    
    var result = yield Buying.find({buyer: this.session.passport.user}).exec();
    
    console.log(result);
    this.body = result;
    
}

const MongoClient   = require('mongodb').MongoClient
, assert            = require('assert');
const roots			= require('config');
const mongoose      = require("mongoose");
const Buying        = require("./models/buying");

module.exports = getBuyings;


/*
    var mike =  new User({
        name: "Mike",
        login: "Alung",
        password: "secret",
        email: "emailname@yandex.ru"
    });
    
    mike.save(function(err, result){
        console.log(result);
    });
*/

/* sozdanie pokupok pereda4ei masiva promisov
    var r = yield [
        Buying.create({
            date: "01.11.2015",
            products: "Сыр",
            manufacturedGoods: "",
            utilities: "",
            amount: 0.3,
            price: 300,
            sum: 90,
            buyer: result[0]._id // predvaritel'no polu4enoe id pol'zovatel9
        }),
            Buying.create({
            date: "01.11.2015",
            products: "Хлеб",
            manufacturedGoods: "",
            utilities: "",
            amount: 1,
            price: 23,
            sum: 23,
            buyer: result[0]._id
        }),
        Buying.create({
            date: "02.11.2015",
            products: "Горох",
            manufacturedGoods: "",
            utilities: "",
            amount: 0.5,
            price: 83.58,
            sum: 41.79,
            buyer: result[0]._id
        }),
        Buying.create({
            date: "02.11.2015",
            products: "",
            manufacturedGoods: "Станок ультра",
            utilities: "",
            amount: 1,
            price: 50.95,
            sum: 50.95,
            buyer: result[0]._id
        }),
        Buying.create({
            date: "02.11.2015",
            products: "",
            manufacturedGoods: "Мыло",
            utilities: "",
            amount: 1,
            price: 39.35,
            sum: 39.35,
            buyer: result[0]._id
        }),
        Buying.create({
            date: "02.11.2015",
            products: "",
            manufacturedGoods: "",
            utilities: "Квартплата",
            amount: 1,
            price: 15000,
            sum: 15000,
            buyer: result[0]._id
        })
    ];
    console.log(r);
    */

/* Mongodb

function *getBuyings() {
	var result      = yield new Promise (function(resolve, reject) {
        MongoClient.connect(roots.db_url, function(err, db) {
            (function(db) {
                var collection = db.collection('buyings');
                collection.find({}).toArray(function(err, docs) {
                    if(err) console.log(err);
					console.log("Found the following records");
                    resolve(docs);
                });
            })(db);
        });
    });
    console.log(result);
    this.body = result;
}

*/



/*
router
    .get("/users", function *(next) {
        var result      = yield new Promise (function(resolve, reject) {
            MongoClient.connect(config.db_url, function(err, db) {
                (function(db) {
                    var collection = db.collection('users');
                    collection.find({}).toArray(function(err, docs) {
                        if(err) console.log(err);
                        console.log("Found the following records");
                        resolve(docs);
                    });
                })(db);
            });
        });
        console.log(result);
        this.body = result;
    })
    .post('/user', function *(next) {
        var insertDocuments = function(db, callback) {
            // Get the documents collection
            var collection = db.collection('documents');
            // Insert some documents
            collection.insert([
                {a : 1}, {a : 2}, {a : 3}
                ], 
                function(err, result) {
                    assert.equal(err, null);
                    assert.equal(3, result.result.n);
                    assert.equal(3, result.ops.length);
                    console.log("Inserted 3 documents into the document collection");
                    callback(result);
                });
        }
    })
    .get('user', '/user/:userById', function *(next) {
        var findDocuments = function(db, callback) {
            // Get the documents collection
            var collection = db.collection('documents');
            // Find some documents
            collection.find({}).toArray(function(err, docs) {
                assert.equal(err, null);
                assert.equal(2, docs.length);
                console.log("Found the following records");
                console.dir(docs);
                callback(docs);
            });
        }
    })
    .del('/user/:userById', function*(next) {
        var removeDocument = function(db, callback) {
            // Get the documents collection
            var collection = db.collection('documents');
            // Insert some documents
            collection.remove({ a : 3 }, function(err, result) {
                assert.equal(err, null);
                assert.equal(1, result.result.n);
                console.log("Removed the document with the field a equal to 3");
                callback(result);
            });
        }
    });
*/