import {Input} from '../input/Input'



export function Form () {
    return (
      <div className="form-div">
        <form action="/">
        <Input type="text" placeholder="Usuário"/>
        <Input type="password" placeholder="Senha"/>
      </form>
      </div>
    )
       
}
    
export default Form;