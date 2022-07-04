import React, { useEffect } from 'react';
import { Input } from "../Input/Input";
import Button from "../button/Button";
import { FormStyled } from "./form.styled";
import Text from "../Text/text";
import iconLogin from "../../assets/icon.login.png";
import iconLock from "../../assets/icon.lock.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { nameRegex } from "../../utils/regex/regex";
import * as yup from "yup";

const schema = yup
  .object({
    login: yup.string().required().matches(nameRegex),
    password: yup.number().required().min(99999).max(99999999),
  })
  .required();

  const autoLogin = () => {
    const option = confirm('Deseja realizar Login automático?')
    if(!option){
      localStorage.removeItem('login');
      localStorage.removeItem('password');
    }
  }

export function Form() {

  let navigate = useNavigate();

  useEffect(() => {
    const loginStorage = localStorage.getItem('login');
    const passwordStorage = localStorage.getItem('password');
    setValue('login', loginStorage)
    setValue('password', passwordStorage)
    if(nameRegex.test(loginStorage) && passwordStorage.length > 3) {
      setTimeout(() => {
        navigate("/Home");
      }, 5000)
    }
  },[])

  function loginUser(data) {
    const { login, password } = data
    localStorage.setItem('login', login)
    localStorage.setItem('password', password)
    navigate("/Home");
    autoLogin()
 }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <FormStyled>
      <div className="form-div">
        <form autocomplete="off" onSubmit={handleSubmit(loginUser)}>
          <Text text="Olá," name="greeting" />
          <Text
            name="paragraph"
            text="Para continuar navegando de forma segura, efetue o login na rede."
          />
          <Text name="login" text="Login" />
          <Input
            name="login"
            type="text"
            placeholder="Usuário"
            src={iconLogin}
            register={register}
          />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            src={iconLock}
            register={register}
          />
          <div className="errorMessage">
            {(errors.login || errors.password) && (
              <Text
                name="invalid"
                text="Ops, usuário ou senha inválidos. Tente novamente!"
              />
            )}
          </div>

          <Button name="login" text="continuar" type="submit"/>
        </form>
      </div>
    </FormStyled>
  );
}

export default Form;

