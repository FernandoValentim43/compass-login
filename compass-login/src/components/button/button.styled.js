import styled from 'styled-components';

const ButtonStyled = styled.div`
    .login{
        cursor: pointer;
        border-radius: 3.125rem;
        box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
        background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
        border: 1px solid transparent;
        border-image: linear-gradient(#FF2D04 100%, #C13216 100%);
        border-image-slice: 0;
        font-family: 'Poppins';
        font-style: normal;
        color: white;
        width: 280px;
        height: 55px;
        font-size: 1.13rem;
        margin-top: 25px;
        font-weight: bold;
    }
    .navegate{
        cursor: pointer;
        background-color: white;
        width: 8.18rem;
        height: 6.18rem;
        color: #C13216;
        font-family: 'Poppins';
        font-style: normal;
        font-size: 0.75rem;
        border: none;
    }
    .logout{
        cursor: pointer;
        background-color: #1C1D20;
        width: 8.18rem;
        height: 6.18rem;
        color: white;
        font-family: 'Poppins';
        font-style: normal;
        font-size: 0.75rem;
        border: none;
    }
`;

export { ButtonStyled }