import styled from "styled-components";
export const SectionStyledLogin = styled.section`
  .main {
    display: flex;
    width: 100vw;
    height: 100vh;
  }
  .login-area {
    width: 55%;
    
    min-width: 304px;
  }
  .img-area {
    width: 45%;
  }
  .login-area {
    background: rgb(30, 32, 34);
    background: linear-gradient(
      0deg,
      rgba(30, 32, 34, 1) 41%,
      rgba(58, 61, 64, 1) 100%
    );
  }
  .home {
    background-color: #e5e5e5;
  }
  /* imgs */
  .logo-white {
    position: absolute;
    z-index: 2;
    display: flex;
    height: 60px;
    margin-left: 18%;
    
  }
  .logo-white img {
    display: flex;
    position: absolute;
    z-index: 2;
    width: 220px;
    max-width: 220px;
    
  }
  .login-img {
    height: 100vh;
    width: 100vh;
  }
  .login-img img {
    width: 100vh;
    height: 100vh;
  }
`;