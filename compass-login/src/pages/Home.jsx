import { SectionStyle } from "../components/Section/Section.styled"

import Image from "../components/Image/Image"
import Image2 from "../assets/image2.png"
import ImgLogo from "../assets/compass-logo-white.png"

function Home() {
    return (
        <SectionStyle>
            <section className="login">
            <div className="side-imgs">
            <Image src={ImgLogo} wrapper="logo-white" />
            <Image src={Image2} wrapper="login-img" />
            </div>
            
                
            </section>
        </SectionStyle>
    )
  }
  
  export default Home
  