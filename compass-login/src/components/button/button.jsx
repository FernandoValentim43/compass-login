import React from "react";
import { ButtonLogin, ButtonNavegate, ButtonLogOut } from "./buttonStyled";

const Button = (props) => {
    if(props.id=="bt1"){
        return (
            <div>
                <ButtonLogin id={props.id}>Continue</ButtonLogin>
            </div>
        )
    }
    if(props.id=="bt2"){
        return (
            <div>
                <ButtonNavegate id={props.id}>Continuar Navegando</ButtonNavegate>
            </div>
        )
    }
    else{
        return (
            <div>
                <ButtonLogOut id={props.id}>Continue</ButtonLogOut>
            </div>
        )
    }
}

export default Button;