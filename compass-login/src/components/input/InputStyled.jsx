import styled from 'styled-components'

export const InputStyled = styled.div`
    
    input {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
       
        background-color: transparent;
        border: solid 1px white;
        border-radius: 50px; 
    }

    input::placeholder {
        color: #E0E0E0;
        opacity: 1;
    }

    input:focus {
        outline: none !important;
        border:1px solid #E0E0E0;
        box-shadow: 0 0 1px #26292C;
    }


`