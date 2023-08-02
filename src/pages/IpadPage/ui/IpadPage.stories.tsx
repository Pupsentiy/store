import type { Meta, StoryObj } from '@storybook/react'
import IpadPage from './IpadPage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'

const meta = {
  title: 'pages/IpadPage',
  component: IpadPage
} satisfies Meta<typeof IpadPage>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Light: Story = {
  args: {}
}
