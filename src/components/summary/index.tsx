import { useTheme } from 'styled-components'
import {
  ArrowCircleDownIcon,
  ArrowCircleUpIcon,
  CurrencyDollarIcon
} from '@phosphor-icons/react'

import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  const theme = useTheme()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUpIcon size={32} color={theme['green-500']} />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDownIcon size={32} color={theme['red-500']} />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard $variant="brand">
        <header>
          <span>Total</span>
          <CurrencyDollarIcon size={32} color={theme['white']} />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
