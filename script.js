
window.addEventListener('load', () => {
    let vm = new Vue({
        el: '#vue-calculator',
        data: {
            string: "0",
            memory: undefined,
            operation: undefined,
            current: undefined,
            readyToClear: false,
            equalClicked: false,
            historyList: [],
            historyString: "",
            previousOperation: undefined,
            showSqrtButton: true
        },
        methods: {
            clear: function () {
                this.string = "0";
                this.memory = undefined;
                this.current = undefined;
                this.operation = undefined;
                this.readyToClear = false;
                this.equalClicked = false;
                this.historyString = "";
            },
            addNrToString: function () {
                if (this.equalClicked == true) {
                    this.clear();
                }
                if (this.readyToClear) {
                    this.string = "";
                    this.readyToClear = false;
                }
                if (this.string.length != 10) {
                    if (this.string === "0") {
                        this.string = event.target.innerText;
                    }
                    else {
                        this.string += event.target.innerText;
                    }
                }
            },
            addDecimalToString: function (event) {
                if (!this.string.includes('.')) {
                    if (this.equalClicked == true) {
                        this.clear();
                    }
                    this.string += event.target.innerText;
                }
                this.isNegativeString();
            },
            backspace: function (event) {
                console.log(this.readyToClear);
                if(this.readyToClear == false) {
                    if (this.string.length == 1) {
                        this.string = "0";
                    }
                    else {
                        this.string = this.string.slice(0, this.string.length - 1);
                    }
                    this.isNegativeString();
                }
            },
            renderNumber: function (theNumber) {
                let nrOfDigits = 10;
                let nrOfDecimal = undefined;
                function countWholeNumbers(theNumber) {
                    let str = theNumber.toString();
                    for (let i = 0; i < str.length; i++) {
                        if (str[i] === '.') {
                            nrOfDecimal = nrOfDigits - i;
                            return i;
                        }
                    }
                }
                if (theNumber > 9999999999) {
                    return "Overflow";
                }
                else if (theNumber.toString().length > 10) {
                    countWholeNumbers(theNumber);
                    return theNumber.toFixed(nrOfDecimal);
                }
                else {
                    return theNumber;
                }
                this.isNegativeString();
            },
            adding: function (event) {
                if (this.string !== "Overflow") {
                    this.previousOperation = "+";
                    if (this.memory == undefined) {
                        this.buildHistoryString(this.string);
                        this.memory = parseFloat(this.string);
                    }
                    else {
                        this.calc();
                    }
                    this.readyToClear = true;
                    this.operation = '+';
                }
            },
            subtracting: function (event) {
                if (this.string !== "Overflow") {
                    this.previousOperation = "-";
                    if (this.memory == undefined) {
                        this.buildHistoryString(this.string);
                        this.memory = parseFloat(this.string);
                    }
                    else {
                        this.calc();
                    }
                    this.readyToClear = true;
                    this.operation = '-';
                }
            },
            multiplication: function (event) {
                if (this.string !== "Overflow") {
                    this.previousOperation = "*";
                    if (this.memory == undefined) {
                        this.buildHistoryString(this.string);
                        this.memory = parseFloat(this.string);
                    }
                    else {
                        this.calc();
                    }
                    this.readyToClear = true;
                    this.operation = '*';
                }
            },
            division: function (event) {
                if (this.string !== "Overflow") {
                    this.previousOperation = "/";
                    if (this.memory == undefined) {
                        this.buildHistoryString(this.string);
                        this.memory = parseFloat(this.string);
                    }
                    else {
                        this.calc();
                    }
                    this.readyToClear = true;
                    this.operation = '/';
                }
            },
            sqrt: function (event) {
                if (this.string !== "Overflow" && this.string > 0) {
                    /*
                    this.memory = this.string;
                    this.buildHistoryString("√(" + this.string + ") = ");
                    this.string = this.renderNumber(Math.sqrt(this.string));
                    this.buildHistoryString(this.string);
                    this.pushHistoryList(this.historyString);
                    this.operation = '√';
                    this.memory = parseFloat(this.string);
                    this.historyString = this.memory;
                    */

                    /*
                    if(this.operation !== '√') {
                        console.log("Ohter Operation");
                        console.log("This memory: " + this.memory);
                        this.buildHistoryString(" " + this.operation + " √(" + this.string + ") = ");
                        //this.calc();
                        //this.memory += parseFloat(this.string);
                        this.buildHistoryString(this.string);
                        console.log(this.string);
                        //this.string = this.renderNumber(this.memory);
                        console.log("This memory: " + this.memory);
                    }
                    let prevString = this.string;
                    this.string = this.renderNumber(Math.sqrt(this.string));
                    //this.buildHistoryString(this.string);
                    this.operation = '√';
                    */

                    /*
                    if(this.operation !== '√') {
                        console.log(this.string);
                        //this.buildHistoryString(" " + this.operation + " " + '√(' + this.string + ') ');
                        this.string = this.renderNumber(Math.sqrt(this.string));
                        //this.buildHistoryString(" " + this.operation + " " + '√');
                    }
                    */
                   let temp = this.renderNumber(Math.sqrt(this.string));
                   if (this.equalClicked == true) {
                       this.clear();
                    }
                    this.string = temp;
                    this.readyToClear = true;
                }
                this.isNegativeString();
            },
            pow: function (event) {
                /*
                if(this.string !== "Overflow") {
                    this.string = this.renderNumber(Math.pow(this.string, 2));
                    this.memory = parseFloat(this.string);
                    if(this.operation !== undefined) {
                        this.buildHistoryString(" " + this.operation + " " +
                        Math.sqrt(this.memory) + "²" + " = " +  this.memory);
                    }
                    else {
                        this.buildHistoryString(Math.sqrt(this.memory)
                        + "²" + " = " +  this.memory);
                    }
                    this.pushHistoryList(this.historyString);
                    this.historyString = "";
                    this.operation = '^';
                }
                this.isNegativeString();
                */
               let temp = this.renderNumber(Math.pow(this.string, 2));
                if (this.equalClicked == true) {
                    this.clear();
                }
                this.string = temp;
                this.readyToClear = true;
            },
            equal: function (event) {
                if (this.operation == '+') {
                    /*
                    this.buildHistoryString(" + ");
                    this.memory += parseFloat(this.string);
                    // Old Working
                    //this.buildHistoryString(this.string + " = " + this.memory);
                    this.buildHistoryString(" = " + this.memory);
                    this.string = this.renderNumber(this.memory);
                    this.readyToClear = true;

                    /*
                    this.buildHistoryString(" + ");

                    this.memory = parseFloat(this.memory);
                    this.memory = this.memory + parseFloat(this.string);

                    this.buildHistoryString(this.string + " = " + this.memory);
                    this.string = this.renderNumber(this.memory);
                    this.readyToClear = true;
                    */
                    this.buildHistoryString(" + ");
                    this.memory += parseFloat(this.string);
                    this.buildHistoryString(this.string + " = " + this.memory);
                    this.string = this.renderNumber(this.memory);
                    this.readyToClear = true;
                }
                if (this.operation == '-') {
                    this.buildHistoryString(" - ");
                    this.memory -= parseFloat(this.string);
                    this.buildHistoryString(this.string + " = " + this.memory);
                    this.string = this.renderNumber(this.memory);
                    this.readyToClear = true;
                }
                if (this.operation == '*') {
                    this.buildHistoryString(" x ");
                    this.memory *= parseFloat(this.string);
                    this.buildHistoryString(this.string + " = " + this.memory);
                    this.string = this.renderNumber(this.memory);
                    this.readyToClear = true;
                }
                if (this.operation == '/') {
                    this.buildHistoryString(" / ");
                    this.memory /= parseFloat(this.string);
                    this.buildHistoryString(this.string + " = " + this.memory);
                    this.string = this.renderNumber(this.memory);
                    this.readyToClear = true;
                }
                if (this.operation == '') {

                }
                if (this.operation == '√') {
                    this.memory += parseFloat(this.string);
                    // Old Working
                    //this.buildHistoryString(this.string + " = " + this.memory);
                    this.buildHistoryString(" = " + this.memory);
                    this.string = this.renderNumber(this.memory);
                    this.readyToClear = true;
                }
                this.equalClicked = true;
                this.operation = undefined;
                this.pushHistoryList(this.historyString);
                this.historyString = "";
                this.previousOperation = undefined;
                this.isNegativeString();
            },
            calc: function () {
                if (this.equalClicked == true) {
                    this.string = this.renderNumber(this.memory);
                    this.equalClicked = false;
                    this.historyString = "";
                    this.buildHistoryString(this.memory);
                }
                else {
                    if (this.operation == '+') {
                        this.buildHistoryString(" + " + this.string);
                        this.memory += parseFloat(this.string);
                        this.string = this.renderNumber(this.memory);
                    }
                    if (this.operation == '-') {
                        this.buildHistoryString(" - " + this.string);
                        this.memory -= parseFloat(this.string);
                        this.string = this.renderNumber(this.memory);
                    }
                    if (this.operation == '*') {
                        this.buildHistoryString(" x " + this.string);
                        this.memory *= parseFloat(this.string);
                        this.string = this.renderNumber(this.memory);
                    }
                    if (this.operation == '/') {
                        this.buildHistoryString(" / " + this.string);
                        this.memory /= parseFloat(this.string);
                        this.string = this.renderNumber(this.memory);
                    }
                    /*
                    if (this.operation = '^') {
                    }
                    if (this.operation = '√') {
                        this.buildHistoryString(" = " + this.memory);
                    }
                    */
                }
                this.isNegativeString();
            },
            buildHistoryString: function (string) {
                this.historyString += string;
            },
            pushHistoryList: function () {
                if (this.historyString !== "") {
                    this.historyList.splice(0, 0, this.historyString);
                }
            },
            clearHistory: function (string) {
                this.historyList = [];
            },
            isNegativeString: function () {
                if (parseFloat(this.string) < 0 || this.memory < 0) {
                    this.showSqrtButton = false;
                }
                else {
                    this.showSqrtButton = true;
                }
            }
        } // Methods
    }); // Vue
}); // Load Function