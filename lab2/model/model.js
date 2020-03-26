export default class model{
    constructor (){
        this.ERROR = false;
        this.result = null;
        this.history = "";

        if(window.Worker){
            this.worker = new Worker("./model/web_worker.js");
            this.worker.onmessage = function(e){
                document.getElementById("convresult").value = e.data[0];
                document.getElementById("his").value = document.getElementById("his").value + e.data[1];
            }
        }
    }

    operation(first, second, op){
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

    convertation(operand, operation){
        this.worker.postMessage([operand, operation]);
    }

}