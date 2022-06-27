import { InputStyled } from "./InputStyled";

import Image from "../Image/Image";



export function Input(props) {
  return (
    <InputStyled>
    <Image src={props.src}/>

      <div className="input-div">
        <input
          className="Input"
          type={props.type}
          placeholder={props.placeholder}
          required={true}
        />
      </div>
    </InputStyled>
  );
}

export default Input;
