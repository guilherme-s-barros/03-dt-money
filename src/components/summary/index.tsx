import { useTheme } from 'styled-components'
import {
  ArrowCircleDownIcon,
  ArrowCircleUpIcon,
  CurrencyDollarIcon
} from '@phosphor-icons/react'

import { useTransactions } from '../../hooks/use-transactions'

import { currencyFormatter } from '../../utils/formatter'

import { SummaryCard, SummaryContainer } from './styles'

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

        <strong>{currencyFormatter.format(income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDownIcon size={32} color={theme['red-300']} />
        </header>

        <strong>{currencyFormatter.format(outcome)}</strong>
      </SummaryCard>

      <SummaryCard $variant="brand">
        <header>
          <span>Total</span>
          <CurrencyDollarIcon size={32} color={theme['white']} />
        </header>

        <strong>{currencyFormatter.format(total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
