import { Input } from "../input/Input";
import Button from "../button/Button";

import { FormStyled } from "./FormStyled";
import Text from "../Text/text";


import iconLogin from "../../assets/icon.login.png"
import iconLock from "../../assets/icon.lock.png"


import { useNavigate } from "react-router-dom";

export function Form() {
  let navigate = useNavigate();

  return (
    <FormStyled>
      <div className="form-div">
        <form onSubmit={() => {navigate("/Home")}} >

        

          <Text text="Olá ," name="greeting"/>
          <Text name="paragraph"text="Para continuar navegando de forma segura, efetue o login na rede." />
          <Text name="login"text="Login" />

         
         

          <Input name="login" type="text" placeholder="Usuário" src={iconLogin} inputPattern="^[A-Za-z]+\.[A-Za-z]+$" />
          <Input name="password" type="password" placeholder="Senha" src={iconLock} inputPattern="^[0-9]{6,9}$" />

          <Text name="invalid" text="Ops, usuário ou senha inválidos. Tente novamente!"/>

          <Button name="login" text="continuar" />
        </form>
      </div>
    </FormStyled>
  );
}

export default Form;
