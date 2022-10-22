import { Container } from "./styles";
import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saídas.svg'
import totalImg from '../../assets/Total.svg'
import { TransactionsContext } from "../../TransactionsContext";
import React, {useContext} from "react";



export function Summary(){
    const transactions = useContext(TransactionsContext)

    
    return( 
    <Container>
        
        <div>
            <header>
                <p>Entradas</p>
                <img src={incomeImg} alt="" />

            </header>
            <strong>1000</strong>
        </div>
        <div>
            <header>
                <p>Saidas</p>
                <img src={outcomeImg} alt="" />
            </header>
            <strong> -500</strong>
        </div>
        <div className="highLightBack">
            <header>
                <p>Total</p>
                <img src={totalImg} alt="" />
            </header>
            <strong>500</strong>
        </div>

     

    </Container>   
 )
}