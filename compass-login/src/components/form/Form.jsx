import { Input } from "../input/Input";
import Button from "../button/Button";

export function Form() {
  return (
    <div className="form-div">
        <form action="/">
          <Input type="text" placeholder="Usuário"/>
          <Input type="password" placeholder="Senha"/>
          <Button name="login" text="continuar"/>
        </form>
    </div>
  );
}

export default Form;
