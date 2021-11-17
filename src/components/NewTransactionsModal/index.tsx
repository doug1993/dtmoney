import Modal from 'react-modal'
import {Container,TransactionTypeContainer,RadioBox} from './styles'
import closeImg from '../../assets/exit.svg'
import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saídas.svg'
import { useState } from 'react'


interface NewTransactionsModalProps{
    isOpen: boolean
    onRequestClose: () => void
}


 
export function NewTransactionsModal ({isOpen,onRequestClose}: NewTransactionsModalProps){
    
    const [ type, setType] = useState('deposit')
    
    return (
        

    <Modal  
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    >
        <button type="button" id="exit" onClick= {onRequestClose} >
            <img src={closeImg} alt="Fechar Modal"/>
        </button>
        <Container> Container
            
                    <h2>Cadastrar Transacao</h2>
                    <input placeholder="Titulo" />

                    <input type="number"placeholder="Valor" />
                    
                    <TransactionTypeContainer>                      
                        <RadioBox 
                            /* se type = deposit  entao class será active senao nao recebe nada  
                             className={type==='deposit'?'active':''}
                              */
                            id ="category" 
                            onClick={()=>{setType('deposit');}}

                            isActive={type ==='deposit'}
                        >
                            <img src={incomeImg} alt="Entradas"  /> Entradas
                        </RadioBox>

                        <RadioBox 
                        
                        id ="category"
                        onClick={()=>{setType('withdraw');}}
                        isActive={type==='withdraw'}
                        >
                            <img src={outcomeImg} alt="Saídas"  />  <p>Saídas</p>
                        </RadioBox>

                    </TransactionTypeContainer>


                    <input placeholder="Categoria" />

                    <button type="submit">
                        Cadastrar
                    </button>
        </Container>             
    </Modal>
    )
}