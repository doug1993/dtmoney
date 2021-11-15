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

`   