import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './Modal'

const meta = {
  title: 'shared/Modal',
  component: Modal
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    isOpen: true,
    children:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci\n' +
      '        animi, corporis cum dicta, eum fuga impedit laborum maiores odio\n' +
      '        perferendis provident quam quo tenetur veniam vero vitae voluptate\n' +
      '        voluptatibus?'
  }
}
