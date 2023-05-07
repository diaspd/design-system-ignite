import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps, Text } from '@ignite-ui-/react'

export default {
  title: 'Alert/Tooltip',
  component: Tooltip,

  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    children: (
      <>
        <Text size="xl">21, October - unavailable</Text>
      </>
    ),
  },
}
