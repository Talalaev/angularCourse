function errorHandler(err) {
    
    this.body = 'server error ' + err;
    console.log('server error', err);
    
}

module.exports = errorHandler;