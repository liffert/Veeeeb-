import React from "react";

class CalcOut extends React.Component {
    render() {
        return (
            <div className="Calculator out">
                <input id="num1" className="form-control" type="text" placeholder="num1" value={this.props.first} readOnly></input>
                <input id="op" className="form-control" type="text" placeholder="operation" value={this.props.op} readOnly></input>
                <input id="num2" className="form-control" type="text" placeholder="num2" value={this.props.second} readOnly></input>
                <input id="Result" className="form-control" type="text" placeholder="Result" value={this.props.result} readOnly></input>
            </div>
        );
    }
}

export default CalcOut;