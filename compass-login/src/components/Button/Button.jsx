import React from "react";

import { ButtonStyled } from "./Button.styled";

const Button = (props) => {
  return (
    <ButtonStyled className={props.name + '1'}>
      <button id={props.id} onClick={props.onClick} className={props.name} type={props.type}>
        {props.text}
      </button>
    </ButtonStyled>
  );
};

export default Button;
