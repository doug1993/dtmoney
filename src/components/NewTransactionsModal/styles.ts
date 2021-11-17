import { prependOnceListener } from 'process'
import styled from 'styled-components'

export const Container = styled.form`
    h2{
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0%.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;
        font-weight: 400;
        font-size: 1rem;

        &::placeholder{
            color: var(--text-body);
        }

        & + input{
            margin-top: 1rem;
        }
    }
    button{
       
        width: 80%;
        max-width: 461px;
        padding: 0.5rem;
        height: 3.5rem;
        background: var(--background);
        color: var(--text-title);
        border-radius: 0.25rem;
        border: 1px solid green; 
        font-size: 1rem;
        margin: 1.5rem;
        margin-left: 2.5rem;

        transition: color 0.7s ;
            transition: box-shadow 0.7s ;
            transition: filter 0.7s ;
        &:hover{
            color: var(--green);
            box-shadow: 0 0 32px 1px rgba(0, 250, 50, .4);
            filter: brightness(0.96);
        }
    }

   

`
export const TransactionTypeContainer = styled.div `
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    button#category{
        
    }
`

interface RadioBoxProps {
    isActive: boolean;

}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
        border:  1px solid #d7d7d7;
        border-radius: 0.5rem;

        background: ${(props)=>{return props.isActive ? '#ccc ' : 'transparent'}};
        
        display: flex;
        align-items: center;
        justify-content: center;

        margin-left: 1.5rem;


        color: var(--text-title);
        :nth-child(1){
            transition: color 0.7s ;
            
            
            &:hover{
            color: var(--green);
            box-shadow: 0 0 32px 1px rgba(0, 250, 50, .4);
                   }
        }
        :nth-child(2){
            transition: color 0.7s ;
            transition: box-shadow 0.7s ;
            
            &:hover{
            color: var(--red);
            box-shadow: 0 0 32px 1px rgba(250, 0, 50, .4);
            
        }
        }
       
        img{
            margin-right: 0.5rem;
            width: 24px;
            height: 24px;
        }
       
`