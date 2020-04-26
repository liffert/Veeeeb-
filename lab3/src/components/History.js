import React from "react";

class History extends React.Component {
    render() {
        return (
            <div className="History">
                <textarea id="his" className="form-control" placeholder={this.props.history} readOnly></textarea>
            </div>
        );
    }
}

export default History;