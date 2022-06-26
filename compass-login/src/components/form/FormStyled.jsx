import styled from "styled-components";

export const FormStyled = styled.div`
  .form-div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  form:invalid {
    .invalid {
      visibility: hidden;
    }

    input:focus {
        border: solid 1px #E9B425;
    }
  }
`;
