import { type StateSchema } from 'app/providers/StoreProvider'

export const getLoginIsLoadingState = (state: StateSchema) =>
  state?.loginForm?.isLoading || false
