import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './Navbar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'

const meta = {
  title: 'shared/Navbar',
  component: Navbar
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Light: Story = {
  args: {}
}
