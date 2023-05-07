import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps, Text } from '@ignite-ui-/react'
import { X } from 'phosphor-react'

export default {
  title: 'Alert/Toast',
  component: Toast,

  args: {
    children: (
      <>
        <Text>Testing</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    children: (
      <>
        <Text
          size="xl"
          style={{
            fontWeight: 'bold',
          }}
        >
          Appointment made
        </Text>
        <X
          weight="bold"
          size={22}
          style={{
            cursor: 'pointer',
          }}
        />
        <Text
          style={{
            color: '#A9A9B2',
          }}
        >
          Wednesday, October 23rd at 4pm
        </Text>
      </>
    ),
  },
}
