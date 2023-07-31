import { type StoryFn } from "@storybook/react";
import { Theme } from "app/providers/ThemeProviders";

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => {
  return (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
};
