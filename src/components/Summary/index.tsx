import { Container } from "./styles";
import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saídas.svg'
import totalImg from '../../assets/Total.svg'


export function Summary(){
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