import { InputStyled } from "./InputStyled";

import Image from "../Image/Image";

export function Input({ name, src, type, placeholder, register }) {
  return (
    <InputStyled>
      <div className="input-div">
        <Image src={src} name="icon" />

        <input
          className={name}
          type={type}
          placeholder={placeholder}
          {...register(name, { required: true })}
        />
      </div>
    </InputStyled>
  );
}

export default Input;
