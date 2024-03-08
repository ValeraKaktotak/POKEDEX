import { type UserCredential } from 'firebase/auth'
import { createContext } from 'react'

interface Store {
  session: {
    isLogin: boolean
  }
  userProfile?: UserCredential['user'] | null
}

export interface IStoreContext {
  store: Store
  setStore: React.Dispatch<React.SetStateAction<Store>>
}

export const StoreContext = createContext<IStoreContext>({
  store: {
    session: {
      isLogin: false
    },
    userProfile: null
  },
  setStore: () => {}
})
