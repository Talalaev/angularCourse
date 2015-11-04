console.log("ready");

var app = angular.module("emailClien", []);

app
.directive("letter", letter)
.directive("foalder", foalder)
.controller("LetterController", LetterController)
.controller("FoalderController", FoalderController);

/*
    Вопросы:
    
    1. в исходном коде часто встречаются переменные без объявления, которые начинаются с символа @, например, @type, что они значат и что обозначает символ @? Ведь данный синтаксис (@type) не коректен в js?
    
    2. у нас есть исходный код: 
    <div ng-controller="FoalderController as main">
        <foalder ng-repeat="foalder in main.foalders"></foalder> 
    </div>
    который перебирает значения массива. Будем ли мы разбирать как создать подобную дериктиву реализующуу в себе некую логику, если нет то как это сделать?
    
*/