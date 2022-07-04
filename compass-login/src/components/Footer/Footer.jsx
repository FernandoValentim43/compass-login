import React, { useState, useEffect } from "react";

import Text from "../Text/Text";

import Button from "../Button/Button";

import { useNavigate } from "react-router-dom";

import Timer from "../Timer/Timer";

const Footer = () => {
  let [seconds, setTotalSeconds] = useState("600");

  const testando = () => {
    useEffect(() => {
      if (seconds === 0) {
        navigate("/");
      } else {
        setTimeout(() => {
          setTotalSeconds(seconds - 1);
        }, 1000);
      }
    }, [seconds]);
    return seconds;
  };

  let navigate = useNavigate();
  return (
    <footer>
      <Text
        name="bigParagraphFooter"
        text="Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar."
      />
      <p className="division">______</p>
      <Text name="paragraphFooter" text="Aplication refresh in" />
      <div className="test">
        <Timer tempo={testando} />
        <p className="seconds">seconds</p>
      </div>
      <div className="buttonsContainer">
        <Button
          id="navegate"
          name="navegate"
          onClick={() => {
            seconds = 600;
          }}
          text="Continuar Navegando"
        />
        <Button
          id="logout"
          name="logout"
          text="Logout"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
