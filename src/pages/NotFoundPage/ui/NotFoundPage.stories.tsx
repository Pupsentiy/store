import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProviders'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { NotFoundPage } from './NotFoundPage'

const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage
} satisfies Meta<typeof NotFoundPage>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Light: Story = {
  args: {}
}
