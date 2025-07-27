import { type ReactNode, useEffect, useState } from 'react'

import { api } from '../../lib/api'
import {
	type CreateTransactionInputs,
	type FetchTransactionsParams,
	type Transaction,
	TransactionsContext,
} from './context'

interface TransactionsContextProps {
	children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsContextProps) {
	const [transactions, setTransactions] = useState<Transaction[]>([])

	useEffect(() => {
		const controller = new AbortController()
		const signal = controller.signal

		fetchTransactions({ signal })

		return () => {
			controller.abort('Component was unmounted.')
		}
	}, [])

	async function fetchTransactions({
		query,
		signal,
	}: FetchTransactionsParams = {}) {
		const response = await api.get<Transaction[]>('/transactions', {
			signal,
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
