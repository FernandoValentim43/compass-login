import styled from "styled-components";

export const HomeStyled = styled.div`
  height: 100vh;

  display: grid;

  grid-template-rows: 1fr 2fr 1fr;

  .main {
    height: 42.05rem;
  }

  .logo-black img {
    width: 15.625rem;
  }

  .logoball {
    display: flex;

    height: 100%;

    align-items: flex-end;
  }

  .logo-ball {
    width: 31.25rem;
  }
`;
