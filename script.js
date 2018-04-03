
let x = function () {
    console.log("Hej");
}

window.addEventListener('load', () => {
    let vm = new Vue({
        el: '#vue-calculator',
        data: {
            string: "0",
            memory: undefined,
            operation: undefined,
            current: undefined,
            readyToClear: false,
            equalClicked: false
        },
        methods: {
            clear: function (event) {
                this.string = "0";
                this.memory = undefined;
                this.current = undefined;
                this.operation = undefined;
                this.readyToClear = false;
                this.equalClicked = false;
            },
            addNrToString: function (event) {

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
            adding: function (event) {
                console.log(this.operation);
                if (this.memory == undefined) {
                    this.memory = parseFloat(this.string);
                }
                else {
                    if (this.equalClicked == true) {
                        this.string = this.memory.toString();
                        this.equalClicked = false;
                    }
                    else {
                        if(this.operation != '+') {
                            if(this.operation == '-') {
                                this.memory -= parseFloat(this.string);
                                this.string = this.memory.toString();
                            }
                            if(this.operation == '*') {
                                this.memory *= parseFloat(this.string);
                                this.string = this.memory.toString();
                            }
                            if(this.operation == '/') {
                                this.memory /= parseFloat(this.string);
                                this.string = this.memory.toString();
                            }
                        }
                        else {
                            this.memory += parseFloat(this.string);
                            this.string = this.memory.toString();
                        }
                    }
                }
                this.readyToClear = true;
                this.operation = '+';
            },
            subtracting: function (event) {
                console.log(this.operation);
                if (this.memory == undefined) {
                    this.memory = parseFloat(this.string);
                }
                else {
                    if (this.equalClicked == true) {
                        this.string = this.memory.toString();
                        this.equalClicked = false;
                    }
                    else {
                        if(this.operation != '-') {
                            if(this.operation == '+') {
                                this.memory += parseFloat(this.string);
                                this.string = this.memory.toString();
                            }
                            if(this.operation == '*') {
                                this.memory *= parseFloat(this.string);
                                this.string = this.memory.toString();
                            }
                            if(this.operation == '/') {

                                this.memory /= parseFloat(this.string);
                                this.string = this.memory.toString();
                            }
                        }
                        else {
                            this.memory -= parseFloat(this.string);
                            this.string = this.memory.toString();
                        }
                    }
                }
                this.readyToClear = true;
                this.operation = '-';
            },
            multiplication: function (event) {
                console.log(this.operation);
                if (this.memory == undefined) {
                    this.memory = parseFloat(this.string);
                }
                else {
                    if (this.equalClicked == true) {
                        this.string = this.memory.toString();
                        this.equalClicked = false;
                    }
                    else {
                        if(this.operation != '*') {
                            if(this.operation == '+') {
                                this.memory += parseFloat(this.string);
                                this.string = this.memory.toString();
                            }
                            if(this.operation == '-') {
                                this.memory -= parseFloat(this.string);
                                this.string = this.memory.toString();
                            }
                            if(this.operation == '/') {
                                this.memory /= parseFloat(this.string);
                                this.string = this.memory.toString();
                            }
                        }
                        else {
                            this.memory *= parseFloat(this.string);
                            this.string = this.memory.toString();
                        }
                    }
                }
                this.readyToClear = true;
                this.operation = '*';
            },
            division: function (event) {
                console.log(this.operation);
                if (this.memory == undefined) {
                    this.memory = parseFloat(this.string);
                }
                else {
                    if (this.equalClicked == true) {
                        console.log("Equal Clicked!");
                        this.string = this.memory.toString();
                        this.equalClicked = false;
                    }
                    else {
                        console.log("Added clicked!");
                        if(this.operation != '/') {
                            console.log('Other operation!');
                            if(this.operation == '+') {
                                this.memory += parseFloat(this.string);
                                this.string = this.memory.toString();
                            }
                            if(this.operation == '-') {
                                this.memory -= parseFloat(this.string);
                                this.string = this.memory.toString();
                            }
                            if(this.operation == '*') {
                                this.memory *= parseFloat(this.string);
                                this.string = this.memory.toString();
                            }
                        }
                        else {
                            this.memory /= parseFloat(this.string);
                            this.string = this.memory.toString();
                        }
                    }
                }
                this.readyToClear = true;
                this.operation = '/';
            },
            sqrt: function (event) {
                this.string = Math.sqrt(this.string);
            },
            pow: function (event) {
                this.string = Math.pow(this.string, 2);
            },
            equal: function (event) {
                console.log("Operation: " + this.operation);
                if (this.operation == undefined) {
                }
                if (this.operation == '+') {
                    this.memory += parseFloat(this.string);
                    this.string = this.memory.toString();
                    console.log("Memory: " + this.memory);
                    this.readyToClear = true;
                }
                if (this.operation == '-') {
                    this.memory -= parseFloat(this.string);
                    this.string = this.memory.toString();
                    console.log("Memory: " + this.memory);
                    this.readyToClear = true;
                }
                if (this.operation == '*') {
                    this.memory *= parseFloat(this.string);
                    this.string = this.memory.toString();
                    console.log("Memory: " + this.memory);
                    this.readyToClear = true;
                }
                if (this.operation == '/') {
                    this.memory /= parseFloat(this.string);
                    this.string = this.memory.toString();
                    console.log("Memory: " + this.memory);
                    this.readyToClear = true;
                }
                this.equalClicked = true;
                this.operation = undefined;
            }
        } // Methods
    }); // Vue
}); // Load Function