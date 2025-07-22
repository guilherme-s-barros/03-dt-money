import { createContext } from 'react'

export interface Transaction {
  id: number,
  description: string,
  type: 'income' | 'outcome',
  category: string,
  amount: number,
  createdAt: string
}

interface TransactionsContextData {
  transactions: Transaction[]
}

export const TransactionsContext = createContext({} as TransactionsContextData)
