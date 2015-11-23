console.log("ready");

var app = angular.module("accountOfExpensesApp", ["restangular", "ui.router"]);

app
.config(configs)
.directive("home", home)
.directive("auth", auth)
.directive("letter", letter)
.directive("welcome", welcome)
.directive("accountOfExpenses", accountOfExpenses)
.directive("expense", expense)
.directive("buying", buying)
.directive("profits", profits)
.directive("widgets", widgets)
.directive("currencyConverter", currencyConverter)
.controller("AuthController", AuthController)
.controller("UserController", UserController)
.controller("BuyingsController", BuyingsController)
.controller("ExpensesController", ExpensesController)
.controller("ProfitsController", ProfitsController)
.controller("WidgetController", WidgetController)
.factory("convertIntoRubles", convertIntoRubles)
.factory("BuyingService", BuyingService)
.factory("authorizeUser", authorizeUser);

/*
    1. Вот у нас есть BuyingService для CRUD операций с покупками, но почему бы не сделать один универсальный сервис для CRUD (например, CRUDService) операций вообще или стоит всеже создавать отдельные сервисы под разные сущности т.е. свой сервис под покупки, пользователей и т.д. ?
    
    2. Почему когда мы создаем сервис используя метод service то не обязынны ничего возвращать из функции конструктора, а используя для того же метод factory получим ошибку если не вернем явным образом какой либо объект (или this) ? см. 003_service.js
    
    3. Если не сложно, назовите каким инструментом собирать проект чтоб при минификации не ломалось? а то уже пару раз натыкался при минификации :( еще лучше ссылку :)
*/