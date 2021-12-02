import Modal from 'react-modal'
import {Container,TransactionTypeContainer,RadioBox} from './styles'
import closeImg from '../../assets/exit.svg'
import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saídas.svg'
import { FormEvent, useState } from 'react'
import { api } from '../../services/api'


interface NewTransactionsModalProps{
    isOpen: boolean
    onRequestClose: () => void
}


 
export function NewTransactionsModal ({isOpen,onRequestClose}: NewTransactionsModalProps){
    const[title,setTitle]=useState('')
    const[value,setValue]=useState(0)
    const[category,setCategory]=useState('')
    const [type, setType] = useState('deposit')

    function handleCreateNewTransaction(event: FormEvent){
        //esta funcao evita o funcionamento padrao de reload da pagina apos enviar o formulario 
         event.preventDefault()
         
         const data = {
                 value,
                 title,
                 category,
                 type
             }
         api.post('/transactions',data)
    }
    
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
        <Container onSubmit= {handleCreateNewTransaction}> Container
            
                    <h2>Cadastrar Transacao</h2>
                    <input placeholder="Titulo" 
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />

                    <input type="number"placeholder="Valor" 
                        value={value}
                        onChange={event =>setValue(Number(event.target.value))}   
                    />
                    
                    <TransactionTypeContainer>                      
                        <RadioBox 
                            /* se type = deposit  entao class será active senao nao recebe nada  
                             className={type==='deposit'?'active':''}
                              */
                            id ="category" 
                            onClick={()=>{setType('deposit');}}
                            isActive={type ==='deposit'}
                            activeColor="green" 
                        >
                            <img src={incomeImg} alt="Entradas"  /> 
                        </RadioBox>

                        <RadioBox 
                            id ="category"
                            onClick={()=>{setType('withdraw');}}
                            isActive={type==='withdraw'}
                            activeColor="red"
                        >
                            <img src={outcomeImg} alt="Saídas"  />  <p>Saídas</p>
                        </RadioBox>

                    </TransactionTypeContainer>


                    <input placeholder="Categoria" 
                        value={category}
                        onChange={event => setCategory(event.target.value)}
                    />

                    <button type="submit">
                        Cadastrar
                    </button>
        </Container>             
    </Modal>
    )
}