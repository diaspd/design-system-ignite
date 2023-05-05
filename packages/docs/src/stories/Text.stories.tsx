import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui-/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequatur repellendus sit consectetur quas neque nulla accusamus natus modi nostrum repellat, fuga, enim beatae optio veritatis magni asperiores, sint iste? ng elit. Deleniti vel dolore aspernatur quis in! Sed doloremque amet rem atque laborum eaque aspernatur dolores rerum vero, temporibus inventore, mollitia itaque nesciunt?',
  },

  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
