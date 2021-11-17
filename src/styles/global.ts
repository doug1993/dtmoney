import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    :root{
        --background:#f0f2f5;
        --red:#E52E4D;
        --green: #33CC95;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --background: #f0f2f5;
        --shape: #ffffff;

    }
    html{
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 83.75%;
        }
    }

    body{
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;    
    }

    body , input , textarea , button {
        font-family: 'Poppins',sans-serif;
        font-weight: 400;
    }
    h1 , h2 , h3 , h4 , h5 , h6 , strong{
        font-weight: 600;
    }
    button{
        cursor: pointer;
    }
    [disabled]{
            opacity: 0.955;
            cursor: not-allowed
        }
        .react-modal-overlay{
            background:  rgba(0,0,0,0.75);
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;

            display: flex;
            align-items: center;
            justify-content: center;

        };

        .react-modal-content{
            width: 100%;
            max-width: 760px;
            background: var(--background);
            padding: 3rem;
            position: relative;
            border-radius: 0.5rem;

        }

        button#exit{
        border: 0;
        background: transparent;
        position: absolute; 
        right: 1.5rem;
        top: 1.5rem;

        transition: filter 0.7s;
        &:hover{
            filter: brightness(0.4)
        }
        
    }
`   