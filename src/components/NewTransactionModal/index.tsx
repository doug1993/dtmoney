
import Modal from 'react-modal'
import {Container,TransactionTypeButton,SelectBoxTransation} from './styles'
import closeImg from '../../assets/Fechar.svg'
import inComeImg from '../../assets/Entradas.svg'
import outComeImg from '../../assets/Saídas.svg'
import { FormEvent, useState,useContext } from 'react' 
import { TransactionsContext } from '../../TransactionsContext'
interface NewTransactionsModalProps{
    isOpen:boolean;
    onRequestClose: ()=>void
}
export function NewtransactionModal({isOpen,onRequestClose}:NewTransactionsModalProps){
  const {createTransaction} = useContext(TransactionsContext)
  
  const [ title,setTitle] = useState('')
  const [amount, setAmount ] = useState(0)
  const [category,setCategory ] = useState('')
  const [type,setType]  = useState('deposit')


   function handleNewTransaction(event: FormEvent){
    event.preventDefault()  
    createTransaction(
      {
        title,
        amount,
        category,
        type,
       }
     )
     
   }
   
  return(

      <Modal isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="global-overlay-modal"
      className="global-content-modal"
      >
    <button type='button' onClick={onRequestClose} className="button-close-modal">
      <img src={closeImg} alt="Fechar Modal" />
    </button>

        <Container onSubmit={handleNewTransaction}>
          <h2>cadastrar</h2>
          <input type="text" placeholder='Titulo'value={title}
           onChange={event => setTitle(event.target.value)}
          />
          <input type="number" placeholder='valor' value={amount}
           onChange={event => setAmount(Number(event.target.value))}
          />
           <TransactionTypeButton>

              <SelectBoxTransation type='button'  
               onClick={()=>{setType('deposit')}}
               ifActive={type==='deposit'}
               activeColor='green'
              >
                <img src={inComeImg}alt="Entrada"/>
                <span>Entrada</span>
              </SelectBoxTransation>

              <SelectBoxTransation type='button'
               onClick={()=> {setType('withdraw')}}
               ifActive={type==='withdraw'}
               activeColor='red'
              >
                <img src={outComeImg}alt="Saida"/>
                <span>Saida</span>
              </SelectBoxTransation>

           </TransactionTypeButton>

          <input type="text"placeholder='categoria' 
            value={category}
            onChange={event => setCategory(event.target.value)}
            />
          <button type='submit'>  Submit </button>
          
        </Container>
      </Modal>
      
  
    )
}