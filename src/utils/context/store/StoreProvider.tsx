import { useEffect, useMemo, useState, type FC, type ReactNode } from 'react'
import { StoreContext } from '.'
import { useAuthState } from '../../firebase/hooks/useAuthState'
import { type IStoreContext } from './StoreContext'

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

  console.log(store.userProfile)

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
