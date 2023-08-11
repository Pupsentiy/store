import { type StoryFn } from "@storybook/react";
import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";

export const StoreDecorator =
  (state: DeepPartial<StateSchema>) => (StoryComponent: StoryFn) =>
    (
      <StoreProvider initialState={state}>
        <StoryComponent />
      </StoreProvider>
    );
