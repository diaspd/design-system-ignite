import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Toast = styled('div', {
  padding: '$5',
  display: 'grid',
  lineHeight: '$base',
  gridTemplateColumns: '1fr 20px',
  gridTemplateRows: '1fr 1fr',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',

  color: '$gray200',
})

export interface ToastProps extends ComponentProps<typeof Toast> {
  as?: ElementType
}

Toast.displayName = 'Toast'
