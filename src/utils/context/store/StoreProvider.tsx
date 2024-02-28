import { useMemo, useState, type FC, type ReactNode } from 'react'
import { StoreContext } from '.'
import { type IStoreContext } from './StoreContext'

interface IStoreProvider {
  children: ReactNode
}

export const StoreProvider: FC<IStoreProvider> = ({ children }) => {
  const [store, setStore] = useState<IStoreContext['store']>({
    session: {
      isLogin: false
    }
  })

  const value = useMemo(() => {
    return { store, setStore }
  }, [store])

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
