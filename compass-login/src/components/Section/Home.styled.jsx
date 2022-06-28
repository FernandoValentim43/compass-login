import styled from "styled-components";

export const HomeStyled = styled.div`
  height: 100vh;
  user-select: none;
  .logo-black {
    width: 14rem
  }

  .logoball {
   display: flex;
   position: absolute;
   left: 0;
   bottom: 0;
   right: 0;
   height: 25rem;
    
  }

  footer {
    .division{
      color: white;
      font-weight: 400;
      transform: rotate(90deg);
      margin: 0;
    }
    background-color: #26292C;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: end;
    .seconds{
      text-align: center;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      color: white;
      margin: 0;
      margin-bottom: 15px;
    }
    .test{
      margin-right: 21%;
      margin-left: 1%;
    }
  }
`;
