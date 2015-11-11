function *deleteBuyings() {
    console.log("deleteBuyings");
    this.body = {
        delete: true
    }
}

module.exports = deleteBuyings;