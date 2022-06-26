import { HomeStyled } from "../components/Section/Home.styled";

import Image from "../components/Image/Image";

import LogoBall from "../assets/uolball.png";

import LogoBlack from "../assets/compass-logo-black.png";

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
        
      </footer>
    </HomeStyled>
  );
}

export default Home;