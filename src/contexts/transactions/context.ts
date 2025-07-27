import { createContext } from 'react'

export interface Transaction {
	id: number
	description: string
	type: 'income' | 'outcome'
	category: string
	amount: number
	createdAt: string
}

export type CreateTransactionInputs = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsContextData {
	transactions: Transaction[]
	fetchTransactions(query?: string): Promise<void>
	createTransaction(data: CreateTransactionInputs): Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextData)
