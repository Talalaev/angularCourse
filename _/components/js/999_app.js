console.log("ready");

var app = angular.module("accountOfExpensesApp", ["restangular", "ui.router"]);

app
.config(configs)
.directive("home", home)
.directive("auth", auth)
.directive("regist", regist)
.directive("user", user)
.directive("profile", profile)
.directive("letter", letter)
.directive("welcome", welcome)
.directive("accountOfExpenses", accountOfExpenses)
.directive("expense", expense)
.directive("buying", buying)
.directive("addBuying", addBuying)
.directive("profits", profits)
.directive("widgets", widgets)
.directive("currencyConverter", currencyConverter)
.controller("AuthController", AuthController)
.controller("UserController", UserController)
.controller("BuyingsController", BuyingsController)
.controller("ExpensesController", ExpensesController)
.controller("ProfitsController", ProfitsController)
.controller("WidgetController", WidgetController)
.controller("RegistController", RegistController)
.factory("convertIntoRubles", convertIntoRubles)
.factory("BuyingService", BuyingService)
.factory("UserService", UserService);

