import { type Reducer } from '@reduxjs/toolkit'
import { type ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { type StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { type FC, Fragment, type ReactNode, useEffect } from 'react'
import { useStore } from 'react-redux'
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
}

interface DynamicModuleLoaderProps {
  children: ReactNode
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount } = props
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useAppDispatch()

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer)
      dispatch({ type: `@INIT ${name} reducer` })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, _]) => {
          store.reducerManager.remove(name as StateSchemaKey)
          dispatch({ type: `@DESTROY ${name} reducer` })
        })
      }
    }

    // eslint-disable-next-line
  }, []);

  return <Fragment>{children}</Fragment>
}
