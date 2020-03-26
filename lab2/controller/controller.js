export default class controller {
    constructor(view, model) {
        this.model = model;
        this.view = view;

        this.fisrtOp = "";
        this.secondOp = "";
        this.op = "";

        this.ConvOp = "";

        document.querySelector(".buttonsTable").addEventListener("click", (e) => this.onClick(e));
    }

    out(num) {
        if (this.op === "") {
            this.fisrtOp = this.fisrtOp + num;
            this.view.out("num1", this.fisrtOp);
        }
        else {
            this.secondOp = this.secondOp + num;
            this.view.out("num2", this.secondOp);
        }
    }

    outConv(num) {
        this.ConvOp = this.ConvOp + num;
        this.view.out("convnum", this.ConvOp);
    }
    erase() {
        this.fisrtOp = "";
        this.secondOp = "";
        this.op = "";
        this.ConvOp = "";
        this.view.out("num1", "");
        this.view.out("num2", "");
        this.view.out("op", "");
        this.view.out("Result", "");
        this.view.out("convnum", "");
        this.view.out("convresult", "");
    }

    convertation(e){
        if (e.target.id === "res") {
            this.model.convertation(this.ConvOp, document.getElementById("Cop").value);
            this.ConvOp = "";
            this.view.out("convnum", "");
        }
        else if (e.target.id === "Erase") {
            this.erase();
        }
        else{
            this.outConv(e.target.id);
        }
    }
    onClick(e) {
        if(document.getElementById("CC").value == "Converter"){
            this.convertation(e);
            return;
        }
        if (e.target.id === "res") {
            this.model.operation(parseInt(this.fisrtOp), parseInt(this.secondOp), this.op);
            if (this.model.ERROR) {
                this.view.out("Result", "\nERROR");
            }
            else {
                this.view.out("Result", this.model.result);
            }
            this.view.outHistory(this.model.history.toString());
            this.fisrtOp = "";
            this.secondOp = "";
            this.op = "";
            this.view.out("num1", "");
            this.view.out("num2", "");
            this.view.out("op", "");
        }
        else if (e.target.id === "Erase") {
            this.erase();
        }
        else if (e.target.id === "divide") {
            this.op = "/";
            this.view.out("op", this.op);
        }
        else if (e.target.id === "minus") {
            this.op = "-";
            this.view.out("op", this.op);
        }
        else if (e.target.id === "pow") {
            this.op = "^";
            this.view.out("op", this.op);
        }
        else if (e.target.id === "plus") {
            this.op = "+";
            this.view.out("op", this.op);
        }
        else if (e.target.id === "multiple") {
            this.op = "*";
            this.view.out("op", this.op);
        }
        else {
            this.out(e.target.id);
        }
    }
}