console.log("ready");

var app = angular.module("emailClien", ["restangular"]);

app
.directive("letter", letter)
.directive("foalder", foalder)
.directive("welcome", welcome)
.directive("accountOfExpenses", accountOfExpenses)
.directive("expense", expense)
.directive("buying", buying)
.directive("profits", profits)
.directive("widgets", widgets)
.directive("currencyConverter", currencyConverter)
.controller("LetterController", LetterController)
.controller("FoalderController", FoalderController)
.controller("ExpensesController", ExpensesController)
.controller("WidgetController", WidgetController)
.factory("convertIntoRubles", convertIntoRubles)
.factory("BuyingService", BuyingService);

/*
    1. Вот у нас есть BuyingService для CRUD операций с покупками, но почему бы не сделать один универсальный сервис для CRUD (например, CRUDService) операций вообще или стоит всеже создавать отдельные сервисы под разные сущьности т.е. свой сервис под покупки, пользователей и т.д. ?
    
    2. Почему когда мы создаем сервис используя метод service не обязынны ничего возвращать из функции конструктора, а используя для того же метод factory получим ошибку если не вернем явным образом какой лиюо объект (или this) ?
    
    3. Если не сложно, назовите каким инструментом собирать проект чтоб при минификации не ломалось? а то уже пару раз натыкался при минификации :( еще лучше ссылку :)
*/