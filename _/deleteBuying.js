function *deleteBuyings() {
    
    var result = yield Buying.remove({_id: this.request.body.id}).exec();
    this.body = result;

}

const Buying        = require("./models/buying");


module.exports = deleteBuyings;