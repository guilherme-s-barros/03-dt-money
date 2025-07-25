import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border: 0;
    border-radius: 0.5rem;
    background: ${props => props.theme['gray-900']};
    color: ${props => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${props => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    padding: 1rem;
    background: transparent;
    border: 1px solid ${props => props.theme['green-300']};
    border-radius: 0.5rem;
    color: ${props => props.theme['green-300']};
    font-weight: bold;
    cursor: pointer;

    transition:
      background 0.2s,
      border-color 0.2s,
      color 0.2s;

    &:disabled {
      background: ${props => props.theme['green-700']};
      border-color: ${props => props.theme['green-700']};
      color: ${props => props.theme['gray-300']};
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${props => props.theme['green-500']};
      border-color: ${props => props.theme['green-500']};
      color: ${props => props.theme.white};
    }
  }
`
