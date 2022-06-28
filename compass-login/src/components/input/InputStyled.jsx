import styled from 'styled-components'

export const InputStyled = styled.div`
      


    input {
        
        font-family: 'Poppins';
        font-style: normal;

        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

        width: 250px;
        height: 45px;
        

        padding-left: 15px;
       
        background-color: transparent;
        border: solid 1px white;
        border-radius: 50px;

        margin-left: 5px;
        margin-bottom: 24px;
        

    }

    input::placeholder {
        color: #E0E0E0;
        opacity: 1;
        cursor: pointer; 
    }

    input:focus {
        outline: none !important;
        border:1px solid #E0E0E0;
        box-shadow: 0 0 1px #26292C;
    }

    

    input:focus::placeholder {
        color: transparent;
      }

    .icon {
        position: absolute;
        padding-top: 14px;
        
        margin-left: 240px;
        
    }

    img {
        width: 16px;
    }

    
`