import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProviders'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import ProductDetailsPage from './ProductDetailsPage'

const meta = {
  title: 'pages/ProductDetailsPage',
  component: ProductDetailsPage
} satisfies Meta<typeof ProductDetailsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Light: Story = {
  args: {}
}
