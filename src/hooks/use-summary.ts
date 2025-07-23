import { useTransactions } from './use-transactions'

export function useSummary() {
  const { transactions } = useTransactions()

  const { income, outcome } = transactions.reduce(
    (summary, transaction) => {
      summary[transaction.type] += transaction.amount

      return summary
    },
    { income: 0, outcome: 0 }
  )

  const total = income - outcome

  return {
    income,
    outcome,
    total
  }
}
