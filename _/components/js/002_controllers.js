function LetterController() {
    // this --> main 
    // ng-controller="MainController as main"
    this.letter1 = {
        sender: "Mike",
        title: "New Message",
        message: "Hello, it is test letter...",
        date: "03.11.2015"
    };
    
    this.letter2 = {
        sender: "Bob",
        title: "New Message",
        message: "Hello, it is letter from Bob...",
        date: "04.11.2015"
    };
}
//--------------------------------------------------
function FoalderController() {
    this.foalders = [
        {
            name: "Входящие",
            sumOfFiles: 1723
        },
        {
            name: "Отправленные",
            sumOfFiles: 325
        },
        {
            name: "Удаленные",
            sumOfFiles: 226
        },
        {
            name: "Спам",
            sumOfFiles: 2
        },
        {
            name: "Черновики",
            sumOfFiles: 32
        }
    ];
    this.hi = function() {
        alert("Hi!");
    }
}
//--------------------------------------------------
function ExpensesController() {
    this.expense = {
        period: "01.11.2015-08.11.2015",
        amount: {
            products: 3,
            manufacturedGoods: 2,
            utilities: 1
        },
        sum: "1000"
    }
    this.buying = [
        {
            date: "01.11.2015",
            productName: {
                products: "Сыр",
                manufacturedGoods: "",
                utilities: ""
            },
            amount: 0.3,
            price: 300,
            sum: 90
        },
        {
            date: "01.11.2015",
            productName: {
                products: "Хлеб",
                manufacturedGoods: "",
                utilities: ""
            },
            amount: 1,
            price: 23,
            sum: 23
        },
        {
            date: "02.11.2015",
            productName: {
                products: "Горох",
                manufacturedGoods: "",
                utilities: ""
            },
            amount: 0.5,
            price: 83.58,
            sum: 41.79
        },
        {
            date: "02.11.2015",
            productName: {
                products: "",
                manufacturedGoods: "Станок ультра",
                utilities: ""
            },
            amount: 1,
            price: 50.95,
            sum: 50.95
        },
        {
            date: "02.11.2015",
            productName: {
                products: "",
                manufacturedGoods: "Мыло",
                utilities: ""
            },
            amount: 1,
            price: 39.35,
            sum: 39.35
        },
        {
            date: "02.11.2015",
            productName: {
                products: "",
                manufacturedGoods: "",
                utilities: "Квартплата"
            },
            amount: 1,
            price: 15000,
            sum: 15000
        }
    ];
    this.profits = {
        period: "01.10.2015-01.11.2015",
        type: {
            salary: 20000,
            partTime: 15000,
            else: 2000
        },
        sum: 37000
    }
}
//--------------------------------------------------
function WidgetController(convertIntoRubles) {
    
}