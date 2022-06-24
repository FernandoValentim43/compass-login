import styled from "styled-components";
export const SectionStyle = styled.section`
  section {
    width: 100%;
    height: 100vh;
    position: absolute;
  }

  .login {
    background-color: #2a2d31;
  }
  .home {
    background-color: #e5e5e5;
  }

  /* imgs */ 
  .side-imgs {
    display: flex;
    justify-content: flex-end;
    
  }

  .logo-white {
    z-index: +1;
    
  }

  .logo-white img {
    position: absolute;
    z-index: 2; 

    width: 220px;
    max-width: 220px;
    padding: 0px 35vh;
   
  }

  
.login-img {
    height: 100vh;
}
 
.login-img img {
    width: 100vh;
    height: 100vh;
}
 



`;
