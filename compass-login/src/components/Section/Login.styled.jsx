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
    align-items: center;
    margin: auto;
    width: 55%;
    @media (max-width: 800px) {
      width: 100%;
    }
  }
  .img-area {
    width: 45%;
    @media (max-width: 800px) {
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
