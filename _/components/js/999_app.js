console.log("ready");

var app = angular.module("emailClien", []);

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
.factory("convertIntoRubles", convertIntoRubles);

/*
    html - https://github.com/Talalaev/angularCourse/blob/master/index.html
    js - https://github.com/Talalaev/angularCourse/tree/master/_/components/js
    templates - https://github.com/Talalaev/angularCourse/tree/master/_/templates
    
    Вопросы:
    
    1. в исходном коде Angular часто встречаются переменные без объявления, которые начинаются с символа @, например, @type, что они значат и что обозначает символ @? Ведь данный синтаксис (@type) не коректен в js?
    
    2. у нас есть исходный код: 
    <div ng-controller="FoalderController as main">
        <foalder ng-repeat="foalder in main.foalders"></foalder> 
    </div>
    который перебирает значения массива. Будем ли мы разбирать как создать подобную директиву реализующуу в себе некую логику, если нет то как это сделать?
    
*/