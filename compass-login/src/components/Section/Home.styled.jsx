import styled from "styled-components";

export const HomeStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  user-select: none;

  .logo-black {
    width: 15em;
    
    @media (max-width: 800px) {
      width: 14em;
  }
  

  }

  .main {
    display: flex;
    flex: column;
  
    
  }

  .logoball {
   display: flex;
   flex-direction: flex-end;
   width: 500px;
   height: 370px;
    
  }

  header {
    display: flex;
    flex: 1;
    align-itens: center;
    justify-content: space-between !important; 
   
    
  }

  .logoblack {
    width: auto;
    
  }

  footer {
    display: flex;    
    width: 100px;
    height: 100px;
    @media (max-width: 800px) {
      display: inline-block;
    }

    .division{
      color: white;
      font-weight: 400;
      transform: rotate(90deg);
   
      margin: 0;
      @media (max-width: 950px) {
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

    .buttonsContainer {
      display: inline-flex;
      @media (max-width: 800px){
        width: 100%;
        flex-direction: row-reverse;
      }
    }
  }

`;
