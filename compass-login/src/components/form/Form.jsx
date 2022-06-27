import { Input } from "../input/Input";
import Button from "../button/Button";

import { FormStyled } from "./FormStyled";
import Text from "../Text/text";


import iconLogin from "../../assets/icon.login.png"
import iconLock from "../../assets/icon.lock.png"





export function Form() {
  return (
    <FormStyled>
      <div className="form-div">
        <form action="/">

        

          <Text text="Olá ," name="greeting"/>
          <Text name="paragraph"text="Para continuar navegando de forma segura, efetue o login na rede." />
          <Text name="login"text="Login" />

         
          
          <Input name="email" type="email" placeholder="Usuário" src={iconLogin}/>
          <Input name="password" type="password" placeholder="Senha" src={iconLock}/>

          <Text name="invalid"text="Ops, usuário ou senha inválidos. Tente novamente!" />

          <Button name="login" text="continuar" />
        </form>
      </div>
    </FormStyled>
  );
}

export default Form;
