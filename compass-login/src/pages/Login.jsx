import { SectionStyledLogin } from "../components/Section/Login.styled"

import Image from "../components/Image/Image"

import Image2 from "../assets/image2.png"
import LogoWhite from "../assets/compass-logo-white.png"



function Login() {
    return (
        <SectionStyledLogin>
            <section className="main">
               <div className="login-area">
                          
               </div>
               
               <div className="img-area">
               <Image src={LogoWhite} wrapper="logo-white" name="logowhite" />
               <Image src={Image2} wrapper="login-img" name="loginimg" />
               </div>
               
            </section>     
        </SectionStyledLogin>
    )
  }
  
  export default Login