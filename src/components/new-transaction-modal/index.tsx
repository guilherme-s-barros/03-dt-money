import { zodResolver } from '@hookform/resolvers/zod'
import {
	ArrowCircleDownIcon,
	ArrowCircleUpIcon,
	XIcon,
} from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'

import { useTransactions } from '../../hooks/use-transactions'
import {
	CloseButton,
	Content,
	Overlay,
	TransactionType,
	TransactionTypeButton,
} from './styles'

const newTransactionFormSchema = z.object({
	description: z.string().min(1),
	amount: z.number(),
	category: z.string(),
	type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
	const { createTransaction } = useTransactions()

	const {
		control,
		register,
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = useForm({
		resolver: zodResolver(newTransactionFormSchema),
		defaultValues: {
			type: 'income',
		},
	})

	async function handleNewTransaction(data: NewTransactionFormInputs) {
		await createTransaction(data)
		reset()
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
						placeholder="Descrição"
						type="text"
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

					<Controller
						control={control}
						name="type"
						render={({ field }) => {
							return (
								<TransactionType
									onValueChange={field.onChange}
									value={field.value}
								>
									<TransactionTypeButton value="income" variant="income">
										<ArrowCircleUpIcon size={24} />
										Entrada
									</TransactionTypeButton>

									<TransactionTypeButton value="outcome" variant="outcome">
										<ArrowCircleDownIcon size={24} />
										Saída
									</TransactionTypeButton>
								</TransactionType>
							)
						}}
					/>

					<button type="submit" disabled={isSubmitting}>
						Cadastrar
					</button>
				</form>
			</Content>
		</Dialog.Portal>
	)
}
