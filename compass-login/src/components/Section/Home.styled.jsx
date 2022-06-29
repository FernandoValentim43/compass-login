import styled from "styled-components";

export const HomeStyled = styled.div`
  height: 100vh;
  display: flex;
  min-width: 245px;
  flex-direction: column;
  user-select: none;

  .logo-black {
    width: 15em;
    
  }

  .main {
    display: flex;
    flex: column;
    margin-bottom: 150px;
    
  }

  .logoball {
   display: flex;
   flex-direction: flex-end;
   position: absolute;
   margin-bottom: 70px;
   width: 500px;
   left: 0;
   bottom: 0;
   right: 0;
   height: 25rem;
   height: 370px;
   @media (max-width: 800px) {
    display: flex;
   }

   
    
  }

  header {
    display: flex;
    flex: 1;
    justify-content: space-around;
    min-height: 150px;
    margin-bottom: 3rem;
  }

  .logoblack {
    margin-right: 10vh;
    width: 28vw;
  }

  footer {
    display: flex;
    position:absolute;
    bottom:0;

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
