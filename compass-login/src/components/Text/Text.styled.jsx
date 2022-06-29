import styled from 'styled-components';

export const TextStyled = styled.div`
        display: flex;
        > .greeting {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 50px;
            color: #E0E0E0;
            margin-bottom: 0px;
            margin-top: 15%;
        }
        > .paragraph {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            color: #E0E0E0;
            margin-top: 2px;
            margin-bottom: 50px;
            max-width: 280px;
            
        }
        > .login {
            font-family: 'Poppins';
            font-style: normal;
            font-size: 22px;
            color: #E0E0E0;
            margin-top: 2px;
            margin-bottom: 25px;
            max-width: 320px;
        }
        > .info {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: #E0E0E0;
            
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: red;
        }
        
        > .invalid {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            color: #E9B425;
            
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            max-width: 270px;
            margin-left: 10px;
            margin-top: 0px;
        }
        .paragraphFooter {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            color: #E0E0E0;
            max-width: 125px;
            text-align: right;
            @media(max-width: 800px) {
                display: none;
            }
        }
        .bigParagraphFooter {
            
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            color: #E0E0E0;
            flex: 1;
            
            text-align: right;
            margin-left: 10px;
            @media (max-width: 950px) {
                display: none;
            }
        }
`