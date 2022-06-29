import styled from "styled-components";

export const HomeStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  user-select: none;
  .logo-black {
    width: 15em;
  }

  .main {
    display: flex;
    flex: column;
  }

  .logoball {
   display: flex;
   flex-direction: flex-end;
   left: 0;
   bottom: 0;
   right: 0;
   height: 25rem;
   @media (max-width: 800px) {
    display: flex;
   }
    
  }

  header {
    display: flex;
    flex: 1;
    justify-content: space-between;
  }

  footer {
    .division{
      color: white;
      font-weight: 400;
      transform: rotate(90deg);
      margin: 0;
      @media (max-width: 800px) {
        display: none;
      }
    }
    width: 100%;
    background-color: #26292C;
    left: 0;
    bottom: 0;
    right: 0;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: end;
    @media (max-width: 800px) {
      flex-direction: row-reverse;

    }
    .seconds{
      text-align: center;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      color: white;
      margin: 0;
      @media (max-width: 800px) {
        display: none;
      }
    }
    .test{
      margin-right: 21%;
      margin-left: 1%;
    }
  }

`;
