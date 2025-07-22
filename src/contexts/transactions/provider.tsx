import { useEffect, useState, type ReactNode } from 'react'

import { TransactionsContext, type Transaction } from './context'

interface TransactionsContextProps {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsContextProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    loadTransactions()
  }, [])

  async function loadTransactions() {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json() as Transaction[]

    setTransactions(data)
  }

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
