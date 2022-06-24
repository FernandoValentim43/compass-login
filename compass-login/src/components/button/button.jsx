import React from "react";
import { ButtonStyled } from "./buttonStyled";

const Button = (props) => {
    return (
        <ButtonStyled>
            <button id={props.id} className={props.name}>{props.text}</button>
        </ButtonStyled>
    )
}

export default Button;