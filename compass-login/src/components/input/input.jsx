import { InputStyled } from "./InputStyled";


export function Input (props) {
return (
    <div className="input-div">
        <InputStyled>
            <div className="input-wrapper">
                <input  className="Input" type={props.type} placeholder={props.placeholder}/>
            </div>
        </InputStyled>
    </div>
 );
   
}

export default Input;