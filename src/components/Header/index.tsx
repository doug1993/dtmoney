import logo from '../../assets/Logo.svg'

import {Container,Content} from './styles'
interface HeaderProps{
    onOpenNewTransactionsModal: ()=>void
}

export function Header ({onOpenNewTransactionsModal}: HeaderProps){
 


    return(
    <Container>
            <Content>
                <img src={logo} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionsModal}>
                    Nova Transacao
                </button>

               
            </Content>
     </Container>
           
    )
}