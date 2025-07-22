import { ThemeProvider } from 'styled-components'

import { Transactions } from './pages/transactions'

import { TransactionsProvider } from './contexts/transactions/provider'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
