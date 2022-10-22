import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { TransactionsTable } from './components/TransactionsTable';
import { useState } from 'react'
import Modal from 'react-modal'
import { NewtransactionModal } from './components/NewTransactionModal';
import {  TransactionsProvider } from './TransactionsContext';

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
    
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <TransactionsTable/>
      <NewtransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle/>

    </TransactionsProvider>
   
  );
}

