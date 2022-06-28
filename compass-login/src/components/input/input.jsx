import { InputStyled } from "./InputStyled";

import Image from "../Image/Image";



export function Input(props) {
  return (
    <InputStyled>
      <div className="input-div">
      <Image src={props.src} name="icon"/>
        <input
          className={props.name}
          type={props.type}
          placeholder={props.placeholder}
          required={true}
          pattern={props.inputPattern}
        />
      </div>
    </InputStyled>
  );
}

export default Input;
