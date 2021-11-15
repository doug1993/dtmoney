import { Container } from "../Dashboard/styles";
import { Summary } from "../Summary/index";
import { TransactionsTable } from "../TransactionsTable";

export function Dashboard() {
    return (
        <Container>
            <Summary/>
            <TransactionsTable/>
        </Container>
    )
}