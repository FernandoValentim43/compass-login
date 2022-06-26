import { SectionStyledLogin } from "../components/Section/Login.styled"

import Image from "../components/Image/Image"

import Image2 from "../assets/image2.png"
import LogoWhite from "../assets/compass-logo-white.png"

import Form from "../components/form/Form"
import Text from "../components/Text/text"

function Login() {
    return (
        <SectionStyledLogin>
            <section className="main">
               <div className="login-area">
                        <Form/>      
               </div>
               
               <div className="img-area">
               <Image src={LogoWhite} wrapper="logo-white" />
               <Image src={Image2} wrapper="login-img" />
               </div>
               
            </section>     
        </SectionStyledLogin>
    )
  }
  
  export default Login
  