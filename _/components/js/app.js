console.log("ready");

require('./home/index.js');
require('./auth/index.js');
require('./regist/index.js');
require('./user/index.js');
require('./buyings/index.js');

var app = angular
    .module("accountOfExpensesApp", ["restangular", "ui.router", 'home', 'auth', 'regist', 'user', 'buying' ]);



/*

app
    .directive("letter", letter)
    .directive("welcome", welcome)
    .directive("accountOfExpenses", accountOfExpenses)
    .directive("expense", expense)
    .directive("profits", profits)
    .directive("widgets", widgets)
    .directive("currencyConverter", currencyConverter)
    .controller("ExpensesController", ExpensesController)
    .controller("ProfitsController", ProfitsController)
    .controller("WidgetController", WidgetController)
    .factory("convertIntoRubles", convertIntoRubles);

*/