import React from "react";

class CalcOut extends React.Component {
    render() {
        return (
            <div className="Calculator out">
                <input id="num1" className="form-control" type="text" placeholder={this.props.first} readOnly></input>
                <input id="op" className="form-control" type="text" placeholder={this.props.op} readOnly></input>
                <input id="num2" className="form-control" type="text" placeholder={this.props.second} readOnly></input>
                <input id="Result" className="form-control" type="text" placeholder={this.props.result} readOnly></input>
            </div>
        );
    }
}

export default CalcOut;