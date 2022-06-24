import styled from 'styled-components';

const ButtonStyled = styled.div`
    .botao1{
        cursor: pointer;
        border-radius: 3.125rem;
        box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
        background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
        border: 2px solid transparent;
        border-image: linear-gradient(#FF2D04 100%, #C13216 100%);
        border-image-slice: 0;
        font-family: 'Poppins';
        font-style: normal;
        color: white;
        width: 23.68rem;
        height: 4.18rem;
        font-size: 1.125rem;
    }
`;

export { ButtonStyled }