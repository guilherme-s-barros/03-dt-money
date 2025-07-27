import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionButton = styled.button`
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  height: 3.125rem;
  border: 0;
  font-weight: bold;
  border-radius: 0.5rem;
  padding: 0 1.25rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme['green-700']};
  }
`
