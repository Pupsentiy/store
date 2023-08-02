import type { Meta, StoryObj } from '@storybook/react'

import WatchPage from './WatchPage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'

const meta = {
  title: 'pages/WatchPage',
  component: WatchPage
} satisfies Meta<typeof WatchPage>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Light: Story = {
  args: {}
}
