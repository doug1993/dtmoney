import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { useState } from "react";
import {NewTransactionsModal} from './components/NewTransactionsModal'
 Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false)

  function handleOpenNewTransactionsModal(){
      setIsNewTransactionsModalOpen(true)
  }
  function handleCloseNewTransactionsModal(){
      setIsNewTransactionsModalOpen(false)
  }



  return (
    //The header component will receive the function handleOpen through its appendchild by the function: onOpenNewTransactionsModal
    <>
      
      <Header onOpenNewTransactionsModal={handleOpenNewTransactionsModal}/>
      <Dashboard/>
      <NewTransactionsModal
        isOpen= {isNewTransactionsModalOpen}
        onRequestClose = {handleCloseNewTransactionsModal}
      
      />
      <GlobalStyle/> 
    </>
  );
}

export default App;
