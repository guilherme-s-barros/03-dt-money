import { useEffect, useState, type ReactNode } from 'react'

import { TransactionsContext, type Transaction } from './context'
import { api } from '../../lib/api'

interface TransactionsContextProps {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsContextProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    fetchTransactions()
  }, [])

  async function fetchTransactions(query?: string) {
    const response = await api.get<Transaction[]>('/transactions', {
      params: {
        q: query
      }
    })

    setTransactions(response.data)
  }

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
