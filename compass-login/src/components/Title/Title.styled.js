import styled from 'styled-components';
  
    const TitleContainer = styled.div`
        display: flex;
        justify-content: center;
        flex: 1;
        flex-direction: column;
        width: 100%;
        padding-right: 6vw;
        pointer-events: none;
        @media (max-width: 800px) {
            display: none;
        }  
    `

    const H1Styled = styled.h1`
        font-family: 'Poppins';   
        font-weight: 700;
        font-size: 2vw;
        text-align: right;
        color: #C12D18;
        
    `

    const H2Styled = styled.h2`
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 2.9vw;
        text-align: right;
        color: #C12D18;       
    `

    const H3Styled = styled.h3`
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 1.3vw;
        text-align: right;
        color: #222222; 
        line-height: 14px;
    `

    const H4Styled = styled.h4`
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 2.9vw;
        text-align: right;
        color: #C12D18;      
    `

    const H5Styled = styled.h5`
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 2.9vw;
        text-align: right;
        color: #C12D18;    
    `

    const H6Styled = styled.h6`
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 45px;
        text-align: right;
        color: #C12D18;    
    `

    export {
        H1Styled,
        H2Styled,
        H3Styled,
        H4Styled,
        H5Styled,
        H6Styled,
        TitleContainer
    };



