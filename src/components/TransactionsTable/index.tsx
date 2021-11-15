import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable(){
    useEffect(()=>{
        api('/transactions')
        .then(res =>console.log(res.data))
    },[])
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$20.000</td>
                        <td>Desenvolvimento</td>
                        <td>15/11/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel Imovel</td>
                        <td className="withdraw">-R$100.000</td>
                        <td>Desenvolvimento</td>
                        <td>15/11/2021</td>
                    </tr>
                    <tr>
                        <td>Mantimentos</td>
                        <td className="withdraw">-R$1.200</td>
                        <td>Desenvolvimento</td>
                        <td>15/11/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}