
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
            previousOperation: undefined
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
                    this.string += event.target.innerText;
                }
            },
            backspace: function (event) {
                if (this.string.length == 1) {
                    this.string = "0";
                }
                else {
                    this.string = this.string.slice(0, this.string.length - 1);
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
            },
            adding: function (event) {

                if(this.string !== "Overflow") {
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
                if(this.string !== "Overflow") {
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
                if(this.string !== "Overflow") {
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
                if(this.string !== "Overflow") {
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
                if(this.string !== "Overflow" && this.string > 1) {
                    this.string = this.renderNumber(Math.sqrt(this.string));
                }
            },
            pow: function (event) {
                if(this.string !== "Overflow") {
                    this.string = this.renderNumber(Math.pow(this.string, 2));
                }
            },
            equal: function (event) {
                if (this.operation == '+') {
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
                    this.buildHistoryString(" * ");
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
                this.equalClicked = true;
                this.operation = undefined;
                this.historyList.push(this.historyString);
                this.historyString = "";
                this.previousOperation = undefined;
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
                        this.buildHistoryString(" * " + this.string);
                        this.memory *= parseFloat(this.string);
                        this.string = this.renderNumber(this.memory);
                    }
                    if (this.operation == '/') {
                        this.buildHistoryString(" / " + this.string);
                        this.memory /= parseFloat(this.string);
                        this.string = this.renderNumber(this.memory);
                    }
                }
            },
            buildHistoryString : function(string) {
                this.historyString += string;
            },
            clearHistory : function(string) {
                this.historyList = [];
            }
        } // Methods
    }); // Vue
}); // Load Function