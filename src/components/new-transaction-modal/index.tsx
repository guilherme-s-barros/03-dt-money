import z from 'zod'
import * as Dialog from '@radix-ui/react-dialog'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  ArrowCircleDownIcon,
  ArrowCircleUpIcon,
  XIcon
} from '@phosphor-icons/react'

import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton
} from './styles'

const newTransactionFormSchema = z.object({
  description: z.string().min(1),
  amount: z.number(),
  category: z.string(),
  // type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm({
    resolver: zodResolver(newTransactionFormSchema),
  })

  async function handleNewTransaction(data: NewTransactionFormInputs) {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(data)
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <XIcon size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />

          <input
            type="number"
            placeholder="Preço"
            required
            {...register('amount', { valueAsNumber: true })}
          />

          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <TransactionType>
            <TransactionTypeButton
              value="income"
              variant="income"
            >
              <ArrowCircleUpIcon size={24} />
              Entrada
            </TransactionTypeButton>

            <TransactionTypeButton
              value="outcome"
              variant="outcome"
            >
              <ArrowCircleDownIcon size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit" disabled={isSubmitting}>Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
