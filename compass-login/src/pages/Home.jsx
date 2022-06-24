import { SectionStyle } from "../components/Section/Section.styled"

import Image from "../components/Image/Image"
import Image2 from "../assets/image2.png"

function Home() {
    return (
        <SectionStyle>
            <section className="login">
                <Image src={Image2} imgName="login-page-img"/>
            </section>
        </SectionStyle>
    )
  }
  
  export default Home
  