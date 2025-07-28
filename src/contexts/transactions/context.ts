import { createContext } from 'use-context-selector'

export interface Transaction {
	id: number
	description: string
	type: 'income' | 'outcome'
	category: string
	amount: number
	createdAt: string
}

export interface FetchTransactionsParams {
	query?: string
	signal?: AbortSignal
}

export type CreateTransactionInputs = Omit<Transaction, 'id' | 'createdAt'>

export interface TransactionsContextData {
	transactions: Transaction[]
	fetchTransactions(params: FetchTransactionsParams): Promise<void>
	createTransaction(data: CreateTransactionInputs): Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextData)
