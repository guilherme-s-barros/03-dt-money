import styled from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  transform: translateY(-50%);
`

type SummaryCardVariant = 'primary' | 'brand'

const variantMap = {
  primary: 'gray-600',
  brand: 'green-500',
} as const satisfies Record<SummaryCardVariant, string>

interface SummaryCardProps {
  $variant?: SummaryCardVariant
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${props => props.theme[variantMap[props.$variant ?? 'primary']]};
  border-radius: 0.5rem;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme['gray-300']}
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }
`
