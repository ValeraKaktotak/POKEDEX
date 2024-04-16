import { type FC, type ReactNode,useEffect, useMemo, useState } from 'react'

import { useAuthState } from '../../firebase/hooks/useAuthState'

import { type IStoreContext } from './StoreContext'
import { StoreContext } from '.'

interface IStoreProvider {
  children: ReactNode
}

export const StoreProvider: FC<IStoreProvider> = ({ children }) => {
  const { userData } = useAuthState()

  const [store, setStore] = useState<IStoreContext['store']>({
    session: {
      isLogin: !!userData
    },
    userProfile: userData
  })

  useEffect(() => {
    if (userData) {
      setStore({
        ...store,
        session: {
          isLogin: !!userData
        },
        userProfile: userData
      })
    }
  }, [userData])

  const value = useMemo(() => {
    return { store, setStore }
  }, [store])

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
