import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from './LoginForm'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'features/LoginForm',
  component: LoginForm
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { username: '123', password: 'random' }
    })
  ]
}

export const withError: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { username: '123', password: 'random', error: 'ERROR' }
    })
  ]
}

export const Loading: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { isLoading: true }
    })
  ]
}
