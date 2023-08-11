import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextTheme } from './Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'

const meta = {
  title: 'shared/Text',
  component: Text
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'Title lorem Ip',
    text: 'Text Text Text Text'
  }
}

export const Error: Story = {
  args: {
    title: 'Title lorem Ip',
    text: 'Text Text Text Text',
    theme: TextTheme.ERROR
  }
}

export const OnlyTitle: Story = {
  args: {
    title: 'Title lorem Ip'
  }
}

export const OnlyText: Story = {
  args: {
    text: 'Text Text Text Text'
  }
}

export const PrimaryDark: Story = {
  args: {
    title: 'Title lorem Ip',
    text: 'Text Text Text Text'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title lorem Ip'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const OnlyTextDark: Story = {
  args: {
    text: 'Text Text Text Text'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
