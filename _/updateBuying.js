function *updateBuyings() {
    // в из тела запросы нужно удалить id так как оно не должно обновляться
    try {
        yield Buying
            .where({ _id: this.request.body.id })
            .update(this.request.body).exec();
        
        this.status = 200;
        this.body = "ok";
    } catch(e) {
        this.status = 400;
        this.body = "validation error";
        console.log(e);
    }
}

const Buying        = require("./models/buying");

module.exports = updateBuyings;