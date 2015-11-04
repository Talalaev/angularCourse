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
}