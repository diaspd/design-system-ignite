import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Tooltip = styled('div', {
  padding: '$3 $5',
  display: 'inline-block',
  borderBottom: '2px solid #$gray900',
  lineHeight: '$base',
  alignItems: 'center',
  borderRadius: '$md',
  backgroundColor: '$gray900',
  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',

  '&:after': {
    content: '',
    position: 'absolute',
    left: 0,
    right: 0,
    margin: '0 auto',
    width: 0,
    height: 0,
    borderTop: '25px solid $gray900',
    borderLeft: '20px solid transparent',
    borderRight: '20px solid transparent',
  },

  color: '$gray200',
})

export interface TooltipProps extends ComponentProps<typeof Tooltip> {
  as?: ElementType
}

Tooltip.displayName = 'Tooltip'
