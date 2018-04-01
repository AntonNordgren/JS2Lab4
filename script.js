window.addEventListener('load', () => {
    let vm = new Vue({
        el: '#vue-calculator',
        data: {
            string: "0",
            previous: undefined,
            current: undefined,
            operation: undefined
        },
        methods: {
            clear: function(event) {
                this.string = "0";
                this.previous =  undefined;
                this.current = undefined;
                this.operation =  undefined;
            },
            addNrToString: function(event) {
                if(this.string === "0") {
                    this.string = event.target.innerText;
                }
                else {
                    this.string += event.target.innerText;
                }
            },
            addDecimalToString: function(event) {
                if(!this.string.includes('.')) {
                    this.string += event.target.innerText;
                }
            },
            backspace: function(event) {
                if(this.string.length == 1) {
                    this.string = "0";
                }
                else {
                    this.string = this.string.slice(0, this.string.length-1);
                }
            },
            adding: function(event) {
                this.previous = parseFloat(this.string);
                this.string = "";
                this.operation = "+";
            },
            subtracting: function(event) {
                this.previous = parseFloat(this.string);
                this.string = "";
                this.operation = "-";
            },
            multiplication: function(event) {
                this.previous = parseFloat(this.string);
                this.string = "";
                this.operation = "*";
            },
            division: function(event) {
                this.previous = parseFloat(this.string);
                this.string = "";
                this.operation = "/";
            },
            sqrt: function(event) {
                this.string = Math.sqrt(this.string);
            },
            pow: function(event) {
                this.string = Math.pow(this.string, 2);
            },
            equal: function(event) {
                this.current = parseFloat(this.string);
                this.string = "";

                switch(this.operation) {
                    case "+":
                        this.string = this.previous + this.current;
                    break;
                    case "-":
                        this.string = this.previous - this.current;
                    break;
                    case "*":
                        this.string = this.previous * this.current;
                    break;
                    case "/":
                        this.string = this.previous / this.current;
                        console.log(this.string = (this.previous / this.current).toFixed(10));
                    break;
                }
            }
        } // Methods
    }); // Vue
}); // Load Function