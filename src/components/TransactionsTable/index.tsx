import { useEffect } from "react"
import { api } from "../../Services/api"
import { Container } from "./styles"

export function TransactionsTable(){
    useEffect(()=>{
       api.get('transactions')
        .then(data =>console.log(data))
    },[])
    return(
<Container>
    <table>
        <thead>
            <tr>
                <th>Titulo</th>
                <th>Valor</th>
                <th>Category</th>
                <th>Data</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Desenvolvimento de website    </td>
                <td className="deposit">R$ 8500 </td>
                <td>JOB    </td>
                <td> 17/10/2022 </td>
            </tr>
            <tr>
                <td>Desenvolvimento de Aplicacao    </td>
                <td className="deposit">R$ 55000 </td>
                <td>JOB    </td>
                <td> 17/10/2022 </td>
            </tr>
            <tr>
                <td>Aluguel  </td>
                <td className="withdraw">R$ 1300 </td>
                <td>JOB    </td>
                <td> 17/10/2022 </td>
            </tr>
            <tr>
                <td>Desenvolvimento de website    </td>
                <td>R$ 550 </td>
                <td>JOB    </td>
                <td> 17/10/2022 </td>
            </tr>
        </tbody>
    </table>
</Container>


    )
}