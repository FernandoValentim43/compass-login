import { InputStyled } from "./InputStyled";


export function Input (props) {
return (
    <div className="input-div">
        <InputStyled>
                <input  className="Input" type={props.type} placeholder={props.placeholder}/>  
        </InputStyled>
    </div>
 );
   
}

export default Input;