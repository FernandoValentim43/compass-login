import React from "react";

import { ButtonStyled } from "./Button.styled";

const Button = (props) => {
  return (
    <ButtonStyled>
      <button id={props.id} className={props.name} type={props.type}>
        {props.text}
      </button>
    </ButtonStyled>
  );
};

export default Button;
