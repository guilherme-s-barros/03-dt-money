import { useTheme } from 'styled-components'
import {
  ArrowCircleDownIcon,
  ArrowCircleUpIcon,
  CurrencyDollarIcon
} from '@phosphor-icons/react'

import { SummaryCard, SummaryContainer } from './styles'
import { useTransactions } from '../../hooks/use-transactions'

export function Summary() {
  const theme = useTheme()
  const { transactions } = useTransactions()

  const { income, outcome } = transactions.reduce(
    (summary, transaction) => {
      summary[transaction.type] += transaction.amount

      return summary
    },
    { income: 0, outcome: 0 }
  )

  const total = income - outcome

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUpIcon size={32} color={theme['green-300']} />
        </header>

        <strong>{income}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDownIcon size={32} color={theme['red-300']} />
        </header>

        <strong>{outcome}</strong>
      </SummaryCard>

      <SummaryCard $variant="brand">
        <header>
          <span>Total</span>
          <CurrencyDollarIcon size={32} color={theme['white']} />
        </header>

        <strong>{total}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
