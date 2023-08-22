import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProviders'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Navbar } from './Navbar'

const meta = {
  title: 'shared/Navbar',
  component: Navbar
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
}

export const Light: Story = {
  args: {},
  decorators: [StoreDecorator({})]
}

export const AuthNavbar: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      user: { authData: {} }
    })
  ]
}
