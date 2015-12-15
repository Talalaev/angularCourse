'use strict'

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
}
//--------------------------------------------------
function ProfitsController() {
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