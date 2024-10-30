import React from "react";
function MyOwnRow(props){
    return(
        <tr>
            <td>{props.index + 1}</td>
            <td>{props.el}</td>
            <td>{<button onClick={props.onButtonClick}>click</button>}</td>
        </tr>
    )
}
export default MyOwnRow;