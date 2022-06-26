import { HomeStyled } from "../components/Section/Home.styled";

import Image from "../components/Image/Image";

import LogoBall from "../assets/uolball.png";

import LogoBlack from "../assets/compass-logo-black.png";

function Home() {
  return (
    <HomeStyled>
      <div className="header">
        <Image src={LogoBlack} wrapper="logo-black" />
      </div>

      <div className="main">
        <Image src={LogoBall} wrapper="logo-ball" name="logoball" />
      </div>
    </HomeStyled>
  );
}

export default Home;
