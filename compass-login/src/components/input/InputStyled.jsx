import styled from 'styled-components'

export const InputStyled = styled.div`
    
    input {
        
        font-family: 'Poppins';
        font-style: normal;

        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

        width: 300px;
        height: 45px;
        

        padding-left: 15px;
       
        background-color: transparent;
        border: solid 1px white;
        border-radius: 50px;

        margin-left: 0px;
        margin-bottom: 24px;
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

    .input-icons {
        width: 100%;
        margin-bottom: 10px;
    }
     
    .icon {
        padding: 10px;
        min-width: 40px;
    }


`