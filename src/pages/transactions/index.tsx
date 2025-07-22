import { useEffect, useState } from 'react'
import { Header } from '../../components/header'
import { Summary } from '../../components/summary'
import { SearchForm } from './components/search-form'

import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable
} from './styles'

interface Transaction {
  id: number,
  description: string,
  type: 'income' | 'outcome',
  category: string,
  amount: number,
  createdAt: string
}

export function Transactions() {
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
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight $variant={transaction.type}>
                      {transaction.amount}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
