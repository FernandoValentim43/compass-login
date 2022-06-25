import styled from 'styled-components';

const TextClock = styled.p`
    margin: 0 auto;
    font-size: 100px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    margin: 0;
    height: 117px;
`;
const TextDate = styled.p`
    margin: 0;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    justify-self: center;
`;

const GeneralDiv = styled.div`
    display: grid;
    justify-content: center;
`;

export {TextClock, TextDate, GeneralDiv}