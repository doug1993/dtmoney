import Modal from 'react-modal'

interface NewTransactionsModalProps{
    isOpen: boolean
    onRequestClose: () => void
}



export function NewTransactionsModal ({isOpen,onRequestClose}: NewTransactionsModalProps){
    return (
        <Modal  isOpen={isOpen}
            onRequestClose={onRequestClose}
    >
                    <h2>Cadastrar Transacao</h2>
    </Modal>
    )
}