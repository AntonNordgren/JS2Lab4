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
            },
            addNrToString: function(event) {
                if(this.string === "0") {
                    this.string = event.target.innerText;
                }
                else {
                    this.string += event.target.innerText;
                }
            },
            adding: function(event) {
                this.previous = parseInt(this.string);
                this.string = "";
                this.operation = "+";
            },
            subtracting: function(event) {
                this.previous = parseInt(this.string);
                this.string = "";
                this.operation = "-";
            },
            multiplication: function(event) {
                this.previous = parseInt(this.string);
                this.string = "";
                this.operation = "*";
            },
            division: function(event) {
                this.previous = parseInt(this.string);
                this.string = "";
                this.operation = "/";
            },
            equal: function(event) {
                this.current = parseInt(this.string);

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
                    break;
                }
            }
        }
    });
});