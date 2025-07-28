import { useMemo } from 'react'

import { useTransactions } from './use-transactions'

export function useSummary() {
	const transactions = useTransactions('transactions')

	const summary = useMemo(
		() =>
			transactions.reduce(
				(acc, transaction) => {
					if (transaction.type === 'income') {
						acc.income += transaction.amount
						acc.total += transaction.amount
					} else {
						acc.outcome += transaction.amount
						acc.total -= transaction.amount
					}

					return acc
				},
				{
					income: 0,
					outcome: 0,
					total: 0,
				},
			),
		[transactions],
	)

	return summary
}
