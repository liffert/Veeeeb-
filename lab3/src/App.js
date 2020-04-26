import React, { Component } from "react";
import CalcBlock from "./components/CalcBlock";
import ChooseOperation from "./components/ChooseOperation";
import CaclOut from "./components/CalcOut";
import ConverterOut from "./components/ConverterOut";
import History from "./components/History";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.operation = "Calculator";
    this.convstate = "Digit - binary";
    this.state = ({
      firstOp: "",
      secondOp: "",
      op: "",
      result: "",
      convop: "",
      convresult: "",
      history: ""
    });

    this.butMap = new Map();
    this.butMap.set("divide", "/");
    this.butMap.set("pow", "^");
    this.butMap.set("plus", "+");
    this.butMap.set("minus", "-");
    this.butMap.set("multiple", "*");

    this.setOperation = this.setOperation.bind(this);
    this.Click = this.Click.bind(this);
    this.setConvOperation = this.setConvOperation.bind(this);
  }

  setOperation(e) {
    this.operation = e.target.value;
  }

  setConvOperation(e){
    this.convstate = e.target.value;
  }


  setOut(e) {
    if (this.state.op === "") {
      this.setState({
        firstOp: this.state.firstOp + e.target.id,
      });
    }
    else {
      this.setState({
        secondOp: this.state.secondOp + e.target.id,
      });
    }
  }

  setOutConv(e) {
      this.setState({
        convop: this.state.convop + e.target.id,
      });
  }

  erase() {
    this.setState({
      firstOp: "",
      secondOp: "",
      op: "",
      result: "",
      convop: "",
      convresult: "",
      history: ""
    });
  }

  calculate(first, second) {
    var result = NaN;
    if (this.state.op === "+") {
      result = first + second;
    }
    else if (this.state.op === "-") {
      result = first - second;
    }
    else if (this.state.op === "/") {
      if (second !== 0) {
        result = first / second;
      }
    }
    else if (this.state.op === "*") {
      result = first * second;
    }
    else if (this.state.op === "^") {
      result = Math.pow(first, second);
    }
    if (isNaN(result) || this.state.op === "") {
      this.setState({
        history : this.state.history + first.toString() + this.state.op + second.toString() + "=" + "ERROR\n",
        result : "ERROR"
      });
    }
    else {
      this.setState({
        history : this.state.history + first.toString() + this.state.op + second.toString() + "=" + result.toString() + "\n",
        result : result
      });
    }
  }

  converter(e) {
    if (e.target.id === "res") {
      var result = null;
      if(this.convstate === "Digit - binary"){
        result = parseInt(this.state.convop).toString(2);
      }
      else{
        result = parseInt(this.state.convop, 2).toString(10);
      }

      if(isNaN(result)){
        this.setState({
          convresult : "ERROR",
          convop : "",
          history : this.state.history + this.state.convop + " " + this.convstate + " ERROR\n"
        });
      }
      else{
        this.setState({
          convresult : result,
          convop : "",
          history : this.state.history + this.state.convop + " " + this.convstate + " " + result + "\n"
        });
      }
      return;
    }
    else if (e.target.id === "Erase") {
      this.erase();
      return;
    }
    for (var [key, value] of this.butMap) {
      if (e.target.id === key) {
        return;
      }
    }
    this.setOutConv(e);
  }


  Click(e) {
    if (this.operation === "Converter") {
      this.converter(e);
      return;
    }
    if (e.target.id === "res") {
      this.calculate(parseInt(this.state.firstOp), parseInt(this.state.secondOp));
      this.setState({
        firstOp: "",
        secondOp: "",
        op: "",
      });
      return;
    }
    if (e.target.id === "Erase") {
      this.erase();
      return;
    }
    for (var [key, value] of this.butMap) {
      if (e.target.id === key) {
        this.setState({
          op: value
        });
        return;
      }
    }
    this.setOut(e);
  }

  render() {

    return (
      <div className="container-fluid">
        <div className="text-center">
          <h1>My calculator</h1>
        </div>
        <ChooseOperation change={this.setOperation}></ChooseOperation>
        <div className="row">
          <div className="col-sm-5">
            <CalcBlock click={this.Click}></CalcBlock>
          </div>
          <div className="col-sm-7">
            <CaclOut
              first={this.state.firstOp}
              second={this.state.secondOp}
              op={this.state.op}
              result={this.state.result} />
            <ConverterOut 
              operand={this.state.convop} 
              result={this.state.convresult}
              change={this.setConvOperation} />
          </div>
          <div className="col-sm-12">
            <History history={this.state.history}></History>
          </div>
        </div>
      </div>
    );
  }
}
export default App;