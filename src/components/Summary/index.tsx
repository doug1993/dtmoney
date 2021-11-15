import {Container} from "./styles"
import entryImg from "../../assets/Entradas.svg"
import exitsImg from "../../assets/Saídas.svg"
import totalImg from "../../assets/Total.svg"




 export function Summary(){
    return (
        <Container>
            <div>
                <header>
                    <p> Entradas </p>
                    <img src={entryImg} alt=""/>
                </header>
                <strong>1000,00R$</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={exitsImg} alt=""/>
                </header>
                <strong>500,00R$</strong>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt=""/>
                </header>
                <strong>500,00R$</strong>
            </div>
        </Container>
    )
}