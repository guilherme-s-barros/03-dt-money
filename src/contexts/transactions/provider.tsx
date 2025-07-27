import { type ReactNode, useEffect, useState } from 'react'

import { api } from '../../lib/api'
import {
	type CreateTransactionInputs,
	type Transaction,
	TransactionsContext,
} from './context'

interface TransactionsContextProps {
	children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsContextProps) {
	const [transactions, setTransactions] = useState<Transaction[]>([])

	useEffect(() => {
		fetchTransactions()
	})

	async function fetchTransactions(query?: string) {
		const response = await api.get<Transaction[]>('/transactions', {
			params: {
				_sort: 'createdAt',
				_order: 'desc',
				q: query,
			},
		})

		setTransactions(response.data)
	}

	async function createTransaction(data: CreateTransactionInputs) {
		const { description, amount, category, type } = data

		const response = await api.post('/transactions', {
			description,
			amount,
			category,
			type,
			createdAt: new Date(),
		})

		setTransactions((state) => [response.data, ...state])
	}

	return (
		<TransactionsContext.Provider
			value={{
				transactions,
				fetchTransactions,
				createTransaction,
			}}
		>
			{children}
		</TransactionsContext.Provider>
	)
}
