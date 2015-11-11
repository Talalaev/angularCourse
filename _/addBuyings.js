function *addBuying() {
	this.body = {
        add: true
    }
}

const MongoClient   = require('mongodb').MongoClient
, assert            = require('assert');
const roots			= require('config');

module.exports = addBuying;



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