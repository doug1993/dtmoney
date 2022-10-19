import styled from 'styled-components'
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { TransactionsTable } from './components/TransactionsTable';
import { useState } from 'react'
import Modal from 'react-modal'
const Title = styled.h1`
  font-size:68px; 
  font-family:'Roboto' ;
  color:#8257e6 ;
`
Modal.setAppElement('#root')
export function App() {
  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false)
  }
  return (
    
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <TransactionsTable/>
      <Modal isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}>
            <h2>cadastrar</h2>
        </Modal>
      <GlobalStyle/>

    </>
   
  );
}

