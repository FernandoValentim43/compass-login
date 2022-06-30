import styled from 'styled-components';

const TextClock = styled.p`
    font-size: 4.5rem;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    padding: 10px;
    text-align: center;
    color: #222222;
    height: 7.31rem;
    
`;
const TextDate = styled.p`
    margin: 0;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 0.87rem;
    justify-self: center;
   
    padding-bottom: 35px;
    
`;

const GeneralDiv = styled.div`
    display: flex;
    height: 140px;
    min-height: 140px;
    justify-self: center;
    align-itens: center;
    flex-direction: column;
  

    
    @media(max-width: 800px) {
        display: none;
    }
    
`;

export {TextClock, TextDate, GeneralDiv}