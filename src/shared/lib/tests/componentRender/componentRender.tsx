import { render } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { type ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'

export interface componentRenderOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
}

export function componentRender (
  component: ReactNode,
  options: componentRenderOptions = {}
) {
  const { route = '/', initialState } = options
  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>{component}</StoreProvider>
    </MemoryRouter>
  )
}
