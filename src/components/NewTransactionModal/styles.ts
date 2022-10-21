import styled from "styled-components"
import {darken,transparentize} from "polished"

export const Container = styled.form`
    align-items:center ;
   h2{
    color:var(--text-title) ;
    font-size:1.5rem ;
    margin-bottom:2rem ;
   }
   input{
    width:100% ;
    padding:0 1.5rem ;
    height:4rem ;
    border-radius: 0.5rem ;
    border: 0.5px solid #d7d7d7 ;

    background: var(--shape) ;

    font-weight: 400 ;
    font-size:1.25rem ;
    outline:none ;

    &::placeholder{
        color:var(--text-body) ;
    }
    & +input{
        margin-top: 1rem;
    }
}
button[type="submit"]{
    width:50% ;
    padding:0 1.5rem ;
    height:4rem ;
    background:var(--green) ;
    color:var(--shape) ;
    border-radius: 1rem ;
    border: 0;
    font-size:1.5rem ;
    margin: 1rem 7.5rem ;
    font-family: 'Poppins' ;

    transition: text-shadow 0.3s,color 0.3s; 
    &:hover{
        text-shadow:0 0 10px white ;
        color: #15aa99;
        
        
    }
}

`

export const TransactionTypeButton = styled.div`
    margin: 1rem 0 ;
    display:grid ;
    grid-template-columns:1fr 1fr ;
    gap:1rem ;
    

`
    interface SelectBoxTransationProps{
        ifActive: boolean; 
        activeColor: 'green'|'red';
    }

   const colors={
    green:'#33cc95',
    red: '#e52e40'
   }    
export const SelectBoxTransation = styled.button<SelectBoxTransationProps>`
     height:4rem ;
        border:0.5px solid #d7d7d7 ;
        border-radius:1rem ;
                // --> if and else simple way Conditional (ternary) Operator MDN !IMPORTANT!
        background: ${(props)=> props.ifActive ? 
            transparentize(0.8 ,colors[props.activeColor]): 'transparent'} ;

        display:flex ;
        align-items:center ;
        justify-content:center ;
        img{
            width:2rem ;
            height:2rem;
        }
        span{
            display:inline-block ;
            margin-left:1rem ;
            font-size:1.25rem ;
            color: var(--text-title);

        }
        transition:border-color 0.25s ;
        :hover{
            border-color:${darken(0.2, '#d7d7d7')} ;
        }

`