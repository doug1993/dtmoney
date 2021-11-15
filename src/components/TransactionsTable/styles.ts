import styled from 'styled-components'


export const Container  = styled.div`
margin-top: 4rem;

table{
    width: 100%;
    border-spacing: 0 0.5rem;

    th{
        color: var(--text-body);
        font-weight: 400;
        padding: 1rem 2rem;
        text-align:left;
        line-height: 1.5rem;
    }
    td{
        width: 40%;
        padding: 1rem 2rem;
        border: 0;
        background: var(--shape);
        font-weight: 400;
        color: var(--text-body);
        font-size: 0.8rem;

        &:first-child{
            color: var(--text-title) ;
            border-radius: 0.4rem 0 0 0.4rem;
        }
        &.deposit{
            color: var(--green);
        }
        &.withdraw{
            color: var(--red)
        }
        &:last-child{
            border-radius: 0 0.4rem 0.4rem 0;
        }
    }
}

`