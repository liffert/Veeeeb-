export default class model{
    constructor (){
        this.ERROR = false;
        this.result = null;
        this.history = "";
    }

    operation(first, second, op){
        this.result = NaN;
        this.ERROR = false;
        if(op == "+"){
            this.result = first + second;
        }
        else if(op == "-"){
            this.result = first - second;
        }
        else if(op == "/"){
            if(second != 0){
                this.result = first / second;
            }
            else{
                this.ERROR = true;
            }
        }
        else if(op == "*"){
            this.result = first * second;
        }
        else if(op == "^"){
            this.result = Math.pow(first, second);
        }
        if(isNaN(this.result) || op == ""){
            this.ERROR = true;
            this.history = "ERROR\n";
        }
        else{
            this.history = first.toString() + op + second.toString() + "=" + this.result.toString() + "\n";
        }
    }


}