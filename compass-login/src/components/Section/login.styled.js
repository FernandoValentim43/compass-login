import styled from "styled-components";
export const SectionStyledLogin = styled.section`
  user-select: none;

  * {
    overflow-y: hidden;
    overflow-x: hidden;
  }

  .main {
    background: rgb(30, 32, 34);
    background: linear-gradient(
      0deg,
      rgba(30, 32, 34, 1) 41%,
      rgba(58, 61, 64, 1) 100%
    );

    display: flex;
    width: 100vw;
    height: 100vh;
  }
  .login-area {
    display: flex;
    justify-content: center;
    height: 100%;
    margin: 5% auto;
    width: 55%;
    @media (max-width: 825px) {
      display: block;
      margin-top: 4.37rem;
      width: 500px;
      height: 100%;
      align-items: center;
    }
    @media (max-height: 670px) {
      margin: 0;
    }
  }
  .logo1{
    display: none;
    width: 100%;
    justify-content: center;
    margin-bottom: 15%;
    img{
      margin: 0;
    }
    @media (max-width: 825px) {
      display: flex;
    }
  }
  .img-area {
    width: 45%;
    @media (max-width: 825px) {
      display: none;
    }
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
