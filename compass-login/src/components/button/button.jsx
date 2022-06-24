import React from "react";

const Button = (props) => {
    return (
        <div name={props.id}>
            <button id={props.id}>Continue</button>
        </div>
    )
}

export default Button;