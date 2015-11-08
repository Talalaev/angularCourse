function convertIntoRubles() {
    var courses = {
        "USD": 64.62,
        "EUR": 69.41,
        "UAH": 2.83
    };
    return function(sum, currency) {
        
        sum = +sum.replace(/[^0-9|.]+/, "");
        currency = currency || "USD";
        if ( !courses[currency] ) currency = "USD";
        
        return (sum * courses[currency]).toFixed(2);
    }
}