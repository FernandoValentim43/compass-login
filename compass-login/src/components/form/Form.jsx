import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../App";
import { Input } from "../input/Input";
import Button from "../button/Button";
import { FormStyled } from "./Form.styled";
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

export function Form() {
  const setLogin = useContext(AuthContext);

  let navigate = useNavigate();


  useEffect(() => {
    const loginStorage = localStorage.getItem("login");
    const passwordStorage = localStorage.getItem("password");
    setValue("login", loginStorage);
    setValue("password", passwordStorage);

    if (nameRegex.test(loginStorage) && passwordStorage.length > 3) {
      setTimeout(() => {
        setLogin()
        navigate("/Home");
      }, 5000);
    }
  }, []);

  function loginUser(data) {
    const { login, password } = data;
    localStorage.setItem("login", login);
    localStorage.setItem("password", password);

    setLogin()

    navigate("/Home");
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
        <form autoComplete="off" onSubmit={handleSubmit(loginUser)}>
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

          <Button name="login" text="continuar" type="submit" />
        </form>
      </div>
    </FormStyled>
  );
}

export default Form;
