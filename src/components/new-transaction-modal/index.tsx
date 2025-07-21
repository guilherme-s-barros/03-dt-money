import { ArrowCircleDownIcon, ArrowCircleUpIcon, XIcon } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <XIcon size={24} />
        </CloseButton>

        <form>
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <TransactionType>
            <TransactionTypeButton variant="income">
              <ArrowCircleUpIcon size={24} />
              Entrada
            </TransactionTypeButton>
            
            <TransactionTypeButton variant="outcome">
              <ArrowCircleDownIcon size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
