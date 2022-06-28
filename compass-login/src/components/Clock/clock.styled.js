import styled from 'styled-components';

const TextClock = styled.p`
    font-size: 6.25rem;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    margin: 0;
    height: 7.31rem;
`;
const TextDate = styled.p`
    margin: 0;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 0.87rem;
    justify-self: center;
`;

const GeneralDiv = styled.div`
    display: grid;
    justify-content: center;
`;

export {TextClock, TextDate, GeneralDiv}