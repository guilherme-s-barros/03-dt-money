import { useContextSelector } from 'use-context-selector'

import {
	TransactionsContext,
	type TransactionsContextData,
} from '../contexts/transactions/context'

export function useTransactions<Selector extends keyof TransactionsContextData>(
	selector: Selector,
): TransactionsContextData[Selector] {
	return useContextSelector(TransactionsContext, (context) => context[selector])
}
