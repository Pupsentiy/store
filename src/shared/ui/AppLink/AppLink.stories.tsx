import type { Meta, StoryObj } from '@storybook/react'

import { AppLink, AppLinkTheme } from './AppLink'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/'
  }
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: 'Link'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const SecondaryDark: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
    children: 'Link'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const PrimaryLight: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: 'Link'
  }
}

export const SecondaryLight: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
    children: 'Link'
  }
}
