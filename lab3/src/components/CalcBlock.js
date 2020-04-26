import React from "react";

class CalcBlock extends React.Component{
    render(){
        return(
                <div className="buttonsTable" onClick={this.props.click}>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>
                                    <button id="1" type="button" className="">1</button>
                                </td>
                                <td>
                                    <button id="2" type="button" className="">2</button>
                                </td>
                                <td>
                                    <button id="3" type="button" className="">3</button>
                                </td>
                                <td>
                                    <button id="plus" type="button" className="">+</button>
                                </td>
                                <td>
                                    <button id="pow" type="button" className="">^</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button id="4" type="button" className="">4</button>
                                </td>
                                <td>
                                    <button id="5" type="button" className="">5</button>
                                </td>
                                <td>
                                    <button id="6" type="button" className="">6</button>
                                </td>
                                <td>
                                    <button id="minus" type="button" className="">-</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button id="7" type="button" className="">7</button>
                                </td>
                                <td>
                                    <button id="8" type="button" className="">8</button>
                                </td>
                                <td>
                                    <button id="9" type="button" className="">9</button>
                                </td>
                                <td>
                                    <button id="multiple" type="button" className="">*</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button id="0" type="button" className="">0</button>
                                </td>
                                <td>
                                    <button id="Erase" type="button" className="">AC</button>
                                </td>
                                <td>
                                    <button id="res" type="button" className="">=</button>
                                </td>
                                <td>
                                    <button id="divide" type="button" className="">/</button>
                                </td>
                            </tr>
                        </tbody>   
                    </table>
                </div>
        );
    }
}

export default CalcBlock;