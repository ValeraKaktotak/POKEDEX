import { useMemo, useState, type FC, type ReactNode } from 'react'
import { StoreContext } from '.'
import { AUTH_COOKIE } from '../../constants/cookie'
import { getCookie } from '../../helpers/cookies/getCookie'
import { type IStoreContext } from './StoreContext'

interface IStoreProvider {
  children: ReactNode
}

export const StoreProvider: FC<IStoreProvider> = ({ children }) => {
  const [store, setStore] = useState<IStoreContext['store']>({
    session: {
      isLogin: !!getCookie(AUTH_COOKIE)
    }
  })

  const value = useMemo(() => {
    return { store, setStore }
  }, [store])

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
