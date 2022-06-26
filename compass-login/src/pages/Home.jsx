import { HomeStyled } from "../components/Section/Home.styled"
import Image from "../components/Image/Image"

import LogoBall from "../assets/uolball.png"
import LogoBlack from "../assets/compass-logo-black.png"
import Weather from '../components/Weather/Weather'

function Home() {
    return (
      <HomeStyled>
          <section className="main">
            <header>
              <Image src={LogoBlack} wrapper="logo-black" />
            </header>
            <Image src={LogoBall} wrapper="logo-ball" />
            <Weather />
          </section>
      </HomeStyled> 
    )
  }
  
export default Home
  