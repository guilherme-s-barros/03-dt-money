import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 0.5rem;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border: 0;
      border-radius: 0.5rem;
      background: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button[type="submit"] {
      height: 3.625rem;
      border: 0;
      border-radius: 0.5rem;
      background: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      font-weight: bold;
      padding: 0 1.25rem;
      margin-top: 1.5rem;

      cursor: pointer;
      transition: background 0.2s;

      &:disabled {
        background: ${(props) => props.theme['green-700']};
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${(props) => props.theme['green-700']};
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1rem;
  right: 1rem;

  background: transparent;
  color: ${(props) => props.theme.white};
  border: 0;
  border-radius: 0.25rem;
  line-height: 0;
  padding: 0.5rem;
  cursor: pointer;
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
	variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
	RadioGroup.Item,
)<TransactionTypeButtonProps>`
  background: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-300']};
  padding: 1rem;
  border: 0;
  border-radius: 0.5rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  transition: 0.2s background;
  cursor: pointer;

  svg {
    color: ${(props) =>
			props.variant === 'income'
				? props.theme['green-300']
				: props.theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    background: ${(props) => props.theme['gray-600']};
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background: ${(props) =>
			props.variant === 'income'
				? props.theme['green-500']
				: props.theme['red-500']};
      
    svg {
      color: inherit;
    }
  }
`
