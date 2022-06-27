import { InputStyled } from "./Input.styled.jsx";


export function Input (props) {
return (
    <div className="input-div">
        <InputStyled>
            <input  className="Input" type={props.type} placeholder={props.placeholder} required={true}/>  
        </InputStyled>
    </div>
 );
   
}

export default Input;