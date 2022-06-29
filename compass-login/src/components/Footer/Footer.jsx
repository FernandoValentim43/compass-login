import React from "react";

import Text from "../Text/Text";

import Button from "../Button/Button";

import Timer from "../Timer/Timer";
 
const Footer = () => {
  return (
    <footer>
      <Text
        name="bigParagraphFooter"
        text="Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar."
      />
      <p className="division">______</p>
      <Text name="paragraphFooter" text="Aplication refresh in" />
      <div className="test">
        <Timer />
        <p className="seconds">seconds</p>
      </div>
      <div className="buttonsContainer">
        <Button id="navegate" name="navegate" text="Continuar Navegando" />
        <Button id="logout" name="logout" text="Logout" />
      </div>      
    </footer>
  );
};

export default Footer;
