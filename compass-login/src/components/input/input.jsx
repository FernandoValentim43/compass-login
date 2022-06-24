
export function Input (props) {
return (
    <div className="input-div">
        <div className="input-wrapper">
             <input  className="Input" type={props.type} placeholder={props.placeholder}/>
        </div>
    </div>
 );
   
}

export default Input;