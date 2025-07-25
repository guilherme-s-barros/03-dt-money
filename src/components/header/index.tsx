import * as Dialog from '@radix-ui/react-dialog'

import { NewTransactionModal } from '../new-transaction-modal'

import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src="/logo.svg" alt="DT Money logo" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>
              Nova transação
            </NewTransactionButton>
          </Dialog.Trigger>
          
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
