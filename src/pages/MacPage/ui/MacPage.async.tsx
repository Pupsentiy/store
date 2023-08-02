import { lazy } from 'react'

export const MacPageAsync = lazy(async () => await import('./MacPage'))
