import { lazy } from 'react'

export const StorePageAsync = lazy(async () => await import('./StorePage'))
