import styled from 'styled-components';

const ButtonLogin = styled.button`
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
`;

const ButtonLogOut = styled.button`
    cursor: pointer;
`;

const ButtonNavegate = styled.button`
    cursor: pointer;
    background-color: white;
    width: 8.18rem;
    height: 6.18rem;
    color: #C13216;
    font-family: 'Poppins';
    font-style: normal;
    font-size: 1.125rem;
    border: none;
`;

export { ButtonLogin, ButtonLogOut, ButtonNavegate }