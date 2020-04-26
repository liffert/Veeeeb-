import React from "react";

class ChooseOperation extends React.Component {

    render() {
        return (
            <div className="Choose operation" onChange={this.props.change}>
                <select name="Operation" id="CC" className="form-control">
                    <option>Calculator</option>
                    <option>Converter</option>
                </select>
            </div>
        );
    }
}

export default ChooseOperation;