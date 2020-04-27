import React from "react";


class ConverterOut extends React.Component{
    render(){
        return(
            <div className="ConverterOut">
                    <select onChange={this.props.change} name="From - to" id="Cop" className="form-control">
                        <option>Digit - binary</option>
                        <option>Binary - digit</option>
                    </select>
                    <input id="convnum" className="form-control" type="text" placeholder="num to convert" value={this.props.operand} readOnly></input>
                    <input id="convresult" className="form-control" type="text" placeholder="result" value={this.props.result} readOnly></input>
                </div>
        );
    }
}

export default ConverterOut;