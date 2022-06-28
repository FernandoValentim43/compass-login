import { HomeStyled } from "../components/Section/Home.styled";

import Image from "../components/Image/Image";

import LogoBall from "../assets/uolball.png";

import LogoBlack from "../assets/compass-logo-black.png";

import Text from "../components/Text/Text"

import Button from "../components/Button/Button";

import Timer from "../components/Timer/Timer"

function Home() {
  return (
    <HomeStyled>
      <header>
        <div className="header">
          <Image src={LogoBlack} wrapper="logo-black" name="logoblack"/>
        </div>
      </header>

      <div className="main">
        <Image src={LogoBall} wrapper="logo-ball" name="logoball" />
      </div>

      

      <footer>
        <Text name="bigParagraphFooter" text="Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar."/>
        <p className="division">______</p>
        <Text name="paragraphFooter" text="Aplication refresh in"/>
        <div className="test">
          <Timer/>
          <p className="seconds">seconds</p>
        </div>
        <Button id="navegate" name="navegate" text="Continuar Navegando"/>
        <Button id="logout" name="logout" text="Logout"/>
      </footer>
    </HomeStyled>
  );
}

export default Home;
