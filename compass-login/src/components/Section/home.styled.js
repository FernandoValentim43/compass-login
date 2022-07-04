import styled from "styled-components";

export const HomeStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  user-select: none;
  .logo-black {
    width: 100%;
  }
  .main {
    display: flex;
    flex: column;
    height: 50rem;
    @media (max-width: 800px) {
      height: 40rem;
    }
    @media (max-height: 815px) {
      height: 25rem;
    }
  }
  .logoball {
    display: flex;
    align-self: flex-end;
    width: 30rem;
    max-width: 25rem;
    max-height: 25rem;
    @media (max-width: 600px){
      margin-right: 20px;
    }
    img {
      width: 100%;
      max-height: 35.25rem;
      align-self: flex-start;
    }
  }
  header {
    display: flex;
    flex: 1;
    justify-content: space-between !important;
  }
  .logoblack {
    width: auto;
    @media (max-width: 800px) {
      width: 50%;
    }
  }
  footer {
    display: flex;
    width: 100px;
    height: 100px;
    @media (max-width: 800px) {
      display: inline-block;
    }
    .division {
      color: white;
      font-weight: 400;
      transform: rotate(90deg);
      margin: 0;
      @media (max-width: 950px) {
        display: none;
      }
    }
    width: 100%;
    background-color: #26292c;
    left: 0;
    bottom: 0;
    right: 0;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: end;
    @media (max-width: 800px) {
      flex-direction: row-reverse;
      .buttonsContainer {
        padding: 0;
        margin: 0;
        justify-content: space-between;
        .navegate1 {
          width: 100%;
        }
        .logout1 {
          width: 35%;
        }
        button {
          width: 100%;
        }
      }
    }
    .seconds {
      text-align: center;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      color: white;
      margin: 0;
      @media (max-width: 800px) {
        display: none;
      }
    }
    .test {
      margin-right: 21%;
      margin-left: 1%;
    }
    .buttonsContainer {
      display: inline-flex;
      @media (max-width: 800px) {
        width: 100%;
        flex-direction: row-reverse;
      }
    }
  }
`;