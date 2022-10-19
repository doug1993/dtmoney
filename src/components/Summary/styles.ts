import styled from "styled-components";

export const Container = styled.main `
display: grid;
grid-template-columns: repeat(3 ,1fr) ;
gap: 2rem ;
margin-top: -6rem ;

div{
    background:var(--shape) ;
    padding: 1.5rem 2rem ;
    border-radius: 0.5rem ;
    color:var(--text-title) ;
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
    strong{
        margin-top: 1rem ;
        font-size: 2rem;
        font-weight: normal ;
        line-height: 3rem;
    }
    &.highLightBack{
        background:var(--green) ;
        color: #FFF ;
    }
}

`