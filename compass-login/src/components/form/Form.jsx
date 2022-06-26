
import { Input } from "../input/Input";

import { FormStyled } from "./FormStyled";

export function Form() {
  return (
   
     <FormStyled>
      <div className="form-div">
       
        <form action="/">
          <Input type="text" placeholder="Usuário" />
          <Input type="password" placeholder="Senha" />
        </form>
      </div>
      </FormStyled>
  );
}

export default Form;