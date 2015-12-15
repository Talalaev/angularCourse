var moduleHome =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	console.log("ready");

	__webpack_require__(1);
	__webpack_require__(5);
	__webpack_require__(9);
	__webpack_require__(13);
	__webpack_require__(19);

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

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var home = angular.module("home", []);
	// accountOfExpensesApp

	home
	    .config( __webpack_require__(2) )
	    .directive("home", __webpack_require__(3) )
	    .controller("HomeController", __webpack_require__(4));

	module.exports = home;

/***/ },
/* 2 */
/***/ function(module, exports) {

	function configs($stateProvider, $locationProvider) {
	    
	    $locationProvider.html5Mode({
	        enabled: true,
	        requireBase: false
	    });
	    
	    $stateProvider
	    
	    .state("home", {
	        url: "/",
	        template: "<home></home>"
	    })

	    
	}

	module.exports = configs;

/***/ },
/* 3 */
/***/ function(module, exports) {

	function homeDirective() {
	    return {
	        restrict: "E",
	        replace: true,
	        templateUrl: 'home.html',
	        scope: {
	            
	        },
	        controllerAs: "home",
	        controller: "HomeController"
	    };
	}

	module.exports = homeDirective;

/***/ },
/* 4 */
/***/ function(module, exports) {

	function homeController($scope) {
	    $scope.g = function() {
	        this.check = !this.check;
	    }
	    $scope.check = true;
	}

	module.exports = homeController;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var auth = angular.module("auth", []);
	// accountOfExpensesApp

	auth
	    .directive("auth", __webpack_require__(6))
	    .controller("AuthController", __webpack_require__(7))
	    .factory("AuthService", __webpack_require__(8));

	module.exports = auth;

/***/ },
/* 6 */
/***/ function(module, exports) {

	function authDirective() {
	    return {
	        restrict: "E",
	        replace: true,
	        templateUrl: "auth.html",
	        scope: {
	            
	        },
	        controllerAs: "authRes",
	        controller: "AuthController",
	        link: function(scope, elem, attr) {
	            scope.isFormShown = false;
	            scope.nameWasEntered = true;
	        }
	    };
	}

	module.exports = authDirective;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict'

	function AuthController($scope, AuthService, $location) {
	    $scope.onEnterClick = enter;
	    
	    function enter() {
	        if ( !$scope.isFormShown )
	            return $scope.isFormShown = true;
	        
	        // esli v peremennoi true to ne pokazivaem owibku ina4e pokazivaem. "" == false
	        $scope.nameWasEntered = $scope.userName;
	        
	        if (!$scope.userName) return;
	        
	        AuthService({username: $scope.userName, password: $scope.userPass})
	        .then(
	            (res) => {
	                var user = res.user;
	                
	                if (user) {
	                    $location.path("/users/" + user.toLowerCase());
	                } else {
	                    $location.path("/");
	                }
	                
	                console.log(res.user);
	            }, 
	            (res) => {
	                // owibka avtorizacii
	                $location.path("/");
	                console.log(res.user);
	            })
	        .catch((err) => {
	            console.log("Some error:" + err);
	        });
	    };
	}

	module.exports = AuthController;

/***/ },
/* 8 */
/***/ function(module, exports) {

	function AuthService(Restangular) {
	    
	    return function( data ) {
	        return Restangular
	            .all("login").post(data);
	    }
	    
	}

	module.exports = AuthService;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var regist = angular.module("regist", []);
	// accountOfExpensesApp

	regist
	    .directive("regist", __webpack_require__(10))
	    .controller("RegistController", __webpack_require__(11))
	    .factory("RegistService", __webpack_require__(12));

	module.exports = regist;

/***/ },
/* 10 */
/***/ function(module, exports) {

	function registDirective() {
	    return {
	        restrict: "E",
	        replace: "true",
	        templateUrl: "regist.html",
	        scope: {
	            
	        },
	        controllerAs: "registRes",
	        controller: "RegistController"
	    }
	}

	module.exports = registDirective;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict'

	function RegistController($scope, RegistService, $location) {
	    $scope.onRegistClick = regist;
	    
	    function regist() {
	        console.log($scope.name);
	        if ( !$scope.name ) return;
	        if ( !$scope.login ) return;
	        if ( !$scope.email ) return;
	        if ( !$scope.password ) return;
	            
	        RegistService(
	            {
	                name: $scope.name,
	                login: $scope.login,
	                email: $scope.email,
	                password: $scope.password
	            }
	        ).then(
	            (res) => {
	                alert("Вы зарегистрировались! Выполните вход.");
	                // выполнить сразу запрос на авторизацию
	                //$location.path("users/" + $scope.name);
	                console.log(res);
	            },
	            (res) => {
	                alert("Ошибка!");
	            }
	        );
	    }
	}

	module.exports = RegistController;

/***/ },
/* 12 */
/***/ function(module, exports) {

	function RegistService(Restangular) {
	    
	    return function( data ) {
	        return Restangular
	            .all("regist").post(data);
	    }
	    
	}


	module.exports = RegistService;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var user = angular.module("user", []);
	// accountOfExpensesApp

	user
	    .config(__webpack_require__(14))
	    .directive("user", __webpack_require__(15))
	    .directive("profile", __webpack_require__(16))
	    .controller("UserController", __webpack_require__(17))
	    .factory("UserService", __webpack_require__(18));

	module.exports = user;

/***/ },
/* 14 */
/***/ function(module, exports) {

	function configs($stateProvider, $locationProvider) {
	    
	    $locationProvider.html5Mode({
	        enabled: true,
	        requireBase: false
	    });
	    
	    $stateProvider
	    
	    .state("users", {
	        url: "/users",
	        templateUrl: "users.html",
	        resolve: {
	            users: function( UserService ) {
	                // получим всех пользователей тут
	                // UserService.getAll().then();
	                return UserService.getAll();
	            }
	        },
	        controllerAs: "usersData",
	        controller: function (users) {
	            this.users = users;
	        }
	    })
	    
	    .state("user", {
	        url: "/users/:user",
	        template: "<user></user>"
	    })
	    
	    .state("user.profile", {
	        url: "/profile",
	        template: "<profile></profile>"
	    })
	    
	    .state("user.buyings", {
	        url: "/buyings",
	        template: "<buying></buying>"
	    });
	    
	}

	module.exports = configs;

/***/ },
/* 15 */
/***/ function(module, exports) {

	function userDirective() {
	    return {
	        restrict: "E",
	        replace: true,
	        templateUrl: "user.html",
	        controllerAs: "user",
	        controller: 'UserController'
	    }
	}

	module.exports = userDirective;

/***/ },
/* 16 */
/***/ function(module, exports) {

	function profileDirective() {
	    return {
	        restrict: "E",
	        replace: true,
	        templateUrl: "profile.html"
	    }
	}

	module.exports = profileDirective;

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict'

	function UserController(UserService, $location) {
	    UserService.get()
	    .then( userData => {
	        for ( var key in userData ) {
	            this[key] = userData[key];
	        }
	    });
	    
	    this.showOrEdit = true;
	    
	    this.triggerShowOrEdit = () => { 
	        this.showOrEdit = !this.showOrEdit; 
	    }
	    
	    this.logout = function() {
	        UserService.logout()
	        .then( () => {
	            $location.path("/");
	        });
	    }
	    
	    this.update = function( data ) {
	        for ( var key in data ) {
	            if ( !data[key] ) return alert('не все поля заполнены');
	        }
	        
	        if ( data.oldPassword !== data.newPassword) 
	            return alert("Новый и старый пароли не совпадают!");
	        
	        UserService.update( data )
	        .then( (res) => {
	            console.log(res);
	        },
	        (res) => {
	           console.log("error: " + res); 
	        });
	        
	    }
	    
	    this.delete = function() {
	        if ( confirm("Вы уверены?") ) {
	            UserService.delete()
	            .then( () => {
	                $location.path("/");
	            });
	        }
	        return false;
	    }
	}

	module.exports = UserController;

/***/ },
/* 18 */
/***/ function(module, exports) {

	function UserService(Restangular) {
	    
	    this.auth = function( data ) {
	        return Restangular
	            .all("login").post(data);
	    }
	    
	    this.regist = function( data ) {
	        return Restangular
	            .all("regist").post(data);
	    }
	    
	    this.logout = function( url ) {
	        if ( !url ) url = "logout";
	        return Restangular
	            .oneUrl('logout', url).get();
	    }
	    
	    this.getById = function(id) {
	        return Restangular
	            .one('getUser', id).get();
	    }
	    
	    this.get = function() {
	        return Restangular
	            .one('getUser').get();
	    }
	    
	    this.getAll = function() {
	        return Restangular
	            .one('getUsers').get();
	    }
	    
	    this.add = function() {
	        
	    }
	    
	    this.update = function( data ) {
	        return Restangular
	            .all("updateUser").post(data);
	    }
	    
	    this.delete = function() {
	        return Restangular
	            .all("deleteUser").remove();
	    }
	    
	    return this;
	    
	}


	module.exports = UserService;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var buying = angular.module("buying", []);
	// accountOfExpensesApp

	buying
	    .directive("buying", __webpack_require__(20))
	    .directive("addBuying", __webpack_require__(21))
	    .controller("BuyingsController", __webpack_require__(22))
	    .factory("BuyingService", __webpack_require__(23));

	module.exports = buying;

/***/ },
/* 20 */
/***/ function(module, exports) {

	function buyingDirective() {
	    return {
	        restrict: "E",
	        replace: true,
	        templateUrl: "buying.html",
	        controllerAs: "buyings",
	        controller: 'BuyingsController'
	    }
	}

	module.exports = buyingDirective;

/***/ },
/* 21 */
/***/ function(module, exports) {

	function addBuyingDirective() {
	    return {
	        restrict: "E",
	        replace: true,
	        templateUrl: "addBuying.html"
	    }
	}

	module.exports = addBuyingDirective;

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict'

	function BuyingsController(BuyingService, $location) {
	    BuyingService.getAll().then(buying => {
	        this.buying = buying;
	    });
	    
	    this.add = ( data ) => {
	        for ( var key in data ) {
	            if ( !data[key] ) return alert('не все поля заполнены');
	        }
	        
	        if ( data.prodType.products ) {
	            data.products = data.name;
	            data.manufacturedGoods = "";
	            data.utilities = "";
	        }
	        
	        if ( data.prodType.manufacturedGoods ) {
	            data.products = "";
	            data.manufacturedGoods = data.name;
	            data.utilities = "";
	        }
	        
	        if ( data.prodType.utilities ) {
	            data.products = "";
	            data.manufacturedGoods = "";
	            data.utilities = data.name;
	        }
	        delete data.name;
	        delete data.prodType;
	        
	        BuyingService.add( data )
	        .then( (res) => {
	            console.log(res);
	        },
	        (res) => {
	           console.log("error: " + res); 
	        });
	    }
	    
	    this.delete = function( id ) {
	        if ( confirm("Вы уверены?") ) {
	            BuyingService.deleteOne({id: id})
	            .then( (res) => {
	                console.log(res);
	                $location.reload();
	            });
	        }
	        return false;
	    }
	}

	module.exports = BuyingsController;

/***/ },
/* 23 */
/***/ function(module, exports) {

	function BuyingService(Restangular) {
	    
	    this.getOne = function(id) {
	        return Restangular
	            .one('getBuyings', id).get();
	    }
	    
	    this.getAll = function() {
	        return Restangular
	            .all('getBuyings').getList();
	    }
	    
	    this.add = function( data ) {
	        return Restangular
	            .all("addBuying").post( data );
	    }
	    
	    this.update = function() {
	        
	    }
	    
	    this.deleteOne = function( data ) {
	        return Restangular
	            .all("deleteBuying").post( data );
	    }
	    
	    this.deleteAll = function() {
	        
	    }
	    return this;
	}



	module.exports = BuyingService;

/***/ }
/******/ ]);