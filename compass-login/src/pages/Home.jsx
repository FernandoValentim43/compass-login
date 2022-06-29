import { HomeStyled } from "../components/Section/Home.styled";
import Image from "../components/Image/Image";
import LogoBall from "../assets/uolball.png";
import LogoBlack from "../assets/compass-logo-black.png";
import Footer from "../components/Footer/Footer"
import Weather from "../components/Weather/Weather"
import Title from "../components/Title/Title"
import { TitleContainer } from "../components/Title/Title.styled"


function Home() {
  return (
    <HomeStyled>
      <header>      
          <Image src={LogoBlack} wrapper="logo-black" name="logoblack"/>
          <Weather />       
      </header>
      <div className="main">
        <Image src={LogoBall} wrapper="logo-ball" name="logoball" />
        <TitleContainer id="title_container">
          <Title type="h1" label="Our mission is"/>
          <Title type="h3" label="Nossa missão é"/>
          <Title type="h2" label="to transform the world"/>
          <Title type="h3" label="transformar o mundo"/>
          <Title type="h4" label="building digital experiences"/>
          <Title type="h3" label="construindo experiências digitais"/>
          <Title type="h5" label="that enable our client’s growth"/>
          <Title type="h3" label="que permitam o crescimento dos nossos clientes"/>
        </TitleContainer>
      </div>

      <Footer />      
    </HomeStyled>
  );
}

export default Home;
